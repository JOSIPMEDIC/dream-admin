import { Button, DatePicker, Form, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const { Text } = Typography;

type InputType = {
  label: string;
  source: string;
  [x: string]: any;
};

const OnlyDateInput = (props: InputType) => {
  const form = Form.useFormInstance();

  return (
    <>
      <Text strong>{props.label}</Text>
      <Form.Item
        getValueProps={(i) => ({ value: moment(i) })}
        {...props}
        label={false}
        name={props.source}
      >
        <DatePicker
          format={'DD. MM. YYYY.'}
          style={{ width: '100%' }}
          value={moment()}
          onChange={(date: any) =>
            form.setFieldValue(props.source, moment(date).toDate().getTime())
          }
        />
      </Form.Item>
    </>
  );
};

export default OnlyDateInput;
