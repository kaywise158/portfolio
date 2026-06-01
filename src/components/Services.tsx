import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import { skillCategories } from "../utils/Skills";
import SkillCard from "../ui/cards/SkillCard";

export const Services: React.FC = () => {
  return (
    <Box
      py={{ base: "16", md: "24" }}
      id="services"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        {/* SERVICES */}
        <Box mt={{ base: "24", md: "22" }}>
          <Stack spacing="3" textAlign="center" mb="12">
            <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
              Services I Provide
            </Heading>
            <Text
              color="whiteAlpha.700"
              letterSpacing="widest"
              fontWeight="700"
              maxW={"2xl"}
              mx={"auto"}
            >
              I offer design and development services focused on building fast,
              modern and user-friendly digital experiences. Whether you need a
              full-stack solution or just a stunning frontend, I've got you
              covered.
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
