import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {FaHome, FaPhoneAlt} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';

import './Header.css';

export default function Header() {
	return (
		<header className='Header'>
			<div className='container'>
				<div className='Header__inner'>
					<div className='Header__details'>
						<address className='details--address'>
							<FaHome /> Абхазия, Цандрыпш, ул.Октябрьская, д.492
						</address>
						<div className='details--links'>
							<Link href={'mailto:booking@valentinahouse.ru'} className='details--mail'>
								<MdMail /> booking@valentinahouse.ru
							</Link>
							<Link href={'tel:+8 (862) 279-56-89'} className='details--phone'>
								<FaPhoneAlt /> 8 (862) 279-56-89
							</Link>
						</div>
					</div>
					<div className='Header__nav'>
						<h2 className='nav--title'>Alexander Hotel</h2>
						<nav className='nav__inner'>
							<Link href={'/'} className='nav--link'>
								HOME
							</Link>
							<Link href={'/rooms'} className='nav--link'>
								ROOMS
							</Link>
							<Link href={'/about'} className='nav--link'>
								INFO
							</Link>
						</nav>
						<div className='nav__socials'>
							<Link href={'#'} className='socials__item'>
								<Image width={24} height={24} src={'/Telegram.svg'} alt='Telegram'></Image>
							</Link>
							<Link href={'#'} className='socials__item'>
								<Image width={24} height={24} src={'/Whatsapp.svg'} alt='Whatsapp'></Image>
							</Link>
							<Link href={'#'} className='socials__item'>
								<Image width={24} height={24} src={'/Facebook.svg'} alt='Facebook'></Image>
							</Link>
							<Link href={'#'} className='socials__item'>
								<Image width={24} height={24} src={'/VK.svg'} alt='VKontakte'></Image>
							</Link>
							<Link href={'#'} className='socials__item'>
								<Image width={24} height={24} src={'/Instagram.svg'} alt='Instagram'></Image>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
