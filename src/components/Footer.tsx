import {
  Box,
  Container,
  Stack,
  Text,
  Link as ChakraLink,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/abdulazeez9", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abdulazeez-muritador",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/Asadoye5050",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:abdulazeezmuritador9@gmail.com",
    label: "Email",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="#0d1b2e" borderTop="none" position="relative">
      {/* CTA Banner */}
      <Box
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-20%"
          left="50%"
          transform="translateX(-50%)"
          w="600px"
          h="300px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="container.lg" py="16" position="relative" zIndex={1}>
          <VStack spacing="5" textAlign="center">
            <Heading
              size="xl"
              color="white"
              bgGradient="linear(to-r, #4f8ef7, #c0397a)"
              bgClip="text"
            >
              Let's Grow Your Shopify Store
            </Heading>
            <Text color="gray.300" fontSize="md" maxW="xl">
              If you're looking for a Shopify specialist who understands both
              store optimization and digital marketing, I'd love to help.
            </Text>
            <Text color="gray.400" fontSize="md" maxW="xl">
              Let's work together to build a high-converting Shopify store
              that drives sustainable growth and increases your sales.
            </Text>
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              borderRadius="full"
              px="10"
              background="linear-gradient(90deg, #4f8ef7 0%, #c0397a 100%)"
              color="white"
              fontWeight="semibold"
              _hover={{
                background: "linear-gradient(90deg, #3a7ae0 0%, #a82e6a 100%)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              Get Started
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py="12">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" mb="8">
          {/* Brand Section */}
          <VStack align="start" spacing="4">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, #e75480, #4a90d9)"
              bgClip="text"
              fontFamily='"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            >
              FullStack Developer
            </Text>
            <Text color="gray.400" fontSize="sm">
              Shopify specialist helping brands optimize their stores and
              build marketing strategies that drive sustainable growth.
            </Text>
            <HStack spacing="3">
              {socialLinks.map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                >
                  <Box
                    w="10"
                    h="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="md"
                    bg="#1a8fe3"
                    color="white"
                    transition="all 0.3s"
                    _hover={{
                      bg: "#1577c4",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={social.icon} boxSize="5" />
                  </Box>
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing="4">
            <Heading size="sm" color="white">
              Get In Touch
            </Heading>
            <Stack spacing="2" fontSize="sm" color="gray.400">
              <Text>Lagos, Nigeria</Text>
              <ChakraLink
                href="mailto:abdulazeezmuritador9@gmail.com"
                _hover={{ color: "white" }}
                transition="color 0.2s"
              >
                abdulazeezmuritador9@gmail.com
              </ChakraLink>
              <ChakraLink
                href="tel:+2348148985591"
                _hover={{ color: "white" }}
                transition="color 0.2s"
              >
                +234-8148-985-591
              </ChakraLink>
            </Stack>
          </VStack>
        </SimpleGrid>

        {/* Gradient Divider matching the pink-to-blue gradient in image */}
        <Box h="1px" mb="8" bgGradient="linear(to-r, #e75480, #4a90d9)" />

        {/* Bottom Section */}
        <Stack textAlign="center">
          <Text fontSize="sm" color="gray.400">
            Copyright © {currentYear} Abdulazeez Muritador | All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};