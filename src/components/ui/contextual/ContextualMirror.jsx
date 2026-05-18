"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import PlantCard from './PlantCard';

const plantAccentClasses = [
    'bg-plant-leaf',
    'bg-plant-leaf-light',
    'bg-plant-copper',
    'bg-plant-rust',
    'bg-plant-tan',
];

const PlantPaletteCluster = ({ plants }) => {
    if (!plants.length) {
        return null;
    }

    return (
        <motion.div
            key="plant-palette"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-plant-copper">
                    Selected Plant Palette
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900">
                    A first-pass cluster for the quote conversation
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                    This preview updates from the plant choices in the form and can later drive a generated concept rendering.
                </p>
            </div>

            <div className="relative min-h-72 overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                    {plants.slice(0, 8).map((plant, index) => (
                        <div
                            key={plant.id}
                            className={`rounded-lg border border-gray-200 bg-plant-white p-3 shadow-sm ${
                                index % 3 === 0 ? 'translate-y-5' : ''
                            } ${index % 4 === 0 ? 'sm:translate-x-3' : ''}`}
                        >
                            <div className={`h-1.5 w-12 rounded-full ${plantAccentClasses[index % plantAccentClasses.length]}`} />
                            <div className="mt-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-plant-offwhite text-sm font-bold text-plant-leaf-dark">
                                    {plant.label
                                        .split(' ')
                                        .map((word) => word[0])
                                        .join('')
                                        .slice(0, 2)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold leading-tight text-gray-900">
                                        {plant.label}
                                    </h4>
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Palette candidate
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant.id} />
                ))}
            </div>
        </motion.div>
    );
};

const ContextualMirror = () => {
    const activeSection = useSelector((state) => state.ui.activeContextSection);
    const isOpen = useSelector((state) => state.ui.isSalesSlideoverOpen);
    const selectedPlantPalette = useSelector((state) => state.ui.selectedPlantPalette || []);

    if (!isOpen) return null;

    return (
        <div className="h-full flex flex-col p-8 space-y-6">
            <AnimatePresence mode="wait">
                {(!activeSection || (activeSection === 'plant-palette' && selectedPlantPalette.length === 0)) && (
                    <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center py-20"
                    >
                        <h3 className="text-2xl font-bold text-gray-300">Your Design Studio</h3>
                        <p className="text-gray-400 mt-2 text-sm">Select options on the right to start building your plantscape.</p>
                    </motion.div>
                )}

                {activeSection === 'ai-advice' && (
                    <motion.div
                        key="ai-advice"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-plant-leaf/5 p-8 rounded-3xl border-2 border-plant-leaf/10 text-center"
                    >
                        <div className="text-6xl mb-6">🤖</div>
                        <h3 className="text-xl font-bold text-gray-900">Plant Expert AI</h3>
                        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                            Instead of waiting for a callback, you can speak directly with our AI Plant Specialist. It's trained on over 500 tropical species and can help you immediately!
                        </p>
                    </motion.div>
                )}

                {activeSection === 'plant-palette' && (
                    <PlantPaletteCluster plants={selectedPlantPalette} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContextualMirror;
