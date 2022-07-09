import {
	faBook,
	faLaptopCode,
	faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const Statistics = (): JSX.Element => {
	return (
		<div className='inner-container'>
			<div className='div_statistics-wrapper'>
				<div
					className='col p-4 d-flex flex-column position-static'
					style={{ height: 300 }}>
					<div className='title-block'>
						<strong className='div-inline-block mb-2 text-primary'>
							Statstics
						</strong>
					</div>
					<div className='contents-block-wrapper justify-center'>
						<div className='contents-block flex-row '>
							<Card style={{ height: '12rem', flex: '0.3' }}>
								<Card.Header>
									<FontAwesomeIcon icon={faUsers} size={'2x'} />
								</Card.Header>
								<Card.Body>
									<Card.Title>방문자 수</Card.Title>
									<Card.Text>100,203</Card.Text>
								</Card.Body>
							</Card>
							<Card style={{ height: '12rem', flex: '0.3' }}>
								<Card.Header>
									<FontAwesomeIcon icon={faBook} size={'2x'} />
								</Card.Header>
								<Card.Body>
									<Card.Title>학습 포스트</Card.Title>
									<Card.Text>3</Card.Text>
								</Card.Body>
							</Card>
							<Card style={{ height: '12rem', flex: '0.3' }}>
								<Card.Header>
									<FontAwesomeIcon icon={faLaptopCode} size={'2x'} />
								</Card.Header>
								<Card.Body>
									<Card.Title>웹 프로젝트</Card.Title>
									<Card.Text>3</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
