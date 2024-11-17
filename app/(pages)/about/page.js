import React from 'react';
import './about.css';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/Footer/Footer';

export default function About() {
	return (
		<>
			<Header />
			<div className='about'>
				<div className='container'>
					<div className='about__inner'>
						<h1 className='about-title'>About Us</h1>
						<p className='about-text'>Welcome to our Room Booking platform! Our goal is to make finding and booking the perfect room as simple as possible. We provide an intuitive search experience that lets you filter by date range, number of guests, and pet-friendly options.</p>
						<p className='about-text'>We’re dedicated to delivering a seamless user experience, helping you save time and focus on what matters most. Thank you for trusting us to assist with your travel needs!</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
