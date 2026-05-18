"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PlantCard = ({ plant }) => {
  const plantData = {
    pothos: { name: 'Pothos', light: 'Low to Bright Indirect', care: 'Easy', image: '🌿' },
    'snake-plant': { name: 'Snake Plant', light: 'Any light', care: 'Neglect-friendly', image: '🌱' },
    'zz-plant': { name: 'ZZ Plant', light: 'Low to Bright', care: 'Hard to kill', image: '🍃' },
    monstera: { name: 'Monstera', light: 'Bright Indirect', care: 'Moderate', image: '🪴' },
    philodendron: { name: 'Philodendron', light: 'Low to Bright Indirect', care: 'Easy', image: '🌿' },
    'peace-lily': { name: 'Peace Lily', light: 'Low to Moderate', care: 'Talkative (wilts when thirsty)', image: '🌸' },
    ferns: { name: 'Ferns', light: 'Moderate Indirect', care: 'Moisture-loving', image: '🌿' },
    'spider-plant': { name: 'Spider Plant', light: 'Bright Indirect', care: 'Easy', image: '🕷️' },
    syngonium: { name: 'Arrowhead / Syngonium', light: 'Medium Indirect', care: 'Easy', image: '🌿' },
    peperomia: { name: 'Peperomia', light: 'Medium to Bright Indirect', care: 'Easy', image: '🍃' },
    'prayer-plant': { name: 'Prayer Plant', light: 'Medium Indirect', care: 'Humidity-loving', image: '🌿' },
    tradescantia: { name: 'Tradescantia', light: 'Bright Indirect', care: 'Fast-growing', image: '🌿' },
    moss: { name: 'Moss / Preserved Look', light: 'Low to Medium', care: 'Texture-forward', image: '🍃' },
    'designer-choice': { name: "Designer's Choice", light: 'Matched to the site', care: 'Curated', image: '🪴' },
    'fiddle-leaf-fig': { name: 'Fiddle Leaf Fig', light: 'Bright Indirect', care: 'Attentive', image: '🌱' },
    'rubber-plant': { name: 'Rubber Plant', light: 'Medium to Bright Indirect', care: 'Moderate', image: '🍃' },
    dracaena: { name: 'Dracaena', light: 'Low to Medium', care: 'Easy', image: '🌿' },
    palms: { name: 'Palms', light: 'Bright Indirect', care: 'Moderate', image: '🌴' },
    'succulents-cacti': { name: 'Succulents / Cacti', light: 'Bright Light', care: 'Low-water', image: '🌵' },
    orchids: { name: 'Orchids', light: 'Bright Indirect', care: 'Seasonal', image: '🌸' },
    'not-sure': { name: 'Not Sure Yet', light: 'To be selected', care: 'Guided by The Plant Lady', image: '🪴' },
  };

  const data = plantData[plant] || { name: plant, light: 'Unknown', care: 'Unknown', image: '🪴' };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
    >
      <div className="text-4xl bg-plant-offwhite p-3 rounded-full">{data.image}</div>
      <div>
        <h4 className="font-bold text-gray-900">{data.name}</h4>
        <div className="text-xs text-gray-500 space-y-0.5">
          <p><strong>Light:</strong> {data.light}</p>
          <p><strong>Care:</strong> {data.care}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantCard;
