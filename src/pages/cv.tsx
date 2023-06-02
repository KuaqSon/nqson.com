import type { NextPage } from 'next';
import {
  Stack,
  Box,
  Text,
  useColorModeValue,
  Link as ChakraLink,
  Flex,
  Avatar,
  UnorderedList,
  ListItem,
  Center,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import EmptyPageLayout from '../components/EmptyPageLayout';
const PageTransition = dynamic(() => import('../components/PageTransition'));

function SectionBlock({ title, children }: { title: string; children: any }) {
  return (
    <Box>
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={2}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
}

function TimelineBlock({ time, children }: { time: string; children: any }) {
  return (
    <Flex align="start">
      <Box mr={3} minW="100px">
        <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.200')}>
          {time}
        </Text>
      </Box>
      <Box>{children}</Box>
    </Flex>
  );
}

function TechStacks({ stacks }: { stacks: string[] }) {
  if (!stacks || stacks.length === 0) {
    return <></>;
  }
  return (
    <Text color={useColorModeValue('gray.700', 'gray.200')}>
      Tech stacks:{' '}
      <Text
        as="span"
        fontWeight="bold"
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        {stacks.join(', ')}
      </Text>
    </Text>
  );
}

const CV: NextPage = () => {
  return (
    <EmptyPageLayout
      title="Son Nguyen - Curriculum vitae"
      description="The course of my life"
    >
      <PageTransition>
        <Stack py={10} spacing={10}>
          <Flex align="center" mb={5}>
            <Box mr={5}>
              <Avatar
                name="Son Nguyen"
                size="xl"
                src="/static/nqson-blue-circle.png"
                cursor="pointer"
              />
            </Box>
            <Box>
              <Text
                fontSize="2xl"
                fontWeight="extrabold"
                fontFamily="-apple-system, sans-serif"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Nguyễn Quang Sơn
              </Text>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Software engineering
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Ho Chi Minh City, Vietnam
              </Text>
            </Box>
          </Flex>
          <SectionBlock title="About">
            <Text color={useColorModeValue('gray.700', 'gray.200')}>
              Hello! I am a Software Engineering professional seeking valuable
              practical experience and opportunities to expand my programming
              knowledge and skills. Sociable, friendly, and adept at working
              under pressure, with experience in business product development I
              embrace new challenges with enthusiasm.
            </Text>
          </SectionBlock>

          <SectionBlock title="Work Experience">
            <Stack spacing={6}>
              <TimelineBlock time="2018 - 2020">
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Software Engineer at Spiderbox Design
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Full-time - Ho Chi Minh, Vietnam
                </Text>
                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  Together with the Australian team, I am a part of the software
                  development team here. Having worked on both backend and
                  frontend, I am honored to have contributed to many great
                  projects.
                </Text>
                <UnorderedList mt={2}>
                  <ListItem>
                    Build an application that helps businesses receive orders
                    using Angular 6 and .Net Core
                  </ListItem>
                  <ListItem>
                    Take part in the development of a project for a document
                    management system. Database design and the publication of
                    complex reports constitute the core processes. The project
                    was built with the .NET framework
                  </ListItem>
                  <ListItem>
                    We built a Ruby on Rails application for managing teachers,
                    compiling teaching content, and managing school quality.
                  </ListItem>
                </UnorderedList>
              </TimelineBlock>
              <TimelineBlock time="2020 - Now">
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Software Engineer at KiteMetric
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Full-time - Ho Chi Minh, Vietnam
                </Text>
                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  As part of my role here, I develop applications, communicating
                  with clients, manage projects, and assist other members in
                  need. It has been my pleasure to work on many projects with
                  diverse technical stacks here.
                </Text>
                <UnorderedList mt={2}>
                  <ListItem>
                    Work closely with project manager and customer to develop a
                    job referral system with more than 10 million jobs
                    introduced. I am an active participant in a project where I
                    serve as a full-stack developer. In this endeavor, we
                    utilize Django, a robust web framework, for the backend, and
                    React for the frontend also ELK stacks for search system.
                  </ListItem>
                  <ListItem>
                    I teamed up with a group to develop an online education and
                    course selling system, leveraging the power of Node.js for
                    the backend and React for the frontend, ELK stacks for
                    search system.
                  </ListItem>
                  <ListItem>
                    I built an operator-focused employee resource management
                    software using NestJS and React. This solution optimizes
                    operational workflows, enhances productivity, and simplifies
                    resource management for operators.
                  </ListItem>
                </UnorderedList>
              </TimelineBlock>
            </Stack>
          </SectionBlock>

          <SectionBlock title="Projects">
            <Stack spacing={6}>
              <TimelineBlock time="2022">
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  News aggregator
                </Text>
                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  A cutting-edge news aggregator that curates and delivers the
                  latest news articles from a wide range of trusted sources.
                </Text>
                <TechStacks stacks={['Golang', 'Python', 'NestJS']} />
              </TimelineBlock>

              <TimelineBlock time="2022">
                <ChakraLink href="https://tips.nqson.com/" isExternal>
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    Tips-depot
                  </Text>
                </ChakraLink>

                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  A static blogs site that aggregates good tips and some code
                  snippets
                </Text>
                <TechStacks stacks={['NextJS']} />
              </TimelineBlock>

              <TimelineBlock time="2022">
                <ChakraLink href="htthttps://cafe.nqson.com/" isExternal>
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    Simon.cafe
                  </Text>
                </ChakraLink>

                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  Suggest you some new space or coffee shop for every weekend in
                  Vietnam
                </Text>
                <TechStacks stacks={['NextJS', 'Django', 'Python']} />
              </TimelineBlock>

              <TimelineBlock time="2023">
                <ChakraLink
                  href="https://github.com/KuaqSon/flash-commit"
                  isExternal
                >
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    Flash-commit
                  </Text>
                </ChakraLink>

                <Text color={useColorModeValue('gray.700', 'gray.200')}>
                  Automatically generate commit messages using ChatGPT
                </Text>
                <TechStacks stacks={['Python']} />
              </TimelineBlock>
            </Stack>
          </SectionBlock>

          <SectionBlock title="Speaking">
            <TimelineBlock time="2022">
              <ChakraLink
                href="https://github.com/KuaqSon/design-web-crawler-presenter"
                isExternal
              >
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Design A Web Crawler
                </Text>
              </ChakraLink>

              <Text color={useColorModeValue('gray.700', 'gray.200')}>
                System design interview – an insider's guide chapter 9: Design A
                Web Crawler
              </Text>
            </TimelineBlock>
          </SectionBlock>
          <SectionBlock title="Education">
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              Bachelor of science in software engineering at Ho Chi Minh City
              University of Science
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              Ho Chi Minh City, Vietnam
            </Text>
          </SectionBlock>
          <SectionBlock title="Contact">
            <Text color={useColorModeValue('gray.700', 'gray.200')}>
              <Text
                as="span"
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Phone:{' '}
              </Text>
              <ChakraLink href="tel:+84378806905">+84378806905</ChakraLink>
            </Text>
            <Text color={useColorModeValue('gray.700', 'gray.200')}>
              <Text
                as="span"
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Email:{' '}
              </Text>
              <ChakraLink href="mailto:qson.ng@gmail.com">
                qson.ng@gmail.com
              </ChakraLink>
            </Text>
            <Text color={useColorModeValue('gray.700', 'gray.200')}>
              <Text
                as="span"
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Github:{' '}
              </Text>
              <ChakraLink href="https://github.com/KuaqSon" isExternal>
                github.com/KuaqSon
              </ChakraLink>
            </Text>
          </SectionBlock>
        </Stack>
        <Center py={4}>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
            Updated June 2023
          </Text>
        </Center>
      </PageTransition>
    </EmptyPageLayout>
  );
};

export default CV;
