import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './index.css';

// import Apple from '../Items/food/apple/apple';
// import Banana from '../Items/food/banana/banana';

// const items = [{Apple , Banana }];

export default function Inventory() {
    return (
        <div className='container'>
        <div className='inventory'>
        <Menu menuButton={<MenuButton>Inventory</MenuButton>}>
            <SubMenu label="Items">
                <SubMenu label="Apple">
                    <MenuItem>A naturally sweet fruit that, for some reason, 
                    is smiling right back at you.</MenuItem>
                    <MenuItem>+10 hp</MenuItem>
                    <MenuItem>10% chance of poison effect</MenuItem>
                </SubMenu>
                <SubMenu label="Banan">
                    <MenuItem>You have a slight suspicion that the banana is 
                    mutated - I mean, how else would it have a face?</MenuItem>
                    <MenuItem>+25 hp</MenuItem>
                    <MenuItem>+5 def</MenuItem>
                </SubMenu>
            </SubMenu>
            <SubMenu label="Weapons">
                <SubMenu label="Iron Dagger">
                    <MenuItem>Basic, but dependable - truly a classic.</MenuItem>
                    <MenuItem>15 dps</MenuItem>
                    <MenuItem>20 spd</MenuItem>
                    <MenuItem>5% chance of critical hit</MenuItem>
                </SubMenu>
                <SubMenu label="Dragonsbane">
                    <MenuItem>A legendary weapon last used by the Dragonborn, and decreases
                    reaction time to all who wield it</MenuItem>
                    <MenuItem>500 dps</MenuItem>
                    <MenuItem>+50 spd</MenuItem>
                    <MenuItem>10% chance to stun</MenuItem>
                </SubMenu>
                <SubMenu label="Nuclear Warhead">
                    <MenuItem>How...how did you find this?</MenuItem>
                    <MenuItem>1,000,000,000 dps</MenuItem>
                </SubMenu>
            </SubMenu>
        </Menu>
        </div>
        </div>
    );
}