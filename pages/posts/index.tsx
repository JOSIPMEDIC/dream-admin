import React from 'react';
import List from '../../components/List/List';
import { postColumns } from './ColumnDefs';

const App: React.FC = () => {
  return (
    <List
      resource={'posts'}
      columns={postColumns}
      rowKey="id"
      expandable={rowExpantion}
    />
  );
};

export default App;

const rowExpantion = {
  expandedRowRender: (record: any) => (
    <p style={{ margin: 0 }}>{record.body}</p>
  ),
  rowExpandable: (record: any) => (record.body ? true : false),
};
