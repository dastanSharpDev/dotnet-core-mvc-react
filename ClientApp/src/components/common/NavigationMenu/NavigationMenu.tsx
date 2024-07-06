import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const NavigationMenu: React.FC = () => {
  return (
    <Menu mode="inline" style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<HomeOutlined />} title="Menu">
        <Menu.Item key="1">
          <Link to="/institutions">Institutions</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/teachers">Teachers</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/guardians">Guardians</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/students">Students</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/finances">Finances</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/results">Game Results</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/account">Account</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default NavigationMenu;
