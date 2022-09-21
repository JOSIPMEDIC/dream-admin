import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import LayoutWrapper from '../Layout/Layout';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper selectedMenuKey="0">
        <>
          U izradi
          <>{JSON.stringify(process.env.NEXT_API_URL)}</>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default Home;
