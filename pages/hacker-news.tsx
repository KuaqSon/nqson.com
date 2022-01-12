import type { NextPage } from 'next';
import {
  Box,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import PageLayout from '../components/PageLayout';
import dynamic from 'next/dynamic';
const PageTransition = dynamic(() => import('../components/PageTransition'));
const HackerNews = dynamic(() => import('../components/HackerNews'));

const News: NextPage = () => {
  return (
    <PageLayout
      title="Son Nguyen - Hacker News"
      description="Links for the intellectually curious, ranked by readers."
    >
      <PageTransition>
        <Box pt={20} pb={10}>
          <Text
            fontSize="2xl"
            fontWeight="extrabold"
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            Hacker News
          </Text>
          <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.200')}>
            Links for the intellectually curious, ranked by readers.
          </Text>
          <ChakraLink
            href="https://news.ycombinator.com/"
            isExternal={true}
            fontSize="sm"
            color={useColorModeValue('gray.500', 'gray.500')}
          >
            news.ycombinator.com
          </ChakraLink>
        </Box>
        <HackerNews />
      </PageTransition>
    </PageLayout>
  );
};

export default News;
