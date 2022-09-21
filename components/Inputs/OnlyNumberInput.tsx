import { Form, Input, InputNumber, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type InputType = {
  label: string;
  source: string;
  [x: string]: any;
};

const OnlyNumberInput = (props: InputType) => {
  return (
    <>
      <Text strong>{props.label}</Text>
      <Form.Item {...props} name={props.source} label={false}>
        <InputNumber style={{ width: '100%', ...props.styles }} {...props} />
      </Form.Item>
    </>
  );
};

export default OnlyNumberInput;
