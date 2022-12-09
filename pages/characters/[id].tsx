import { GetStaticPaths, NextPage } from 'next';

import { ICharacter, GetCharacterResults } from '../../types/rickAndMorty';

import Head from 'next/head';
import Character from '../../components/Character';

import cl from '../../styles/CharacterPage.module.css';


const CharacterPage: NextPage<{ character: ICharacter }> = ({ character }) => {

	return (
		<>
			<Head>
				<title>{character.name}</title>
			</Head>
			<div className={cl.page}>
				<Character character={character} tag="div" withInfo={true}/>
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://rickandmortyapi.com/api/character');
	const { results }: GetCharacterResults = await response.json();

	const paths = results.map(character => {
		return {
			params: { id: character.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

interface Params {
	params: {
		id: string;
	};
}

export const getStaticProps = async ({ params }: Params) => {
	const response = await fetch('https://rickandmortyapi.com/api/character/' + params.id);
	const character: ICharacter = await response.json();

	return {
		props: { character },
	};
};

export default CharacterPage;