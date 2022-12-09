import { FC } from 'react';

import { ICharacter } from '../types/rickAndMorty';

import cl from '../styles/CharacterInfo.module.css'


interface CharacterInfoProps {
	character: ICharacter;
}

const CharacterInfo: FC<CharacterInfoProps> = ({ character }) => {
	return (
		<ul className={cl.list}>
			<li>
				<span className={cl.info}>Status:</span> {character.status}
			</li>
			<li>
				<span className={cl.info}>Gender:</span> {character.gender}
			</li>
			<li>
				<span className={cl.info}>Species:</span> {character.species}
			</li>
			<li>
				<span className={cl.info}>Location:</span> {character.location.name}
			</li>
		</ul>
	);
};

export default CharacterInfo;