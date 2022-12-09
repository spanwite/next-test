import { FC } from 'react';

import { ICharacter } from '../types/rickAndMorty';

import imageLoader from '../imageLoader';

import Image from 'next/image';
import Link from 'next/link';

import cl from '../styles/Character.module.css';
import CharacterInfo from './CharacterInfo';


interface CharacterProps {
	character: ICharacter;
	tag?: 'li' | 'div';
	withInfo?: boolean;
}

const Character: FC<CharacterProps> = ({ character, tag, withInfo }) => {
	const Tag = tag || 'li';

	return (
		<Tag className={cl.character}>
			<Link href={'/characters/' + character.id}>
				<div className={cl.image}>
					<Image
						loader={imageLoader}
						unoptimized fill
						src={character.image}
						alt={character.name}
					/>
				</div>
			</Link>

			<strong className={cl.title}>{character.name}</strong>

			{withInfo &&
				<CharacterInfo character={character}/>
			}
		</Tag>
	);
};

export default Character;