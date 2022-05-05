import React from 'react';
import homeStore from '../../../resource/store/home';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCss3,
	faHtml5,
	faJs,
	faReact,
	faSass
} from '@fortawesome/free-brands-svg-icons';
import { ISkillStateObj } from '../../../resource/store/home';
import { Tstatus } from '../../../types';

function renderProgressBar(langauge: ISkillStateObj) {
	let status: Tstatus = 'success';
	const VALUE: number = langauge.value;
	if (VALUE < 35) status = 'danger';
	else if (VALUE < 70) status = 'warning';

	return (
		<ProgressBar
			animated
			role='progressbar'
			now={langauge.value}
			label={`${langauge.value}%`}
			variant={status}
		/>
	);
}

const Skills = () => {
	const { html, css, javascript, react, sass } = homeStore();

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
								<FontAwesomeIcon
									icon={faHtml5}
									size={'2x'}
									color={html.color}
								/>
							</div>
							<div className='div_skills-level'>{renderProgressBar(html)}</div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>
								<FontAwesomeIcon icon={faCss3} size={'2x'} color={css.color} />
							</div>
							<div className='div_skills-level'>{renderProgressBar(css)}</div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>
								<FontAwesomeIcon icon={faSass} size={'2x'} color={sass.color} />
							</div>
							<div className='div_skills-level'>{renderProgressBar(sass)}</div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>
								<FontAwesomeIcon
									icon={faJs}
									size={'2x'}
									color={javascript.color}
								/>
							</div>
							<div className='div_skills-level'>
								{renderProgressBar(javascript)}
							</div>
						</div>
						<div className='div_skills-item-block'>
							<div className='div_skills-icon'>
								<FontAwesomeIcon
									icon={faReact}
									size={'2x'}
									color={react.color}
								/>
							</div>
							<div className='div_skills-level'>{renderProgressBar(react)}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
