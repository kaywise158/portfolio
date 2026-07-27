import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  
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
import type { Industry, Reason } from "../utils/Skills";
import IndustryCard from "../ui/cards/IndustryCard";
import ReasonCard from "../ui/cards/ReasonCard";



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






export const IndustriesSection: React.FC = () => {
  return (
    <Box
      py="20"
      id="industries"
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