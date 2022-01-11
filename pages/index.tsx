import type { NextPage } from 'next';
import PageLayout from '../components/PageLayout';
import PageTransition from '../components/PageTransition';
import Greeting from '../components/Greeting';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <PageTransition>
        <Greeting />
      </PageTransition>
    </PageLayout>
  );
};

export default Home;
