import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Main() {
    return (
        <Menu menuButton={<MenuButton>Menu</MenuButton>}>
            <MenuItem>New Save</MenuItem>
            <SubMenu label="Open">
                <MenuItem>Korath the Kind</MenuItem>
                <MenuItem>Wyzak the Wise</MenuItem>
                <MenuItem>Laurence the Loyal</MenuItem>
                <MenuItem>Bob</MenuItem>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu>
    );
}