import React from 'react';
import { Button, Form, Space } from 'antd';
import { useRouter } from 'next/router';
import useCreate from '../../hooks/useCreate';

export type FormTypes = {
  children: JSX.Element[] | JSX.Element;
  resource: string;
};

const CreateForm: React.FC<FormTypes> = (props: FormTypes) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { data, callCreate } = useCreate({ resource: props.resource });

  const onFinish = (values: any) => {
    const updatedData = form.getFieldsValue();
    callCreate(updatedData);
    router.replace('/' + props.resource);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      layout="horizontal"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {props.children}
      <Space size={5} direction="vertical">
        <Form.Item wrapperCol={{ span: 24 }}>
          <Space direction="horizontal">
            <Button type="primary" htmlType="submit">
              Spremi
            </Button>
            <Button
              type="default"
              htmlType="submit"
              onClick={() => router.back()}
            >
              Odustani
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default CreateForm;
