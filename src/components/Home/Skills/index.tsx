import React from 'react';
import homeStore from '../../../resource/store/home';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
	const { html, css, javascript, react } = homeStore();

	return (
		<div className='div_skills-inner'>
			<div className='div_skills-wrapper'>
				<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
					<div className='col p-4 d-flex flex-column position-static'>
						<div className='div_skills-title-block'>
							<strong className='div-inline-block mb-2 text-primary'>
								My current Skill
							</strong>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>
								<strong>html</strong>
							</div>
							<div className='div_skills-level'>
								<ProgressBar now={html} label={`${html}%`} color="orange"/>
							</div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>css</div>
							<div className='div_skills-level'>
								<ProgressBar now={css} label={`${css}%`} color="blue"/></div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>JavaScript</div>
							<div className='div_skills-level'>
								<ProgressBar now={javascript} label={`${javascript}%`} color="yellow"/></div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>React</div>
							<div className='div_skills-level'>
								<ProgressBar now={react} label={`${react}%`} /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
