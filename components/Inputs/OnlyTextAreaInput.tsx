import { Form, Input, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const { TextArea } = Input;

type InputType = {
  label: string;
  source: string;
  [x: string]: any;
};

const OnlyTextAreaInput = (props: InputType) => {
  return (
    <>
      <Text strong>{props.label}</Text>
      <Form.Item {...props} name={props.source} label={false}>
        <TextArea bordered allowClear autoSize {...props} />
      </Form.Item>
    </>
  );
};

export default OnlyTextAreaInput;
