import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faInstagram,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';

type tLinkType = 'instagram' | 'github' | 'youtube';

const getLinkCode = (type: tLinkType) => {
	if (type === 'instagram') {
		return window.open('https://www.instagram.com/binary_wooo/');
	} else if (type === 'github') {
		return window.open('https://github.com/dlwlsdn201/');
	} else if (type === 'youtube') {
		return window.open(
			'https://www.youtube.com/channel/UCzL15XKy-yJfr8wb6-R994Q'
		);
	}
};

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
				{/* <div className='div_sns-title flex-row'>SNS</div> */}
				<div className='div_sns-icon-box flex-row'>
					<span className='span_sns-icon-item'>
						{/* <a href='https://www.instagram.com/binary_wooo/' target='_blank'> */}
						<FontAwesomeIcon
							icon={faInstagram}
							className='sns-icon instagram'
							size={'2x'}
							onClick={() => getLinkCode('instagram')}
						/>
						{/* </a> */}
					</span>
					<span className='span_sns-icon-item'>
						<FontAwesomeIcon
							icon={faYoutube}
							className='sns-icon'
							color={'#ff0000'}
							size={'2x'}
							onClick={() => getLinkCode('youtube')}
						/>
					</span>
					<span className='span_sns-icon-item'>
						<FontAwesomeIcon
							icon={faGithub}
							className='sns-icon'
							size={'10x'}
							onClick={() => getLinkCode('github')}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Profile;
