import React from 'react';
import EditForm from '../../../components/Forms/EditForm';
import OnlyTextAreaInput from '../../../components/Inputs/OnlyTextAreaInput';
import OnlyTextInput from '../../../components/Inputs/OnlyTextInput';
import LayoutWrapper from '../../../Layout/Layout';

const App: React.FC = () => {
  return (
    <LayoutWrapper
      title="Posts"
      subtitle="Edit post"
      backIcon={true}
      selectedMenuKey="1"
    >
      <EditForm resource="posts">
        <OnlyTextInput source="userId" label="userId" />
        <OnlyTextInput source="title" label="Title" />
        <OnlyTextAreaInput source="body" label="Body" />
      </EditForm>
    </LayoutWrapper>
  );
};

export default App;
