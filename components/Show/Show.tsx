import { Button, Row, Space } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import useGetOne from '../../hooks/useGetOne';
import LayoutWrapper from '../../Layout/Layout';
import ShowContext from '../../state-management/ShowRecord';
import DeleteBtn from '../Buttons/DeleteBtn';
import EditBtn from '../Buttons/EditBtn';

type Props = {
  children: JSX.Element[] | JSX.Element;
  resource: string;
  [x: string]: any;
};

const Show = (props: Props) => {
  const { data, loading } = useGetOne({
    resource: props.resource,
  });

  return (
    <LayoutWrapper
      title="Detalji"
      subtitle="Vijest"
      backIcon={true}
      selectedMenuKey="1"
    >
      <Row justify="end">
        <Space direction="horizontal">
          <EditBtn resource={props.resource} id={data?.id} />
          <DeleteBtn id={data?.id} resource={props.resource} />
        </Space>
      </Row>
      <ShowContext.Provider value={data}>
        <Space direction="vertical" size="large">
          {props.children}
        </Space>
      </ShowContext.Provider>
    </LayoutWrapper>
  );
};

export default Show;
