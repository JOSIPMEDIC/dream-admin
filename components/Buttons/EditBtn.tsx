import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  id: string;
  resource: string;
  label?: string;
};

const EditBtn = ({ label = 'Edit', resource, id }: Props) => {
  const router = useRouter();
  return (
    <Button
      type="primary"
      style={{ marginBottom: 16 }}
      onClick={() => router.replace(`/${resource}/edit/${id}`)}
    >
      {label}
    </Button>
  );
};

export default EditBtn;
