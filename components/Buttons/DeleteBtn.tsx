import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import useDelete from '../../hooks/useDelete';

type Props = {
  resource: string;
  id: string;
  label?: string;
};

const DeleteBtn = ({ label = 'Delete', resource, id }: Props) => {
  const { deleteOne } = useDelete({ resource, id });
  const router = useRouter();

  const handleDelete = async () => {
    await deleteOne();
    //NOTIFY
    router.replace('/' + resource);
  };
  return (
    <Button
      type="primary"
      danger
      style={{ marginBottom: 16 }}
      onClick={handleDelete}
    >
      {label}
    </Button>
  );
};

export default DeleteBtn;
