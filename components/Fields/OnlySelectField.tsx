import { Col, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import ShowContext from '../../state-management/ShowRecord';

const { Text } = Typography;

type Choices = {
  id: any;
  value: any;
};
type Props = {
  source: string;
  label: string;
  choices: Choices[];
};

const OnlySelectField = (props: Props) => {
  const ShowRecord = useContext(ShowContext);
  return (
    <Col>
      <Row justify="start">
        <Text>{props.label}</Text>
      </Row>
      <Row justify="start">
        <Text strong>
          {Object.values(props.choices)[ShowRecord[props.source]]?.value}
        </Text>
      </Row>
    </Col>
  );
};

export default OnlySelectField;
