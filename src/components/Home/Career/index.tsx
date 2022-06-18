import React, { useMemo, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import update from 'immutability-helper';

const Career = () => {
	const [modal, setModal] = useState({
		educationModal: false,
		careerModal: false,
		target: undefined
	});

	const ModalContentJSX = useMemo(() => {
		let JSX;
		const { educationModal, careerModal } = modal;
		if (educationModal) {
			JSX = (
				<>
					<Modal.Header closeButton>학력 사항</Modal.Header>
					<Modal.Body>
						<Container fluid='auto'>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									학교명
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>호계고등학교</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									기간
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>2010.03~2013.02</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									상태
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>졸업</Col>
							</Row>
						</Container>
						<div className='divide-line' />
						<Container fluid='auto'>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									학교명
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>국립 경상대학교</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									기간
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>2013.03~2021.02</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									학과
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>
									정보통신공학과(4년제)
								</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									상태
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>4년제 학사 졸업</Col>
							</Row>
						</Container>
					</Modal.Body>
				</>
			);
		} else if (careerModal) {
			JSX = (
				<>
					<Modal.Header closeButton>경력 사항</Modal.Header>
					<Modal.Body>
						<Container fluid='auto'>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									회사명
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>NX Technology</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									기간
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>2021.05~</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									상태
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>재직 중</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									부서
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>R&D</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									직위(직책)
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>연구원(팀원)</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									직무
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>프론트엔드 개발</Col>
							</Row>
							<Row>
								<Col id='label' style={{ fontWeight: 700 }}>
									주요 업무
								</Col>
								<Col style={{ wordBreak: 'keep-all' }}>
									<Row> - 빌딩에너지절감 솔루션 웹 서비스 유지보수</Row>
									<Row> - 빌딩에너지절감 솔루션 웹 서비스 신규 기능 설계</Row>
									<Row> - 빌딩에너지절감 솔루션 웹 서비스 신규 기능 개발</Row>
									<Row> - 솔루션하드웨어 장치 연동 및 작동 테스트</Row>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
				</>
			);
		}
		return JSX;
	}, [modal]);

	const DetailButtonJSX = (type: 'Education' | 'career') => {
		if (type === 'Education') {
			return (
				<Button
					variant='outline-white'
					type='button'
					autoFocus={false}
					onClick={() => updateModal('educationModal')}>
					학력 상세보기
				</Button>
			);
		} else if (type === 'career') {
			return (
				<Button
					variant='outline-white'
					autoFocus={false}
					type='button'
					onClick={() => updateModal('careerModal')}>
					경력 상세보기
				</Button>
			);
		}
	};

	const updateModal = (
		target: 'educationModal' | 'careerModal',
		resetTarget = false
	) => {
		setModal(
			update(modal, {
				[target]: { $set: !modal[target] },
				target: { $set: resetTarget ? undefined : target }
			})
		);
	};

	const { educationModal, careerModal, target } = modal;

	return (
		<div>
			<div className='inner-container'>
				<div className='div_career-wrapper'>
					<div
						className='col p-4 d-flex flex-column position-static'
						style={{ height: 300 }}>
						<div className='title-block'>
							<strong className='div-inline-block mb-2 text-primary'>
								Career
							</strong>
						</div>
						<div className='contents-block-wrapper flex-col justify-center'>
							<div className='contents-block flex-row '>
								{DetailButtonJSX('Education')}
							</div>
							<div className='contents-block flex-row '>
								{DetailButtonJSX('career')}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				animation={false}
				centered
				onHide={() => updateModal(target, true)}
				show={educationModal || careerModal}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'>
				{ModalContentJSX}
			</Modal>
		</div>
	);
};

export default Career;
