import React from 'react';
import OnlyTextField from '../../../components/Fields/OnlyTextField';
import Show from '../../../components/Show/Show';

const App: React.FC = () => {
  return (
    <Show resource={'posts'}>
      <OnlyTextField source={'userId'} label="userId" />
      <OnlyTextField source={'title'} label="title" />
      <OnlyTextField source={'body'} label="body" />
    </Show>
  );
};

export default App;
