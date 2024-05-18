import React from 'react';
import hotelsData from '../../hotelsData.json';

import './Rooms.css';

export default function Rooms() {
	return (
		<div className='Rooms'>
			<div className='container'>
				<div className='Rooms__inner'>
					{hotelsData.map((room, index) => (
						<RoomCard room={room} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export function RoomCard({room}) {
	return (
		<div className='room-card'>
			<img src={room.image} alt={room.type} className='room-image' />
			<div className='room-details'>
				<h2 className='room-name'>{room.type} Room</h2>
				<p className='room-description'>{room.description}</p>
				<p className='room-info'>
					<span>Number of rooms: {room.number_of_rooms}</span>
					<span>Area: {room.area} m²</span>
					<span>Bed type: {room.bed_type}</span>
					<span>Amenities: {room.amenities.join(', ')}</span>
					<span>Pets allowed: {room.pets_allowed ? 'Yes' : 'No'}</span>
					<span>Price per day: ${room.price_per_day}</span>
					<span>Max occupancy: {room.max_occupancy}</span>
				</p>
			</div>
		</div>
	);
}
