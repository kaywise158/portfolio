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

import { skillCategories, skills } from "../utils/Skills";
import SkillCard from "../ui/cards/SkillCard";
import SkillIconCard from "../ui/cards/SkillIconCard";

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
                I am a MERN Stack Web Developer focusing on building
                production-ready applications. I enjoy designing APIs, creating
                interactive user interfaces, and optimizing performance to
                deliver smooth and efficient user experiences.
              </Text>

              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
              >
                Along with strong problem-solving skills, I follow clean
                architecture principles and modern development patterns. I build
                maintainable applications that feel fast, secure, and intuitive.
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

        {/* TECH STACK */}
        <Box mt={{ base: "24", md: "32" }}>
          <Stack spacing="3" textAlign="center" mb="12">
            <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
              Skills & Technologies
            </Heading>
            <Text
              color="whiteAlpha.600"
              letterSpacing="widest"
              fontSize="sm"
              fontWeight="700"
            >
              I work with modern tools and technologies to build performant and
              scalable applications. My tech stack includes a wide range of
              libraries and frameworks that I use to create efficient and
              maintainable code.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="5">
            {skills.map((skill, index) => (
              <Box
                key={index}
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 50, 400)}
              >
                <SkillIconCard skill={skill} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* SERVICES */}
        <Box mt={{ base: "24", md: "32" }}>
          <Stack spacing="3" textAlign="center" mb="12">
            <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
              Services I Provide
            </Heading>
            <Text
              color="whiteAlpha.600"
              letterSpacing="widest"
              fontSize="sm"
              fontWeight="700"
            >
              I offer a range of services to help you bring your web application
              ideas to life. Whether you need a full-stack solution, API
              development, or performance optimization, I have the skills and
              experience to deliver high-quality results that meet your needs
              and exceed your expectations.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
            {skillCategories.map((category, index) => (
              <Box key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <SkillCard category={category} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};
