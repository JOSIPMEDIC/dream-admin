import { Col, Row, Typography } from 'antd';
import moment from 'moment';
import React, { useContext } from 'react';
import ShowContext from '../../state-management/ShowRecord';

const { Text } = Typography;

type Props = {
  source: any;
  label: string;
};

const OnlyDateField = (props: Props) => {
  const ShowRecord = useContext(ShowContext);
  return (
    <Col>
      <Row justify="start">
        <Text>{props.label}</Text>
      </Row>
      <Row justify="start">
        <Text strong>
          {moment(ShowRecord[props.source]).format('DD/MM/YYYY')}
        </Text>
      </Row>
    </Col>
  );
};

export default OnlyDateField;
