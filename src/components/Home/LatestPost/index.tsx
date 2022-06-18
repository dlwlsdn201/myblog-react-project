import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const LatestPost = () => {
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
								Latest Post
							</strong>
						</div>
						<div className='contents-block-wrapper justify-center'>
							<div className='contents-block flex-row '>
								<Card style={{ flex: 0.5 }}>
									<Card.Body
										style={{
											display: 'flex',
											flexFlow: 'column nowrap',
											alignItems: 'center',
											justifyContent: 'center'
										}}>
										<Card.Title>리덕스란?</Card.Title>
										<Card.Subtitle className='mb-2 text-muted'>
											#learn
										</Card.Subtitle>
										<Card.Text>{summary}</Card.Text>
										<Card.Link href='#'>바로가기</Card.Link>
									</Card.Body>
								</Card>
								<Card style={{ flex: 0.5 }}>
									<Card.Body
										style={{
											display: 'flex',
											flexFlow: 'column nowrap',
											alignItems: 'center',
											justifyContent: 'center'
										}}>
										<Card.Title>뚜벅여행 코스 추천 서비스</Card.Title>
										<Card.Subtitle className='mb-2 text-muted'>
											#project
										</Card.Subtitle>
										<Card.Text>{summary}</Card.Text>
										<Card.Link href='#'>바로가기</Card.Link>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestPost;
