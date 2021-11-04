import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from './../../constants/routes';

import './style.scss'

const NavBar = () => {

    return ( 
        <nav>
            <div className="profile-container">
                <img className="avatar" src="https://sync-advert.s3.ap-south-1.amazonaws.com/avatar.png" alt="user-avatar" />
                <p>Hello! <span>User</span></p>
            </div>

            <ul>
                {routes.map((item, key) => 
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