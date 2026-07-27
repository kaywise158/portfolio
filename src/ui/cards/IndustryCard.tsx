import {
  Box,
 
  Text,
  
  HStack,
  Icon,
} from "@chakra-ui/react";

import type { IndustryCardProps } from "../../utils/Skills";




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


export default IndustryCard



