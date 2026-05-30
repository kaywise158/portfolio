import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import { skills } from "../utils/Skills";
import SkillIconCard from "../ui/cards/SkillIconCard";

export const SkillsAndTech: React.FC = () => {
  return (
    <Box id="skills" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        {/* TECH STACK */}
        <Box mt={{ base: "24", md: "22" }}>
          <Stack spacing="3" textAlign="center" mb="12">
            <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
              Skills & Technologies
            </Heading>
            <Text
              color="whiteAlpha.700"
              letterSpacing="widest"
              fontWeight="700"
              maxW={"2xl"}
              mx={"auto"}
            >
              I work with modern tools and technologies to build fast, scalable
              and efficient web applications.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="5">
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
      </Container>
    </Box>
  );
};
