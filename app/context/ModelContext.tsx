'use client'

// context/ModelContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type of the context
interface ModelContextType {
    currentModelIndex: number;
    setCurrentModelIndex: (index: number) => void;
}

// Create a context
const ModelContext = createContext<ModelContextType | undefined>(undefined);

// Create a provider component
export const ModelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentModelIndex, setCurrentModelIndex] = useState(0);

    return (
        <ModelContext.Provider value={{ currentModelIndex, setCurrentModelIndex }}>
            {children}
        </ModelContext.Provider>
    );
};

// Custom hook to use the context
export const useModel = () => {
    const context = useContext(ModelContext);
    if (!context) {
        throw new Error('useModel must be used within a ModelProvider');
    }
    return context;
};