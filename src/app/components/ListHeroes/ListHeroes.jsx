'use client';

import React, { useContext, useState } from 'react';
import CardHero from './CardHero/CardHero';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import getHeroes from '@/api/getHeroes';
import Header from '../Header/Header';

export default function ListHeroes() {

  const {heroes, setHeroes, setLoading} = useContext(HeroesContext);
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    getHeroes().then((response) => {
      setHeroes(response);
      setLoading(false);
    });
  }, [setHeroes, setLoading]);

  const filteredHeroes = search.length > 0
    ? heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <main>
      <Header searchValue={search} setSearchValue={setSearch}/>
      {search.length > 0 ? (
        <section className="grid p-12 gap-6 content-center justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {filteredHeroes.map((hero) =>  (
            <CardHero key={hero.id} name={hero.name} thumb={hero.images.lg} power={hero.powerstats.combat} />
          ))}
        </section>
      ) : (
        <section className="grid p-12 gap-6 content-center justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {heroes.map((hero) =>  (
            <CardHero key={hero.id} name={hero.name} thumb={hero.images.lg} power={hero.powerstats.combat} />
          ))}
        </section>
      )}
    </main>
  );
}
