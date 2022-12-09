import { NextPage } from 'next';

import Head from 'next/head';

import cl from '../styles/HomePage.module.css'


const Home: NextPage = ( ) => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className={cl.page}>
				<div className={cl.greeting}>Hello 👋</div>
			</div>
		</>
	);
};
export default Home;