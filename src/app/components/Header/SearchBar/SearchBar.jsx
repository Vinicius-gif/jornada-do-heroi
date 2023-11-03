'use client';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({search, setSearch}) => {
  
  return (
    <section className="flex bg-white max-w-md shadow-sm justify-between gap-3 pr-3 xl:w-full lg:w-full md:w-4/5 sm:w-1/2">
      <input
        name="search" 
        className="p-3 grow outline-none text-lg font-medium border-r border-gray-300 text-gray-800 placeholder-gray-800"
        type="text"
        placeholder="Buscar Herói..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        className="bg-none border-none text-base flex items-center justify-center text-gray-800"
      >
        <SearchIcon color="action"/>
      </button>
    </section>
  );
};

export default SearchBar;
