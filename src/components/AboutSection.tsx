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
                I'm a Full-Stack Developer with a passion for building
                applications that feel effortless to use and elegant under the
                hood. Over the years, I've worked across the entire
                stack React and Vue on the frontend, Node.js and Spring Boot on
                the backend delivering systems that don't just work, but work
                well.
              </Text>

              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
              >
                I believe great software is an intersection of three things:
                clarity (code others can understand), intentionality (systems
                built with purpose, not complexity), and reliability
                (applications your users can trust). I'm drawn to problems that
                require both strategic thinking and technical depth building
                marketplace platforms, architecting authentication systems,
                optimizing performance until applications truly feel fast.
              </Text>
              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
              >
                Beyond the code, I'm committed to continuous learning and
                shipping work that has real impact. Whether designing APIs,
                refining UX, or debugging infrastructure, I approach every
                challenge with the mindset of someone building something they'd
                personally use.
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
