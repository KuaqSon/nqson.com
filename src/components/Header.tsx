import {
  Box,
  Avatar,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdMenuOpen } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ILink {
  title: string;
  href: string;
  external: boolean;
}

const Links = [
  {
    title: 'CV',
    href: '/cv',
    external: false,
  },
  {
    title: 'Hacker News',
    href: '/hacker-news',
    external: false,
  },
];

const NavLink = ({ link, isActive }: { link: ILink; isActive: boolean }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.600');
  const bgColorHover = useColorModeValue('gray.200', 'gray.700');

  const InnerLink = (
    <Box
      px={2}
      py={1}
      rounded={'md'}
      bg={isActive ? bgColor : 'transparent'}
      _hover={{
        textDecoration: 'none',
        bg: bgColorHover,
      }}
      cursor="pointer"
    >
      {link.title}
    </Box>
  );

  return link.external ? (
    <ChakraLink
      href={link.href}
      isExternal={true}
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
      }}
    >
      {InnerLink}
    </ChakraLink>
  ) : (
    <Link href={link.href} passHref={true}>
      {InnerLink}
    </Link>
  );
};

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        mb={4}
      >
        <Container
          maxW="container.md"
          as={Stack}
          py={4}
          spacing={4}
          direction="row"
          justify="space-between"
          align="center"
        >
          <Box>
            <Link href="/" passHref={true}>
              <Avatar
                name="Son Nguyen"
                size="sm"
                src="/static/nqson-avatar.png"
                cursor="pointer"
              />
            </Link>
          </Box>
          <HStack
            spacing={4}
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  link={link}
                  isActive={router.asPath === link.href}
                />
              ))}
            </HStack>
            <Box>
              <IconButton
                onClick={toggleColorMode}
                bg="transparent"
                aria-label="toggle color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                rounded={'full'}
              />
            </Box>
          </HStack>
          <Box display={{ base: 'block', md: 'none' }}>
            <IconButton
              onClick={onOpen}
              bg="transparent"
              aria-label="toggle color mode"
              icon={<MdMenuOpen style={{ fontSize: '32px' }} />}
              rounded={'full'}
            />
          </Box>
        </Container>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize="20px" _focus={{ outline: 'none' }} />
          <DrawerBody>
            <VStack align="stretch" pt={20}>
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  link={link}
                  isActive={router.asPath === link.href}
                />
              ))}
              <Box>
                <IconButton
                  onClick={toggleColorMode}
                  bg="transparent"
                  aria-label="toggle color mode"
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  rounded={'full'}
                />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
