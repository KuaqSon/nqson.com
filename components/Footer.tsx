import {
  Box,
  Container,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { ReactElement } from 'react';

const SocialButton = ({
  icon,
  label,
  href,
}: {
  icon: ReactElement;
  label: string;
  href: string;
}) => {
  return (
    <IconButton
      aria-label={label}
      bg="transparent"
      rounded={'full'}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      icon={icon}
      target="_blank"
    />
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={4}
    >
      <Container
        maxW="container.md"
        as={Stack}
        py={4}
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text color={useColorModeValue('gray.700', 'gray.200')}>
          © 2022 Son Nguyen
        </Text>
        <Stack direction={'row'} spacing={2}>
          <SocialButton
            label={'Github'}
            href={'https://github.com/KuaqSon'}
            icon={<FaGithub />}
          />
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/simon-nguyen-043584129/'}
            icon={<FaLinkedinIn />}
          />
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/quangson.nguyen.399/'}
            icon={<FaFacebook />}
          />
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/qson.ng/'}
            icon={<FaInstagram />}
          />
        </Stack>
      </Container>
    </Box>
  );
}
