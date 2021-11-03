import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss'

const NavBar = () => {
    
    const menu = [
        {
            icon: <i className="fa fa-home icon"></i>,
            text: 'Home',
            to: '/'
        },
        {
            icon: <i className="fa fa-images icon"></i>,
            text: 'Gallery',
            to: '/gallery'
        },
        {
            icon: <i className="fa fa-user-friends icon"></i>,
            text: 'Friends',
            to: '/friends'
        },
        {
            icon: <i class="fas fa-user-circle"></i>,
            text: 'Profile',
            to: '/profile'
        }
    ]

    return ( 
        <nav>
            <div className="profile-container">
                <img class="avatar" src="https://sync-advert.s3.ap-south-1.amazonaws.com/avatar.png" alt="user-avatar" />
                <p>Hello! <span>User</span></p>
            </div>

            <ul>
                {menu.map((item, key) => 
                    <li key={key}>
                        <NavLink exact to={item.to}>
                            {item.icon}

                            <span className="icon-text">{item.text}</span>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}
 
export default NavBar;