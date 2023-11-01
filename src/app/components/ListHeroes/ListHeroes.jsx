'use client';

import getHeroes from '@/api/getHeroes';
import React from 'react';
import CardHero from './CardHero/CardHero';

export default function ListHeroes() {

  const [heroes, setHeroes] = React.useState([]);
  //const [totalPower, settotalPower] = React.useState([]);

  React.useEffect(() => {
    getHeroes().then((response) => {
      setHeroes(response);
    });
  }, [setHeroes]);

  return (
    <section className="grid grid-cols-4 p-12 gap-6 items-center justify-center">
      {heroes.map((hero) => (
        <CardHero key={hero.id} name={hero.name} thumb={hero.images.lg} power={hero.powerstats.combat} />
      ))}
    </section>
  );
}
