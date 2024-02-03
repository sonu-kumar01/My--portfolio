import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'


const SocialMedia = () => {
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/sonu01/", "_blank");
    };
    const handleInstaClick = () => {
        window.open("https://www.instagram.com/sonukumar__.07/", "_blank");
    };
    const handleGithubClick = () => {
        window.open("https://github.com/sonu-kumar01", "_blank");
    };

    return (
        <div className='app__social'>
            <div onClick={handleLinkedInClick}>
                <BsLinkedin />
            </div>
            <div onClick={handleGithubClick}>
                <FaGithub  />
            </div>
            <div onClick={handleInstaClick}>
                <SiLeetcode />
            </div>
        </div>
    )
}

export default SocialMedia