import { Form, Input, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type InputType = {
  label: string;
  source: string;
  [x: string]: any;
};

const OnlyTextInput = (props: InputType) => {
  return (
    <>
      <Text strong>{props.label}</Text>
      <Form.Item {...props} name={props.source} label={false}>
        <Input {...props} />
      </Form.Item>
    </>
  );
};

export default OnlyTextInput;
