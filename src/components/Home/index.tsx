import React from 'react';
import Profile from './Profile';
import Skills from './Skills/index';
import Statistics from './Statistics';
import Certificate from './Certificate';
import Career from './Career';

const HomeContainer = () => {
	return (
		<>
			<div className='p-4 p-md-5 mb-4 text-white rounded bg-dark intro-card'>
				<section className='section_background'>
					<div className='col-md-6 px-0'>
						<h1 className='display-4 fst-italic'>게으른 완벽주의 ESFJ</h1>
						<p className='lead my-3'>개발 중</p>
						<p className='lead mb-0'></p>
					</div>
				</section>
			</div>
			<div className='row mb-2'>
				<section className='section-common section_basic-info'>
					<Profile />
				</section>
				<div className='margin-div-6rem'></div>
				<div className='col-md-6'>
					<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
						<section className='section-common my-current-skills'>
							<Skills />
						</section>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
						<section className='section-common statistics'>
							<Statistics />
						</section>
					</div>
				</div>
			</div>
			<div className='row mb-2'>
				<div className='col-md-6'>
					<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
						<section className='section-common latest--post'>
							<Certificate />
						</section>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
						<section className='section-common latest--post'>
							<Career />
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeContainer;