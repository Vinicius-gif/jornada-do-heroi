'use client';

import React, { createContext, useState } from 'react';

export const HeroesContext = createContext();

const HeroesContextProvider = ({children}) => {

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    heroes,
    setHeroes,
    loading,
    setLoading
  };

  return (
    <HeroesContext.Provider value={value}>
      {children}
    </HeroesContext.Provider>
  );
};

export default HeroesContextProvider;
