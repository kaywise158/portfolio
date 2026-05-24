import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import {
  projects,
  getFeaturedProjects,
  getProjectsByCategory,
} from "../data/Projects";
import { bgGradient } from "../App";

export const ProjectsSection: React.FC = () => {
  return (
    <Box py="20" id="projects" bgGradient={bgGradient}>
      <Container maxW="container.xl">
        {/* Section Header */}
        <Box textAlign="center" mb="12" data-aos="fade-up">
          <Heading as="h2" size="2xl" mb="4" color="white">
            My Projects
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            A selection of projects that demonstrate my ability to build
            real-world applications across the full stack.
          </Text>
        </Box>

        {/* Tabs for filtering */}
        <Tabs variant="soft-rounded" colorScheme="green" align="center">
          <TabList
            mb="8"
            flexWrap="wrap"
            justifyContent="center"
            gap="2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Tab
              color="gray.300"
              _selected={{ color: "white", bg: "whiteAlpha.300" }}
              _hover={{ bg: "whiteAlpha.150" }}
            >
              All Projects
            </Tab>
            <Tab
              color="gray.300"
              _selected={{ color: "white", bg: "whiteAlpha.300" }}
              _hover={{ bg: "whiteAlpha.150" }}
            >
              Featured
            </Tab>
            <Tab
              color="gray.300"
              _selected={{ color: "white", bg: "whiteAlpha.300" }}
              _hover={{ bg: "whiteAlpha.150" }}
            >
              Web Apps
            </Tab>
            <Tab
              color="gray.300"
              _selected={{ color: "white", bg: "whiteAlpha.300" }}
              _hover={{ bg: "whiteAlpha.150" }}
            >
              Full Stack
            </Tab>
            <Tab
              color="gray.300"
              _selected={{ color: "white", bg: "whiteAlpha.300" }}
              _hover={{ bg: "whiteAlpha.150" }}
            >
              Mobile
            </Tab>
          </TabList>

          <TabPanels>
            {/* All Projects */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                {projects.map((project, index) => (
                  <Box
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <ProjectCard project={project} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Featured Projects */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                {getFeaturedProjects().map((project, index) => (
                  <Box
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <ProjectCard project={project} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Web Apps */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                {getProjectsByCategory("web").map((project, index) => (
                  <Box
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <ProjectCard project={project} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Full Stack */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                {getProjectsByCategory("fullstack").map((project, index) => (
                  <Box
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <ProjectCard project={project} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Mobile */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                {getProjectsByCategory("mobile").map((project, index) => (
                  <Box
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <ProjectCard project={project} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
