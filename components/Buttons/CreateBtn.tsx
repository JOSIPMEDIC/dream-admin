import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  resource: string;
  label?: string;
};

const CreateBtn = ({ label = 'Create', resource }: Props) => {
  const router = useRouter();
  return (
    <Button
      type="primary"
      style={{ marginBottom: 16 }}
      onClick={() => router.replace(`/${resource}/create`)}
    >
      {label}
    </Button>
  );
};

export default CreateBtn;
