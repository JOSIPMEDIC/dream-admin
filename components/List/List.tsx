import { Button, Pagination, Row, Table } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useGetList from '../../hooks/useGetList';
import LayoutWrapper from '../../Layout/Layout';
import CreateBtn from '../Buttons/CreateBtn';

type Props = {
  resource: string;
  [x: string]: any;
};

const pageObject = {
  page: 1,
  pageSize: 5,
  type: [0, 1, 2, 3, 4],
};

const List = (props: Props): JSX.Element => {
  const [pageData, setPageData] = useState(pageObject);
  const router = useRouter();
  const { data } = useGetList({ resource: props.resource, pageData: pageData });

  return (
    <LayoutWrapper title={props.resource} selectedMenuKey="1">
      <Row justify="end">
        <CreateBtn resource={props.resource} />
      </Row>
      <Table
        columns={props.columns}
        dataSource={data}
        onRow={(record: any, rowIndex: any) => {
          return {
            onClick: () => {
              router.push(router.asPath + '/show/' + record.id);
            },
          };
        }}
        {...props}
      />
    </LayoutWrapper>
  );
};

export default List;




{/* <Pagination
  style={{ marginTop: 20, display: 'flex', justifyContent: 'end' }}
  onChange={(page, pageSize) =>
    setPageData((prevState) => ({
      ...prevState,
      page,
      pageSize,
    }))
  }
  defaultCurrent={pageData.page}
  total={20}
  defaultPageSize={5}
/> */}