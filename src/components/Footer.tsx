import {
  Box,
  Container,
  Stack,
  Text,
  Link as ChakraLink,
  HStack,
  Icon,
  Divider,
  SimpleGrid,
  VStack,
  Heading,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

interface FooterLink {
  name: string;
  id: string;
}

const quickLinks: FooterLink[] = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/muritador5050", label: "GitHub" },
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
    <Box
      backdropFilter="blur(10px)"
      bg="rgba(0, 0, 0, 0.95)"
      borderTop="1px"
      borderColor="whiteAlpha.150"
    >
      <Container maxW="container.xl" py="12">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8" mb="8">
          {/* Brand Section */}
          <VStack align="start" spacing="4">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, gray.300, white)"
              bgClip="text"
              fontFamily='"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            >
              azmuritador
            </Text>
            <Text color="gray.300" fontSize="sm">
              Full Stack Developer building reliable, scalable applications and
              clean user experiences across the entire stack.
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
                    bg="rgba(255, 255, 255, 0.1)"
                    color="whiteAlpha.700"
                    transition="all 0.3s"
                    _hover={{
                      bg: "whiteAlpha.200",
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={social.icon} boxSize="5" />
                  </Box>
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing="4">
            <Heading size="sm" color="white">
              Quick Links
            </Heading>
            <Stack spacing="2">
              {quickLinks.map((link, index) => (
                <ChakraLink
                  key={index}
                  onClick={() => scrollTo(link.id)}
                  cursor="pointer"
                  color="gray.300"
                  fontSize="sm"
                  _hover={{
                    color: "white",
                    textDecoration: "none",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.2s"
                >
                  {link.name}
                </ChakraLink>
              ))}
            </Stack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing="4">
            <Heading size="sm" color="white">
              Get In Touch
            </Heading>
            <Stack spacing="2" fontSize="sm" color="gray.300">
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

        <Divider borderColor="whiteAlpha.150" mb="8" />

        {/* Bottom Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing="4"
        >
          <Text fontSize="sm" color="gray.300">
            © {currentYear} azmuritador. All rights reserved.
          </Text>
          <HStack spacing="1" fontSize="sm" color="gray.300">
            <Text>Built with</Text>
            <Icon as={FaHeart} color="gray.400" boxSize="4" />
            <Text>using React, TypeScript & Chakra UI</Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
