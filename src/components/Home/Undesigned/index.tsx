import {
	faBook,
	faLaptopCode,
	faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Undesigned = () => {
	const sampleTest = 'Some quick example text to build on the card title and';
	const summary = useMemo(
		() =>
			sampleTest.length > 20
				? `${sampleTest.slice(undefined, 20)}...`
				: sampleTest,
		[]
	);
	return (
		<div>
			<div className='inner-container'>
				<div className='div_latest--post-wrapper'>
					<div
						className='col p-4 d-flex flex-column position-static'
						style={{ height: 300 }}>
						<div className='title-block'>
							<strong className='div-inline-block mb-2 text-primary'>
								Undefined
							</strong>
						</div>
						<div className='contents-block-wrapper justify-center'>
							<div className='contents-block flex-row '>(계획중)</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Undesigned;
