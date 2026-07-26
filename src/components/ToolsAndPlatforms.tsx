import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from "@chakra-ui/react";
import { tools } from "../utils/Skills";

export const ToolsAndPlatforms: React.FC = () => {
  return (
    <Box
      id="tools"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, #0a0f2c 0%, #0d1340 40%, #12103a 100%)"
    >
      <Container maxW="container.xl">
        <Box py={{ base: "16", md: "20" }}>
          <VStack spacing="3" textAlign="center" mb="12">
            <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }}>
              Tools & Platforms
            </Heading>
            <Text
              color="whiteAlpha.700"
              letterSpacing="widest"
              fontWeight="700"
              maxW="2xl"
              mx="auto"
            >
              The platforms and tools I use to grow and optimize Shopify stores.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="5">
            {tools.map((tool, index) => (
              <Box
                key={tool.name}
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 50, 400)}
                p="6"
                borderRadius="20px"
                bg="rgba(16,25,60,0.65)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.12)"
                backdropFilter="blur(16px)"
                transition="0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <VStack spacing="3">
                  <Icon as={tool.icon} boxSize="10" color={tool.color} />
                  <Text color="white" fontWeight="600" fontSize="sm" textAlign="center">
                    {tool.name}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};