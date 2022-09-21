import { Col, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import ShowContext from '../../state-management/ShowRecord';

const { Text } = Typography;

type Props = {
  source: string;
  label: string;
};

const OnlyTextField = (props: Props) => {
  const ShowRecord = useContext(ShowContext);

  return (
    <Col>
      <Row justify="start">
        <Text>{props.label}</Text>
      </Row>
      <Row justify="start">
        <Text strong>{ShowRecord[props.source]}</Text>
      </Row>
    </Col>
  );
};

export default OnlyTextField;
