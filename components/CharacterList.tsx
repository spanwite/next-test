import { FC } from 'react';

import { ICharacter } from '../types/rickAndMorty';

import Character from './Character';

import cl from '../styles/CharacterList.module.css'


interface CharacterListProps {
	characters: ICharacter[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
	return (
		<ul className={cl.list}>
			{characters.map(character =>
				<Character key={character.id} character={character}/>,
			)}
		</ul>
	);
};

export default CharacterList;