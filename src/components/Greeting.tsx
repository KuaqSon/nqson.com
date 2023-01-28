import { Box, useColorModeValue, Text } from '@chakra-ui/react';

export default function Greeting() {
  return (
    <Box pt={20}>
      <Text
        fontSize="4xl"
        fontWeight="extrabold"
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        Hello, I'm Son Nguyen 👋
      </Text>
      <Text fontSize="xl" color={useColorModeValue('gray.700', 'gray.200')}>
        I am a software engineer with experience in business product
        development. Let me accompany you with all your product intentions.
      </Text>
    </Box>
  );
}
