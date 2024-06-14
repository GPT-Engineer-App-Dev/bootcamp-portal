import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Welcome to Our Coding Bootcamp
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Learn to code and transform your career in just a few months.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
      <Box mt={10}>
        <Image src="/images/bootcamp.jpg" alt="Coding Bootcamp" borderRadius="md" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Heading as="h2" size="lg" mb={4}>
          Why Choose Us?
        </Heading>
        <VStack spacing={4} maxW="600px">
          <Text fontSize="lg" color="gray.700">
            Our bootcamp offers a comprehensive curriculum, experienced instructors, and a supportive community to help you succeed.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Whether you're a beginner or looking to advance your skills, we have the right program for you.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;