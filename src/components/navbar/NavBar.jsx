import React from 'react'
import { Menu, Layout, Breadcrumb } from 'antd'
import './navbar.css'
import Logo from '../../images/logo.png'
const { Header } = Layout;

const NavBar = () => {
    return (
        <Header className="header" >
            <img src={Logo} alt="logo" />
            <Menu mode="horizontal" theme="dark" className="menu">
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavBar
