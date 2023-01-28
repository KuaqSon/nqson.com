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
        I am a software engineer. I like new and rule-breaking things, It may
        ask time - consuming, but never boring.
      </Text>
    </Box>
  );
}
