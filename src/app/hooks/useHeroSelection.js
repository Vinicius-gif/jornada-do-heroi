import { useContext } from 'react';
import { HeroesContext } from '@/app/contexts/HeroesContext';

// Hook para selecionar os heróis e controlar a modal
const useHeroSelection = () => {

  const {
    selectedHeroes,
    setSelectedHeroes,
    setWinner,
    setIsModalOpen,
  } = useContext(HeroesContext);

  const handleHeroSelect = (hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
      if (selectedHeroes.length === 1) {
        // Determine the winner when two heroes are selected.
        const hero1 = selectedHeroes[0];
        const hero2 = hero;
        const winner = hero1.powerstats.combat > hero2.powerstats.combat ? hero1 : hero2;
        setWinner(winner);
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWinner(null);
    setSelectedHeroes([]);
  };

  return { handleHeroSelect, closeModal };
};

export default useHeroSelection;
