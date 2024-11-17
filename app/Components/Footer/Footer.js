import React from 'react';
import './Footer.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<p className='footer-text'>© 2024 Room Booking Platform. All rights reserved.</p>
				<nav className='footer-nav'>
					<Link href='/about' className='footer-link'>
						About
					</Link>
					<Link href='/#' className='footer-link'>
						Privacy Policy
					</Link>
					<Link href='/#' className='footer-link'>
						Contact
					</Link>
				</nav>
			</div>
		</footer>
	);
}
