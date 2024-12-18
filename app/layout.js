import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'Hotel',
	description: 'Created by Alexander',
	icons: {
		icon: '/hotel.ico',
	},
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
