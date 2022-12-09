import { NextPage } from 'next';

import { GetCharacterResults, ICharacter } from '../../types/rickAndMorty';

import Head from 'next/head';
import CharacterList from '../../components/CharacterList';


interface HomeProps {
	characters: ICharacter[];
}

const Home: NextPage<HomeProps> = ({ characters }) => {
	return (
		<>
			<Head>
				<title>Characters</title>
			</Head>
			<CharacterList characters={characters}/>
		</>
	);
};

export async function getStaticProps() {
	const response = await fetch('https://rickandmortyapi.com/api/character');
	const { results }: GetCharacterResults = await response.json();

	return {
		props: { characters: results },
	};
};

export default Home;