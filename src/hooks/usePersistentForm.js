"use client";
import { useState, useEffect } from 'react';

export const usePersistentForm = (key, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        setValues(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing persisted form data", e);
      }
    }
    setIsInitialized(true);
  }, [key]);

  // Save to localStorage on change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(key, JSON.stringify(values));
    }
  }, [key, values, isInitialized]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    localStorage.removeItem(key);
  };

  return [values, handleChange, resetForm, setValues];
};
