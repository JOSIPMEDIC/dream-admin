import { ColumnsType } from 'antd/es/table';
import { DataType } from '../../Types/NewsTypes';

export const postColumns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
];
