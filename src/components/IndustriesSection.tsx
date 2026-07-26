import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaTshirt,
  FaSpa,
  FaGem,
  FaCouch,
  FaPaw,
  FaMicrochip,
  FaHeartbeat,
  FaStore,
  FaBullseye,
  FaComments,
  FaPuzzlePiece,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";
import { type IconType } from "react-icons";

interface Industry {
  icon: IconType;
  label: string;
}

interface Reason {
  icon: IconType;
  title: string;
  description: string;
}

const industries: Industry[] = [
  { icon: FaTshirt, label: "Fashion & Apparel" },
  { icon: FaSpa, label: "Beauty & Cosmetics" },
  { icon: FaGem, label: "Jewelry" },
  { icon: FaCouch, label: "Home & Living" },
  { icon: FaPaw, label: "Pet Products" },
  { icon: FaMicrochip, label: "Electronics" },
  { icon: FaHeartbeat, label: "Health & Wellness" },
  { icon: FaStore, label: "General Dropshipping Stores" },
];

const reasons: Reason[] = [
  {
    icon: FaBullseye,
    title: "Results-Focused Approach",
    description:
      "Every recommendation is tied to a measurable outcome, whether it's traffic, conversion rate, or revenue.",
  },
  {
    icon: FaComments,
    title: "Clear Communication",
    description:
      "You'll always know what's being worked on, why it matters, and what's coming next.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Tailored Strategies",
    description:
      "No cookie-cutter playbooks. Every plan is built around your store, your niche, and your goals.",
  },
  {
    icon: FaChartLine,
    title: "Long-Term Growth Mindset",
    description:
      "I optimize for sustainable growth, not quick wins that fade after the first month.",
  },
  {
    icon: FaHandsHelping,
    title: "Ongoing Support",
    description:
      "The relationship doesn't end at launch. I stay involved with continued recommendations and support.",
  },
];

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => (
  <HStack
    spacing="4"
    p="5"
    borderRadius="xl"
    bg="rgba(255, 255, 255, 0.04)"
    border="1px solid"
    borderColor="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(20px)"
    transition="all 0.3s"
    _hover={{
      bg: "rgba(255, 255, 255, 0.07)",
      borderColor: "rgba(130, 100, 255, 0.4)",
      transform: "translateY(-4px)",
    }}
  >
    <Box
      w="12"
      h="12"
      flexShrink={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      background="linear-gradient(135deg, rgba(79,142,247,0.2) 0%, rgba(192,57,122,0.2) 100%)"
    >
      <Icon as={industry.icon} boxSize="5" color="white" />
    </Box>
    <Text color="whiteAlpha.900" fontSize="md" fontWeight="medium">
      {industry.label}
    </Text>
  </HStack>
);

interface ReasonCardProps {
  reason: Reason;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason }) => (
  <Stack
    spacing="4"
    p="6"
    borderRadius="2xl"
    bg="rgba(255, 255, 255, 0.04)"
    border="1px solid"
    borderColor="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(20px)"
    transition="all 0.3s"
    _hover={{
      bg: "rgba(255, 255, 255, 0.07)",
      borderColor: "rgba(130, 100, 255, 0.4)",
      transform: "translateY(-4px)",
    }}
  >
    <Box
      w="12"
      h="12"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      background="linear-gradient(90deg, #4f8ef7 0%, #c0397a 100%)"
    >
      <Icon as={reason.icon} boxSize="5" color="white" />
    </Box>
    <Heading size="md" color="white">
      {reason.title}
    </Heading>
    <Text color="whiteAlpha.700" fontSize="sm">
      {reason.description}
    </Text>
  </Stack>
);

export const IndustriesSection: React.FC = () => {
  return (
    <Box
      py="20"
      id="contact"
      bg="linear-gradient(135deg, #0a0f2c 0%, #0d1340 40%, #12103a 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background glow blobs matching the site's dark navy aesthetic */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(80, 40, 180, 0.15) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(220, 50, 100, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Industries Header */}
        <Stack spacing="4" textAlign="center" mb="12" data-aos="fade-up">
          <Heading as="h2" size="2xl" color="white">
            Industries I Work With
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            I've helped Shopify stores grow across a wide range of niches,
            each with its own customers, challenges, and opportunities.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="5" mb="24">
          {industries.map((industry, index) => (
            <Box
              key={industry.label}
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              <IndustryCard industry={industry} />
            </Box>
          ))}
        </SimpleGrid>

        {/* Why Work With Me Header */}
        <Stack spacing="4" textAlign="center" mb="12" data-aos="fade-up">
          <Heading as="h2" size="2xl" color="white">
            Why Work With Me?
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            A partner who treats your store's growth like their own.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {reasons.map((reason, index) => (
            <Box
              key={reason.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ReasonCard reason={reason} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};