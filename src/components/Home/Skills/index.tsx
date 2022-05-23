import React from 'react';
import homeStore from '../../../resource/store/home';
import { Button, ProgressBar } from 'react-bootstrap';
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
import { faMinus, faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';

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
	const { html, css, javascript, react, sass, setting } = homeStore();

	const btnElements = document.querySelectorAll('.div_skills-control-block');
	if (setting === true) {
		btnElements.forEach((btn) => {
			btn.classList.add('setting-active');
		});
	} else {
		btnElements.forEach((btn) => {
			btn.classList.remove('setting-active');
		});
	}
	return (
		<div className='inner-container'>
			<div className='skills-wrapper'>
				<div className='col p-4 d-flex flex-column position-static'>
					<div className='div_skills-title-block'>
						<strong className='div-inline-block mb-2 text-primary'>
							My current Skill
						</strong>
						<FontAwesomeIcon
							icon={faSliders}
							className='setting-btn'
							role={'button'}
							onClick={homeStore((state) => state.isSetting)}
						/>
					</div>
					<div className='div_skills-item-block'>
						<div className='div_skills-icon'>
							<FontAwesomeIcon icon={faHtml5} size={'2x'} color={html.color} />
						</div>
						<div className='div_skills-level'>{renderProgressBar(html)}</div>
						<div className='div_skills-control-block flex-row'>
							<Button
								variant='primary'
								onClick={homeStore((state) => state.decreaseHTML)}
								disabled={html.value === 0}>
								<FontAwesomeIcon
									icon={faMinus}
									className='skills-control-btn'
								/>
							</Button>{' '}
							<Button
								variant='primary'
								onClick={homeStore((state) => state.increaseHTML)}
								disabled={html.value === 100}>
								<FontAwesomeIcon icon={faPlus} className='skills-control-btn' />
							</Button>{' '}
						</div>
					</div>
					<div className='div_skills-item-block'>
						<div className='div_skills-icon'>
							<FontAwesomeIcon icon={faCss3} size={'2x'} color={css.color} />
						</div>
						<div className='div_skills-level'>{renderProgressBar(css)}</div>
						<div className='div_skills-control-block flex-row'>
							<Button
								variant='primary'
								onClick={homeStore((state) => state.decreaseCSS)}
								disabled={css.value === 0}>
								<FontAwesomeIcon
									icon={faMinus}
									className='skills-control-btn'
								/>
							</Button>{' '}
							<Button
								variant='primary'
								onClick={homeStore((state) => state.increaseCSS)}
								disabled={css.value === 100}>
								<FontAwesomeIcon icon={faPlus} className='skills-control-btn' />
							</Button>{' '}
						</div>
					</div>
					<div className='div_skills-item-block'>
						<div className='div_skills-icon'>
							<FontAwesomeIcon icon={faSass} size={'2x'} color={sass.color} />
						</div>
						<div className='div_skills-level'>{renderProgressBar(sass)}</div>
						<div className='div_skills-control-block flex-row'>
							<Button
								variant='primary'
								onClick={homeStore((state) => state.decreaseSASS)}
								disabled={sass.value === 0}>
								<FontAwesomeIcon
									icon={faMinus}
									className='skills-control-btn'
								/>
							</Button>{' '}
							<Button
								variant='primary'
								onClick={homeStore((state) => state.increaseSASS)}
								disabled={sass.value === 100}>
								<FontAwesomeIcon icon={faPlus} className='skills-control-btn' />
							</Button>{' '}
						</div>
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
						<div className='div_skills-control-block flex-row'>
							<Button
								variant='primary'
								onClick={homeStore((state) => state.decreaseJS)}
								disabled={javascript.value === 0}>
								<FontAwesomeIcon
									icon={faMinus}
									className='skills-control-btn'
								/>
							</Button>{' '}
							<Button
								variant='primary'
								onClick={homeStore((state) => state.increaseJS)}
								disabled={javascript.value === 100}>
								<FontAwesomeIcon icon={faPlus} className='skills-control-btn' />
							</Button>{' '}
						</div>
					</div>
					<div className='div_skills-item-block'>
						<div className='div_skills-icon'>
							<FontAwesomeIcon icon={faReact} size={'2x'} color={react.color} />
						</div>
						<div className='div_skills-level'>{renderProgressBar(react)}</div>
						<div className='div_skills-control-block flex-row'>
							<Button
								variant='primary'
								onClick={homeStore((state) => state.decreaseREACT)}
								disabled={react.value === 0}>
								<FontAwesomeIcon
									icon={faMinus}
									className='skills-control-btn'
								/>
							</Button>{' '}
							<Button
								variant='primary'
								onClick={homeStore((state) => state.increaseREACT)}
								disabled={react.value === 100}>
								<FontAwesomeIcon icon={faPlus} className='skills-control-btn' />
							</Button>{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
