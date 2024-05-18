import Header from '@/app/Components/Header/Header';
import Rooms from '@/app/Components/Rooms/Rooms';
import React from 'react';

export default function page() {
	return (
		<>
			<Header />
			<div style={{paddingTop: '180px'}}>
				<Rooms />
			</div>
		</>
	);
}
