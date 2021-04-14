import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Inventory() {
    return (
        <Menu menuButton={<MenuButton>Inventory</MenuButton>}>
            <MenuItem>Items</MenuItem>
            <SubMenu label="Open">
                <MenuItem>Apple</MenuItem>
                <MenuItem>Bannana</MenuItem>
                <MenuItem>Steak</MenuItem>
            </SubMenu>
            <MenuItem>Weapons</MenuItem>
            <SubMenu label="Open">
                <MenuItem>Dagger</MenuItem>
                <MenuItem>Claymore</MenuItem>
                <MenuItem>M16</MenuItem>
            </SubMenu>
        </Menu>
    );
}