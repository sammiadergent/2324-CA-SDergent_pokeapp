import React from 'react';
import styles from '@/styles/Pokemon.module.css';
import Wittekader from '../achtergrond/wittekader.svg';
import getSpriteUrl from '@/data/spritesPokemonData.js';
import Geluid from '@/components/volume.svg';
import { playPokemonCry } from '@/data/audioPlayer';
import HpChart from '@/data/hpChart';
import AttackChart from '@/data/attackChart';
import DefenseChart from '@/data/defenseChart';
import SpChart from '@/data/spChart';
import DefChart from '@/data/defChart';
import SpeedChart from '@/data/speedChart';

const pokemonData = ({ pokemon }) => {
  const handleClick = () => {
    playPokemonCry(pokemon.id);
  };
  console.log(pokemon.stats[1].base_stat);
  return (
    <div>
      <div className={styles.pokemonnaam}>{pokemon.name}</div>
      <div className={styles.pokemontype}>
        {pokemon.types.map((typeObj, index) => (
          <div key={index}>{typeObj.type.name}</div>
        ))}
      </div>
      <div className={styles.fotovierkant}>
        <img
          src={getSpriteUrl(pokemon.id)}
          alt={pokemon.name}
          className={styles.pokemonfoto}
        />
        <Geluid
          className={styles.geluid}
          id={pokemon.id}
          onClick={handleClick}
        />
      </div>
      <Wittekader width="100%" className={styles.wittekader} />
      <div className={styles.tab}>Stats</div>
      <div className={styles.hpchart}>
        <HpChart hp={pokemon.stats[0].base_stat} className={styles.diagram} />
        <div className={styles.stattext}>Hp</div>
      </div>
      <div className={styles.attackchart}>
        <AttackChart
          attack={pokemon.stats[1].base_stat}
          className={styles.diagram}
        />
        <div className={styles.stattext}>Attack</div>
      </div>
      <div className={styles.defensechart}>
        <DefenseChart
          defense={pokemon.stats[2].base_stat}
          className={styles.diagram}
        />
        <div className={styles.stattext}>Defense</div>
      </div>
      <div className={styles.spchart}>
        <SpChart sp={pokemon.stats[3].base_stat} className={styles.diagram} />
        <div className={styles.stattext}>Sp.Atk</div>
      </div>
      <div className={styles.defchart}>
        <DefChart def={pokemon.stats[4].base_stat} className={styles.diagram} />
        <div className={styles.stattext}>Def.Atk</div>
      </div>
      <div className={styles.speedchart}>
        <SpeedChart
          speed={pokemon.stats[5].base_stat}
          className={styles.diagram}
        />
        <div className={styles.stattext}>Speed</div>
      </div>
    </div>
  );
};

export default pokemonData;
