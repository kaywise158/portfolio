import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  Badge,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaSearchPlus } from "react-icons/fa";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isUnderDevelopment = !project.githubUrl && !project.liveUrl;

  return (
    <Card
      position="relative"
      overflow="hidden"
      bg="#08152f"
      border="1px solid"
      borderColor="rgba(0, 183, 255, 0.4)"
      borderRadius="24px"
      p="4"
      transition="all 0.3s ease"
      boxShadow="0 0 30px rgba(0, 183, 255, 0.08)"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 0 40px rgba(0, 183, 255, 0.2)",
        borderColor: "rgba(0, 183, 255, 0.7)",
      }}
    >
      {/* IMAGE SECTION */}
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="20px"
        h={{ base: "220px", md: "250px" }}
        bg="linear-gradient(180deg, #142850 0%, #08152f 100%)"
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="0.4s ease"
          _hover={{
            transform: "scale(1.06)",
          }}
          filter={isUnderDevelopment ? "grayscale(40%)" : "none"}
        />
      </Box>

      {/* CONTENT */}
      <CardBody px="1" pt="5" pb="2">
        <Stack spacing="4">
          {/* TITLE */}
          <Flex align="center" gap="2" wrap="wrap">
            <Heading
              color="white"
              fontWeight="700"
              fontSize={{ base: "28px", md: "34px" }}
              lineHeight="1"
            >
              {project.name}
            </Heading>

            <Text
              color="gray.400"
              fontWeight="600"
              fontSize={{ base: "22px", md: "26px" }}
            >
              ({project.year})
            </Text>
          </Flex>

          {/* DESCRIPTION */}
          <Text color="gray.300" fontSize="lg" lineHeight="1.7" noOfLines={2}>
            {project.description}
          </Text>

          {/* TECH STACK */}
          <HStack spacing="3" flexWrap="wrap">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                px="4"
                py="2"
                borderRadius="full"
                bg="rgba(0, 140, 255, 0.12)"
                color="#38bdf8"
                fontWeight="500"
                fontSize="0.9rem"
                border="1px solid rgba(0, 183, 255, 0.1)"
              >
                {tech}
              </Badge>
            ))}
          </HStack>

          {/* BUTTONS */}
          <HStack spacing="5" pt="2" flexWrap="wrap">
            {project.githubUrl && (
              <Button
                as={Link}
                href={project.githubUrl}
                isExternal
                leftIcon={<FaGithub />}
                h="58px"
                px="10"
                borderRadius="full"
                fontSize="lg"
                fontWeight="700"
                color="white"
                bg="linear-gradient(90deg, #3b82f6 0%, #ef4444 100%)"
                _hover={{
                  transform: "translateY(-2px)",
                  opacity: 0.95,
                }}
              >
                GitHub
              </Button>
            )}

            {project.liveUrl && (
              <Button
                as={Link}
                href={project.liveUrl}
                isExternal
                rightIcon={<FaExternalLinkAlt />}
                h="58px"
                px="10"
                borderRadius="full"
                fontSize="lg"
                fontWeight="700"
                color="white"
                bg="linear-gradient(90deg, #1d4ed8 0%, #2196f3 100%)"
                _hover={{
                  transform: "translateY(-2px)",
                  opacity: 0.95,
                }}
              >
                Live Demo
              </Button>
            )}

            {isUnderDevelopment && (
              <Text color="gray.500" fontStyle="italic" fontSize="sm">
                Currently in development
              </Text>
            )}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
