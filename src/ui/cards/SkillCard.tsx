import { Box, VStack, HStack, Icon, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import type { SkillCategory } from "../../utils/Skills";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Box
      p={{ base: "6", md: "8" }}
      h="full"
      minH="380px"
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
      <VStack h="full" align="start" spacing="4">
        <HStack spacing="4">
          <Icon as={category.icon} boxSize="10" color="#1E90FF" />
          <Heading
            color="white"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="700"
            lineHeight="1.2"
          >
            {category.title}
          </Heading>
        </HStack>

        <Text color="gray.300" fontSize="sm" lineHeight="1.6">
          {category.description}
        </Text>

        <List spacing="2" w="full">
          {category.items.map((item, i) => (
            <ListItem
              key={i}
              display="flex"
              alignItems="flex-start"
              fontSize="sm"
              color="whiteAlpha.800"
              lineHeight="1.5"
            >
              <ListIcon as={FaCheckCircle} color="#1E90FF" mt="1" boxSize="3.5" />
              {item}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default SkillCard;