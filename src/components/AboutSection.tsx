import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";

import {
  skillCategories,
  skills,
  type Skill,
  type SkillCategory,
} from "../utils/Skills";
import { bgGradient } from "../App";
import { yearsOfExperience } from "../utils/experience";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Box
      p="6"
      bg="rgba(255, 255, 255, 0.03)"
      borderWidth="1px"
      borderColor="whiteAlpha.150"
      borderRadius="xl"
      transition="all 0.3s"
      backdropFilter="blur(10px)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "whiteAlpha.400",
        bg: "rgba(255, 255, 255, 0.07)",
      }}
    >
      <VStack spacing="4" align="start">
        <Flex
          w="12"
          h="12"
          align="center"
          justify="center"
          borderRadius="lg"
          bg="whiteAlpha.100"
        >
          <Icon as={category.icon} boxSize="6" color="whiteAlpha.700" />
        </Flex>
        <Heading size="sm" color="white" letterSpacing="wide">
          {category.title}
        </Heading>
        <Text color="gray.400" fontSize="sm" lineHeight="tall">
          {category.description}
        </Text>
      </VStack>
    </Box>
  );
};

interface SkillIconCardProps {
  skill: Skill;
}

const SkillIconCard: React.FC<SkillIconCardProps> = ({ skill }) => {
  return (
    <Box
      p="5"
      bg="rgba(255, 255, 255, 0.03)"
      borderWidth="1px"
      borderColor="whiteAlpha.150"
      borderRadius="lg"
      transition="all 0.3s"
      backdropFilter="blur(10px)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
        borderColor: "whiteAlpha.400",
        bg: "rgba(255, 255, 255, 0.07)",
      }}
    >
      <VStack spacing="3">
        <Flex
          w="14"
          h="14"
          align="center"
          justify="center"
          borderRadius="lg"
          bg="whiteAlpha.100"
        >
          <Icon as={skill.icon} boxSize="7" color="whiteAlpha.800" />
        </Flex>
        <Text
          fontWeight="medium"
          color="gray.300"
          fontSize="xs"
          textAlign="center"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          {skill.name}
        </Text>
      </VStack>
    </Box>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <Box py="20" bgGradient={bgGradient} id="about">
      <Container maxW="container.xl">
        {/* Section Header */}
        <Stack spacing="4" textAlign="center" mb="16" data-aos="fade-up">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="whiteAlpha.500"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Who I Am
          </Text>
          <Heading as="h2" size="2xl" color="white">
            About Me
          </Heading>
          <Divider borderColor="whiteAlpha.150" maxW="60px" mx="auto" />
          <Text
            fontSize="lg"
            color="gray.400"
            maxW="3xl"
            mx="auto"
            lineHeight="tall"
          >
            A Full Stack Developer with {yearsOfExperience}+ years of experience
            building scalable web applications. I thrive on solving complex
            problems and delivering seamless user experiences across the entire
            stack.
          </Text>
        </Stack>

        <Stack spacing="20">
          {/* What I Do */}
          <Box
            p="10"
            bg="rgba(255, 255, 255, 0.03)"
            borderWidth="1px"
            borderColor="whiteAlpha.150"
            borderRadius="2xl"
            backdropFilter="blur(10px)"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Stack spacing="4">
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="whiteAlpha.500"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Expertise
              </Text>
              <Heading size="md" color="white">
                What I Do
              </Heading>
              <Text color="gray.400" lineHeight="tall" fontSize="lg">
                I specialize in modern JavaScript and TypeScript development
                with Next.js, React, and Node.js, alongside Java and Spring Boot
                for enterprise-level backend systems. I work with both SQL
                (PostgreSQL) and NoSQL (MongoDB) databases, implement secure
                authentication systems, and integrate payment gateways and
                real-time features.
              </Text>
            </Stack>
          </Box>

          {/* What I'm Offering */}
          <Box>
            <Stack spacing="2" textAlign="center" mb="10" data-aos="fade-up">
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="whiteAlpha.500"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Services
              </Text>
              <Heading size="lg" color="white">
                What I'm Offering
              </Heading>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
              {skillCategories.map((category, index) => (
                <Box
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <SkillCard category={category} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Technical Skills */}
          <Box>
            <Stack spacing="2" textAlign="center" mb="10" data-aos="fade-up">
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="whiteAlpha.500"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                Stack
              </Text>
              <Heading size="lg" color="white">
                Technical Skills
              </Heading>
            </Stack>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="4">
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
        </Stack>
      </Container>
    </Box>
  );
};
