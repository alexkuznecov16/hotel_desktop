'use client';
import React, {useEffect, useState} from 'react';
import {BsPeopleFill} from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';

import './Intro.css';
import Image from 'next/image';

export default function Intro() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [isGuestOpen, setGuestOpen] = useState(null);
	const [children, setChildrenCount] = useState(0);
	const [adult, setAdultCount] = useState(0);
	const [hasAnimal, setHasAnimal] = useState(false);

	useEffect(() => {
		const maxDate = '2024-12-31';
		document.getElementById('input1').setAttribute('max', maxDate);
		document.getElementById('input2').setAttribute('max', maxDate);
	}, []);

	const buildSearchLink = () => {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);
		const minDate = tomorrow.toISOString().split('T')[0];
		if (startDate < minDate || endDate < minDate) {
			alert('Hotel is available from next day');
			return;
		}

		const oneDay = 24 * 60 * 60 * 1000;
		const diffInDays = Math.round(Math.abs((new Date(endDate) - new Date(startDate)) / oneDay));

		if (diffInDays < 2) {
			alert('Minimum number of days - 2');
			return;
		}

		if (parseInt(children) + parseInt(adult) > 8) {
			alert('Max count of guests - 6');
			return;
		}

		if (startDate !== null && endDate !== null && children !== null && adult !== null) {
			if (startDate > endDate) {
				alert('Please, enter correct date');
				return;
			}

			const params = {
				startDate: startDate,
				endDate: endDate,
				children: children,
				adult: adult,
				hasAnimal: hasAnimal,
			};

			let queryString = Object.keys(params)
				.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
				.join('&');

			location.href = `/search?${queryString}`;
		}
	};

	return (
		<div className='Intro'>
			<Image width={500} height={50} src={'/wave.png'} alt='wave' className='wave'></Image>
			<div className='container'>
				<div className='Intro__inner'>
					<div className='Intro__filter--block'>
						<div className='filter--item'>
							<label htmlFor='input1'>Start date</label>
							<div className='input__inner'>
								<input required onChange={e => setStartDate(e.target.value)} id='input1' placeholder='04-04-2024' type='date' />
							</div>
						</div>
						<div className='filter--item'>
							<label htmlFor='input2'>End date</label>
							<div className='input__inner'>
								<input required onChange={e => setEndDate(e.target.value)} id='input2' placeholder='04-05-2024' type='date' />
							</div>
						</div>
						<div className='filter--item'>
							<label htmlFor='input3'>Guest count</label>
							<div className='input__inner'>
								<input className='number-input' required readOnly onClick={() => setGuestOpen(true)} id='input3' placeholder='0' type='number' />
								<BsPeopleFill />
								{isGuestOpen ? (
									<div className='guest__modal'>
										<IoMdClose className='close__guest' onClick={() => setGuestOpen(false)} />
										<label htmlFor='guest1'>Children</label>
										<div className='input__inner'>
											<input required onChange={e => setChildrenCount(e.target.value)} id='guest1' min={0} max={4} placeholder='0' type='number' />
										</div>
										<label htmlFor='guest2'>Adults</label>
										<div className='input__inner'>
											<input required onChange={e => setAdultCount(e.target.value)} id='guest2' min={0} max={4} placeholder='0' type='number' />
										</div>
										<p>Have pets?</p>
										<div className='radio--input__inner'>
											<label htmlFor='yes'>Yes</label>
											<div className='input__inner'>
												<input required id='yes' name='haspetsOrNo' onChange={() => setHasAnimal(true)} type='radio' />
											</div>
											<label htmlFor='no'>No</label>
											<div className='input__inner'>
												<input required id='no' name='haspetsOrNo' onChange={() => setHasAnimal(false)} type='radio' />
											</div>
										</div>
									</div>
								) : (
									''
								)}
							</div>
						</div>
						<div className='filter--item'>
							<button onClick={() => buildSearchLink()}>Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
