import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

// Containers
import TodoList from 'containers/TodoList';

// Pages
import Settings from 'pages/Settings';

// Styles
import styles from './styles.module.scss';

const { Content, Sider, Header } = Layout;

function App() {
  const [ collapseNav, setCollapseNav ] = useState(false);

  return (
    <Layout className={styles['App']}>
      <BrowserRouter>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapseNav}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Todo list</span>
            </Menu.Item>
            
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff' }}>
            <Icon
              className="trigger"
              type={collapseNav ? 'menu-unfold' : 'menu-fold'}
              onClick={() => setCollapseNav(!collapseNav)}
            />
          </Header>
          
          <Content className={styles['content']}>
            <Route exact path="/todo-list" component={TodoList} />
            <Route exact path="/settings" component={Settings} />
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
