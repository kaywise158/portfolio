import { Box, Container, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Store Audit",
    description:
      "I analyze your Shopify store to identify growth opportunities.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "I create a customized action plan based on your business goals.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "I optimize your store, improve performance, and implement marketing strategies.",
  },
  {
    number: "04",
    title: "Growth & Optimization",
    description:
      "I continuously refine strategies to improve traffic, conversions, and sales.",
  },
];

interface ProcessStepCardProps {
  step: ProcessStep;
  isLast: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, isLast }) => (
  <Box id="process" position="relative" h="full">
    {/* Connector line to the next step (desktop only) */}
    {!isLast && (
      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        top="32px"
        left="calc(50% + 40px)"
        w="calc(100% - 80px)"
        h="2px"
        background="linear-gradient(90deg, rgba(79,142,247,0.5) 0%, rgba(192,57,122,0.5) 100%)"
        zIndex={0}
      />
    )}

    <Stack
      spacing="5"
      p="7"
      h="full"
      position="relative"
      zIndex={1}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.04)"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(20px)"
      transition="all 0.3s"
      _hover={{
        bg: "rgba(255, 255, 255, 0.07)",
        borderColor: "rgba(130, 100, 255, 0.4)",
        transform: "translateY(-6px)",
      }}
    >
      <Box
        w="16"
        h="16"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        background="linear-gradient(90deg, #4f8ef7 0%, #c0397a 100%)"
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          {step.number}
        </Text>
      </Box>
      <Heading size="md" color="white">
        {step.title}
      </Heading>
      <Text color="whiteAlpha.700" fontSize="sm">
        {step.description}
      </Text>
    </Stack>
  </Box>
);

export const MyProcessSection: React.FC = () => {
  return (
    <Box py="20" id="process">
      <Container maxW="container.xl">
        {/* Section Header */}
        <Box textAlign="center" mb="16" data-aos="fade-up">
          <Heading as="h2" size="2xl" mb="4" color="white">
            My Process
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            A clear, step-by-step approach to turning your Shopify store into
            a growth engine.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="8">
          {steps.map((step, index) => (
            <Box
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProcessStepCard step={step} isLast={index === steps.length - 1} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};