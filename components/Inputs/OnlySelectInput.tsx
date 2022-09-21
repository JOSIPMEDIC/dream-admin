import { Form, Select, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type InputType = {
  label: string;
  source: string;
  choices: any[];
  [x: string]: any;
};

const OnlySelectInput = (props: InputType) => {
  return (
    <>
      <Text strong>{props.label}</Text>
      <Form.Item
        {...props}
        label={false}
        name={props.source}
        getValueProps={(i) => ({ value: props.choices[i]?.value })}
      >
        <Select {...props} options={props.choices} />
      </Form.Item>
    </>
  );
};

export default OnlySelectInput;
