import { PageHeader, Row } from 'antd';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { createElement } from 'react';
import MenuItemsLinks from './MenuItems';

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  subtitle?: string;
  backRoute?: string;
  backIcon?: boolean;
  selectedMenuKey: string;
};

const LayoutWrapper: React.FC<Props> = (props: Props) => {
  const router = useRouter();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" style={{ height: '68px' }}>
          <Row
            justify="start"
            align="middle"
            style={{ height: '100%', padding: '16px' }}
          >
            {/* <Image src={Logo} width={'100%'} height={'35%'} alt="Logo" /> */}
            <p style={{color: "white", fontWeight: "500", fontSize: "1.2rem"}}>Dream Admin</p>
          </Row>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[props.selectedMenuKey]}
        >
          {MenuItemsLinks?.map((item, i) => {
            return (
              <Menu.Item key={i} onClick={() => router.push(item.route)}>
                {createElement(item.icon)}
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{ height: '70px', padding: 0 }}
        >
          {props.backIcon ? (
            <PageHeader
              style={{ color: '!important #fff' }}
              className="site-page-header"
              onBack={() => router.back()}
              title={props.title}
              subTitle={props.subtitle}
            />
          ) : (
            <PageHeader
              style={{ color: '!important #fff' }}
              className="site-page-header"
              title={props.title}
              subTitle={props.subtitle}
            />
          )}
        </Header>
        <Content
          style={{
            margin: '24px 26px 0',
            overflow: 'initial',
            background: '#fff',
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, height: '88vh' }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
