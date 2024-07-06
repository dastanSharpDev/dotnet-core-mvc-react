import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '../../components/common/NavigationMenu/NavigationMenu';

const { Header, Sider, Content } = Layout;

export const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={256} style={{ background: '#fff' }}>
          <NavigationMenu />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};