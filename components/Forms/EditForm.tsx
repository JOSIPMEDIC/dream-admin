import React, { useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import useGetOne from '../../hooks/useGetOne';
import { useRouter } from 'next/router';
import useUpdate from '../../hooks/useUpdate';

export type FormTypes = {
  children: JSX.Element[] | JSX.Element;
  resource: string;
};

const EditForm: React.FC<FormTypes> = (props: FormTypes) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { data, loading } = useGetOne({
    resource: props.resource,
  });
  const { data: response, callUpdate } = useUpdate({
    resource: props.resource,
  });

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);

  const onFinish = async (values: any) => {
    const updatedData = form.getFieldsValue();

    updatedData.id = router.query.id?.toString();
    await callUpdate(updatedData, updatedData.id );
    router.replace(`/${props.resource}/show/${router.query.id}`);
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
      initialValues={data}
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

export default EditForm;
