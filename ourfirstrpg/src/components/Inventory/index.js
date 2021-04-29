import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './index.css';

import Apple from '../Items/food/apple/apple';
import Banana from '../Items/food/banana/banana';

const items = [{Apple , Banana }];

const Inventory = ( items ) => {
    return (
        <div className='container'>
            <div className='menu'>
            <Menu menuButton={<MenuButton>Inventory</MenuButton>}>
                    <SubMenu label="Items">
                        <SubMenu label="Apple">
                            <MenuItem>A naturally sweet fruit, may be poisonous depending on source.</MenuItem>
                            <MenuItem>+10 hp</MenuItem>
                            <MenuItem>10% chance of poison effect</MenuItem>
                        </SubMenu>
                        <SubMenu label="Bannana">
                            <MenuItem>A delicious fruit that has been heavily modified by man</MenuItem>
                            <MenuItem>+25 hp</MenuItem>
                            <MenuItem>+5 def</MenuItem>
                        </SubMenu>
                        <SubMenu label="Steak">
                            <MenuItem>A hearty chunk of meat for when your hunger cannot be satied
                    except with the flesh of another</MenuItem>
                            <MenuItem>+100 hp</MenuItem>
                            <MenuItem>+25 def</MenuItem>
                            <MenuItem>-15 spd</MenuItem>
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
};

export default Inventory();