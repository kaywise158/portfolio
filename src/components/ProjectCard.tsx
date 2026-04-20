import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Heading,
  Text,
  Badge,
  Button,
  Stack,
  HStack,
  Link,
  Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isUnderDevelopment = !project.githubUrl && !project.liveUrl;

  return (
    <Card
      variant="outline"
      borderColor={isUnderDevelopment ? "whiteAlpha.100" : "whiteAlpha.150"}
      overflow="hidden"
      bg={
        isUnderDevelopment
          ? "rgba(255, 255, 255, 0.02)"
          : "rgba(255, 255, 255, 0.05)"
      }
      backdropFilter="blur(10px)"
      transition="transform 0.2s, box-shadow 0.2s"
      opacity={isUnderDevelopment ? 0.75 : 1}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "whiteAlpha.400",
        bg: "rgba(255, 255, 255, 0.08)",
        opacity: 1,
      }}
    >
      {/* Image */}
      <Box position="relative" overflow="hidden" h="200px" bg="gray.800">
        <Image
          src={project.images[0]}
          fallbackSrc="https://placehold.co/800x600/1F2937/F9FAFB?text=Image+Unavailable"
          alt={project.name}
          objectFit="contain"
          w="100%"
          h="100%"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
          filter={isUnderDevelopment ? "grayscale(40%)" : "none"}
        />

        {/* Featured badge */}
        {project.featured && !isUnderDevelopment && (
          <Badge
            position="absolute"
            top="4"
            right="4"
            fontSize="sm"
            px="3"
            py="1"
            colorScheme="whiteAlpha"
            bg="whiteAlpha.300"
            color="white"
          >
            Featured
          </Badge>
        )}

        {/* Under development badge */}
        {isUnderDevelopment && (
          <Badge
            position="absolute"
            top="4"
            right="4"
            fontSize="xs"
            px="3"
            py="1"
            bg="rgba(0, 0, 0, 0.6)"
            color="whiteAlpha.700"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            display="flex"
            alignItems="center"
            gap="1"
          >
            <Box as={MdConstruction} display="inline" mr="1" />
            In Development
          </Badge>
        )}
      </Box>

      {/* Content */}
      <CardHeader pb="0">
        <HStack justify="space-between" align="center">
          <Heading size="md" noOfLines={1} color="white">
            {project.name}
          </Heading>
        </HStack>
      </CardHeader>

      <CardBody>
        <Stack spacing="3">
          <Text color="gray.400" noOfLines={3} fontSize="sm">
            {project.description}
          </Text>

          <HStack spacing="2" flexWrap="wrap">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                colorScheme="whiteAlpha"
                variant="subtle"
                bg="whiteAlpha.100"
                color="whiteAlpha.800"
              >
                {tech}
              </Badge>
            ))}
          </HStack>

          <HStack spacing="3" pt="2">
            {project.liveUrl && (
              <Button
                as={Link}
                href={project.liveUrl}
                isExternal
                leftIcon={<FaExternalLinkAlt />}
                size="sm"
                colorScheme="whiteAlpha"
                bg="whiteAlpha.200"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s"
              >
                Live Demo
              </Button>
            )}

            {/* Shown only when under development */}
            {isUnderDevelopment && (
              <Text fontSize="xs" color="whiteAlpha.400" fontStyle="italic">
                Links available soon
              </Text>
            )}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
