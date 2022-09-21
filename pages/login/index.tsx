import { Button, Form, Input, Col, Row, Typography, Space } from 'antd';
import React from 'react';
import Image from 'next/image';

const { Title, Text } = Typography;

const App: React.FC = () => (
  <div
    className="login_wrapper"
    style={{
      background:
        'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(24,142,247,0.23406866164434523) 70%, rgba(0,212,255,0) 100%)',
    }}
  >
    <Row style={{ height: '100vh' }} align="middle">
      <Col span={14}>
        <Col offset={4}>
          <Title>Prijavi se</Title>
          <Form
            name="basic"
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Text>Username</Text>
            <Form.Item
              name="Korisničko ime"
              rules={[{ required: true, message: 'Unesite korisničko ime!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Text>Password</Text>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Unesite lozinku!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
              <Checkbox>Zapamti me</Checkbox>
            </Form.Item> */}

            <Space size={5} direction="vertical">
              <Form.Item wrapperCol={{ span: 24 }}>
                <Space direction="horizontal">
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </Space>
              </Form.Item>
            </Space>
          </Form>
        </Col>
      </Col>
      <Col span={10}>
        {/* <Image src={Logo} alt="Alt text for the picture" /> */}
        <p style={{color: "black", fontWeight: "500", fontSize: "1.2rem"}}>Dream Admin</p>
      </Col>
    </Row>
  </div>
);

export default App;
