import {
  Box,
  Heading,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";


import type {   ReasonCardProps } from "../../utils/Skills";


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
export default ReasonCard