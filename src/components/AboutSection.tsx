import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";

export const AboutSection: React.FC = () => {
  return (
    <Box
      py={{ base: "16", md: "24" }}
      id="about"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        {/* TOP SECTION */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          {/* IMAGE SIDE */}
          <Box
            position="relative"
            data-aos="fade-right"
            w="full"
            maxW={{ base: "100%", lg: "520px" }}
          >
            <Box
              position="absolute"
              inset="-12px"
              bgGradient="linear(to-r, blue.500, pink.500)"
              filter="blur(60px)"
              opacity={0.18}
              zIndex={0}
            />

            <Box
              position="relative"
              overflow="hidden"
              borderRadius="32px"
              bg="#050505"
              border="1px solid"
              borderColor="whiteAlpha.100"
              boxShadow="0 20px 80px rgba(0,0,0,0.45)"
            >
              <Box
                position="absolute"
                top="0"
                left="-20%"
                w="70%"
                h="100%"
                bg="rgba(0, 140, 255, 0.35)"
                filter="blur(80px)"
                zIndex={1}
              />

              <Box
                position="absolute"
                top="0"
                right="-20%"
                w="70%"
                h="100%"
                bg="rgba(255, 0, 120, 0.28)"
                filter="blur(80px)"
                zIndex={1}
              />

              <Image
                src="/my-profile-image.webp"
                alt="Profile"
                w="100%"
                h={{ base: "500px", md: "650px" }}
                objectFit="cover"
                position="relative"
                zIndex={2}
                transition="0.4s ease"
                _hover={{
                  transform: "scale(1.03)",
                }}
              />

              <Box
                position="absolute"
                inset="0"
                bg="rgba(0,0,0,0.28)"
                zIndex={3}
              />
            </Box>
          </Box>

          {/* CONTENT SIDE */}
          <Stack spacing="8" data-aos="fade-left" maxW="620px">
            <Heading
              color="white"
              fontWeight="700"
              fontSize={{ base: "42px", md: "58px" }}
              lineHeight="1"
              letterSpacing="-2px"
            >
              About Me
            </Heading>

               <Stack spacing="6">
              <Text
                color="gray.300"
                fontSize={{ base: "md", md: "xl" }}
                lineHeight="1.9"
              >
            Hi, I'm Kaywise, a Shopify Growth Specialist dedicated to helping
               e-commerce brands build, optimize, and scale profitable 
               Shopify stores. My focus is not just on creating attractive websites, but on increasing traffic, improving conversions, 
              and generating consistent sales through proven marketing strategies.
              </Text>

              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
              >
                Whether you're launching a new store or looking
                 to grow an existing one, I provide customized 
                 solutions that help businesses achieve measurable results.
              </Text>
              
            </Stack>

            <Flex pt="2">
              <Box
                as="a"
                href="/resume.pdf"
                download
                px="9"
                py="4"
                borderRadius="full"
                color="white"
                fontWeight="700"
                fontSize="lg"
                transition="0.35s ease"
                bgGradient="linear(to-r, #2F80ED, #EB5757)"
                boxShadow="0 10px 35px rgba(80,120,255,0.35)"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 45px rgba(80,120,255,0.45)",
                }}
              >
                Download Resume ↓
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
