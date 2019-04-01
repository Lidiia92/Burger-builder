import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classses from './SideDrawer.css'


const SideDrawer = (props) => {
    return (
        <div className={classses.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default SideDrawer;