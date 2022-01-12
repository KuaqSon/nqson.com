import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import PageLayout from '../components/PageLayout';
const PageTransition = dynamic(() => import('../components/PageTransition'));
const Greeting = dynamic(() => import('../components/Greeting'));

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
