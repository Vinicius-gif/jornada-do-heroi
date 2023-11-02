'use client';

import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import getHeroes from '@/api/getHeroes';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { heroes, setHeroes } = useContext(HeroesContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    
    if (searchValue !== '') {
      const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      setHeroes(filteredHeroes);
    } else {
      getHeroes().then((response) => {
        setHeroes(response);
      });
    }

    setSearchValue('');
  };

  return (
    <form
      action=""
      className="flex bg-white max-w-md shadow-sm justify-between gap-3 pr-3 xl:w-full lg:w-full md:w-4/5 sm:w-1/2"
      onSubmit={handleSearch}
    >
      <input
        className="p-3 grow outline-none text-xs font-medium border-r border-gray-300 text-gray-800"
        type="search"
        placeholder="Buscar Herói"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-none border-none text-base flex items-center justify-center text-gray-800"
      >
        <SearchIcon color="action"/>
      </button>
    </form>
  );
};

export default SearchBar;
