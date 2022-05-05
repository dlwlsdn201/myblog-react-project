import React from 'react';
import Profile from './Profile';
import Skills from './Skills/index';

const HomeContainer = () => {
	return (
		<>
			<div className='p-4 p-md-5 mb-4 text-white rounded bg-dark intro-card'>
				<section className='section_background'>
					<div className='col-md-6 px-0'>
						<h1 className='display-4 fst-italic'>게으른 완벽주의 INFJ</h1>
						<p className='lead my-3'>개발 중</p>
						<p className='lead mb-0'>
							<a href='#' className='text-white fw-bold'>
								반갑습니다
							</a>
						</p>
					</div>
				</section>
			</div>
			<div className='row mb-2'>
				<section className='section-common section_basic-info'>
					<Profile />
				</section>
				<div className='margin-div-6rem'></div>
				<div className='col-md-6'>
					<section className='section-common my-current-skills'>
						<Skills />
					</section>
				</div>
				<div className='col-md-6'>{/* 게시글 통계 */}</div>
			</div>
		</>
	);
};

export default HomeContainer;