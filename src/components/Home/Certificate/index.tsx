import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo } from 'react';
import { Button, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CertificateData } from '../../../resource/SampleData';
import { homeStore } from '../../../resource/store';
const Certificate = () => {
	const { certificateList, updateCertificateList } = homeStore();

	const renderTableJSX = useMemo(
		() => (
			<Table striped bordered hover responsive variant='black'>
				<thead>
					<tr>
						<th>No.</th>
						<th>자격증</th>
						<th>취득일자</th>
					</tr>
					{certificateList.map((item, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{item?.name}</td>
							<td>{item.takeDate}</td>
						</tr>
					))}
				</thead>
			</Table>
		),
		[certificateList]
	);

	useEffect(() => {
		updateCertificateList(CertificateData);
	}, []);

	return (
		<div>
			<div className='inner-container'>
				<div className='div_certificate-wrapper'>
					<div
						className='col p-4 d-flex flex-column position-static'
						style={{ height: 300 }}>
						<div className='title-block'>
							<strong className='div-inline-block mb-2 text-primary'>
								Certificate
							</strong>
						</div>
						<div className='contents-block-wrapper justify-center'>
							<div className='contents-block'>{renderTableJSX}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certificate;
