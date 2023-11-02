'use client';

import React, { useContext } from 'react';
import CardHero from './CardHero/CardHero';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import getHeroes from '@/api/getHeroes';

export default function ListHeroes() {

  const {heroes, setHeroes} = useContext(HeroesContext);
  //const [totalPower, settotalPower] = React.useState([]);

  React.useEffect(() => {
    getHeroes().then((response) => {
      setHeroes(response);
    });
  }, [setHeroes]);

  return (
    <section className="grid p-12 gap-6 content-center justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      {heroes.map((hero) => (
        <CardHero key={hero.id} name={hero.name} thumb={hero.images.lg} power={hero.powerstats.combat} />
      ))}
    </section>
  );
}
