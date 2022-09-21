import CreateForm from '../../../components/Forms/CreateForm';
import OnlyTextAreaInput from '../../../components/Inputs/OnlyTextAreaInput';
import OnlyTextInput from '../../../components/Inputs/OnlyTextInput';
import LayoutWrapper from '../../../Layout/Layout';

const App: React.FC = () => {
  return (
    <LayoutWrapper
      title="Posts"
      subtitle="Create post"
      backIcon={true}
      selectedMenuKey="1"
    >
      <CreateForm resource="posts">
        <OnlyTextInput source="userId" label="userId" />
        <OnlyTextInput source="title" label="Title" />
        <OnlyTextAreaInput source="body" label="Body" />
      </CreateForm>
    </LayoutWrapper>
  );
};

export default App;
