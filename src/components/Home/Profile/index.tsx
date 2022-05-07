import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGit,
	faGithub,
	faInstagram,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
	return (
		<div className='div_basic-info-wrapper'>
			<div className='div_profile-block'>
				<span className='span_profile-photo-box'>
					<img
						className='profile-image'
						src='images/profile/user.jpeg'
						width='200px'
						alt=''
					/>
				</span>
				<span className='span_profile-desc-box'>이진우</span>
			</div>
			<div className='div_sns-block flex-row'>
				<div className='div_sns-title flex-row'>SNS</div>
				<div className='div_sns-icon-box flex-row'>
					<span className='span_sns-icon-item'>
						<FontAwesomeIcon
							icon={faInstagram}
							className='sns-icon instagram'
							size={'2x'}
						/>
					</span>
					<span className='span_sns-icon-item'>
						<FontAwesomeIcon
							icon={faYoutube}
							className='sns-icon'
							color={'#ff0000'}
							size={'2x'}
						/>
					</span>
					<span className='span_sns-icon-item'>
						<FontAwesomeIcon
							icon={faGithub}
							className='sns-icon'
							size={'10x'}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Profile;
