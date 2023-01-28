/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  HStack,
  Link,
  Skeleton,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { INews } from '../lib/types';
import TimeAgo from 'react-timeago';
import { getHostname } from '../lib/utils';

export default function HackerNews() {
  const { data: news, error } = useSWR<INews[]>(`/api/hacker-news`, fetcher);
  const isLoadingInitialData = !news && !error;

  if (isLoadingInitialData) {
    return (
      <VStack align="stretch">
        <Skeleton height="68px" />
        <Skeleton height="68px" />
        <Skeleton height="68px" />
        <Skeleton height="68px" />
        <Skeleton height="68px" />
      </VStack>
    );
  }

  return (
    <VStack align="stretch">
      {news?.map((n: INews) => (
        <Box
          p={3}
          bg={useColorModeValue('gray.100', 'gray.900')}
          key={nanoid()}
        >
          <Box fontSize="md">
            <Link href={n.link} target="_blank">
              <div dangerouslySetInnerHTML={{ __html: n.title }}></div>
            </Link>
          </Box>
          <HStack>
            <Box fontSize="xs">{getHostname(n.link)}</Box>
            <Box fontSize="xs" color="gray.500">
              <TimeAgo date={n.published} />
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}
