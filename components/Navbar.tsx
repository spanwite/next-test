import { FC } from 'react';
import Link from 'next/link';

import cl from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';


const routes = [
	{ path: '/', text: 'Home' },
	{ path: '/characters', text: 'Characters' },
];

const Navbar: FC = () => {
	const { pathname } = useRouter();

	return (
		<nav>
			<ul className={cl.list}>
				{routes.map(route =>
					<li key={route.path}>
						<Link
							href={route.path}
							className={pathname === route.path ? [cl.link, cl.link_active].join(' ') : cl.link}
						>
							{route.text}
						</Link>
					</li>,
				)}
			</ul>
		</nav>
	);
};

export default Navbar;