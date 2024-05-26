'use client';
import React, {Suspense} from 'react';
import {useSearchParams} from 'next/navigation';
import hotelsData from '../../hotelsData.json';

import './search.css';
import Link from 'next/link';
import Header from '@/app/Components/Header/Header';
import Image from 'next/image';

export default function Hotel_Suspense() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Hotel />
		</Suspense>
	);
}

export function Hotel() {
	const searchParams = useSearchParams();

	const startDate = searchParams.get('startDate');
	const endDate = searchParams.get('endDate');
	const children = parseInt(searchParams.get('children'), 10);
	const adult = parseInt(searchParams.get('adult'), 10);
	const guestCount = children + adult;

	// Проверяем, есть ли доступные отели
	const availableHotels = hotelsData.filter(room => room.max_occupancy >= guestCount);

	// Если нет доступных отелей, выводим сообщение о возврате на главную страницу
	if (availableHotels.length === 0) {
		return (
			<p>
				No available hotels.{' '}
				<Link href='/' style={{color: 'red'}}>
					Return to homepage
				</Link>
			</p>
		);
	}

	return (
		<div className='Hotels'>
			<Header />
			<div className='container'>
				<div className='hotel-container'>
					{availableHotels.map((room, index) => (
						<HotelCard key={index} room={room} startDate={startDate} endDate={endDate} guestCount={guestCount} />
					))}
				</div>
			</div>
		</div>
	);
}

export function HotelCard({room, startDate, endDate, guestCount}) {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const diffTime = Math.abs(end - start);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	const calculateTotalPrice = () => {
		return diffDays * room.price_per_day;
	};

	return guestCount > room.max_occupancy ? (
		''
	) : (
		<div className='hotel-card'>
			<Image width={300} height={200} src={room.image} alt={`${room.type} room`} className='room-image'></Image>
			<h2 className='room-name'>{room.type} Room</h2>
			<p className='room-count'>Number of rooms: {room.number_of_rooms}</p>
			<p className='area-value'>Area: {room.area} m²</p>
			<p className='bed-type'>Bed type: {room.bed_type}</p>
			<p className='room-amenities'>Amenities: {room.amenities.join(', ')}</p>
			<p className='pets-allow'>Pets allowed: {room.pets_allowed ? 'Yes' : 'No'}</p>
			<p className='room-price'>Price per day: ${room.price_per_day}</p>
			<p className='room-total-price'>
				Total price for stay: ${startDate && endDate ? calculateTotalPrice() : 'Select dates'} - {startDate && endDate ? diffDays : ''} days
			</p>
		</div>
	);
}
