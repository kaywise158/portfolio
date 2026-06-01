import { Box, VStack, Flex, Icon, Heading, Text } from "@chakra-ui/react";
import type { Skill } from "../../utils/Skills";

interface SkillIconCardProps {
  skill: Skill;
}

const SkillIconCard: React.FC<SkillIconCardProps> = ({ skill }) => {
  return (
    <Box
      p={{ base: "8", md: "10" }}
      h={{ base: "210px", md: "320px" }}
      bg="rgba(16,25,60,0.65)"
      border="1px solid"
      borderColor="rgba(255,255,255,0.12)"
      borderRadius="24px"
      backdropFilter="blur(16px)"
      position="relative"
      overflow="hidden"
      transition="0.35s ease"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "24px",
        padding: "1px",
        background:
          "linear-gradient(135deg, rgba(0,140,255,0.9), rgba(255,0,120,0.6))",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
      _hover={{
        transform: "translateY(-8px)",
      }}
    >
      <VStack h="full" justify="center" spacing="6" textAlign="center">
        <Flex align="center" justify="center">
          <Icon as={skill.icon} boxSize="16" color="#1E90FF" />
        </Flex>

        <Heading
          color="white"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="700"
          lineHeight="1.2"
        >
          {skill.name}
        </Heading>

        {/* Wrapper collapses entirely on mobile — no leftover spacing */}
        <Box display={{ base: "none", md: "block" }} w="full">
          <Text color="gray.300" fontSize="lg" lineHeight="1.8" noOfLines={3}>
            {skill.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SkillIconCard;
