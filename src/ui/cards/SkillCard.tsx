import { Box, VStack, Flex, Icon, Heading, Text } from "@chakra-ui/react";
import type { SkillCategory } from "../../utils/Skills";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Box
      p={{ base: "8", md: "10" }}
      h="320px"
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
          <Icon as={category.icon} boxSize="16" color="#1E90FF" />
        </Flex>

        <Heading
          color="white"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="700"
          lineHeight="1.2"
        >
          {category.title}
        </Heading>

        <Text
          color="gray.300"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
        >
          {category.description}
        </Text>
      </VStack>
    </Box>
  );
};

export default SkillCard;
