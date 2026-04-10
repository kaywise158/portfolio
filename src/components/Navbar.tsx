import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Container,
  Link as ChakraLink,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={4}
      borderBottom="1px"
      borderColor="whiteAlpha.200"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(0, 0, 0, 0.95)"
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h="16" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <ChakraLink
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, gray.300, white)"
              bgClip="text"
              fontFamily='"Lobster", cursive'
            >
              ABDUL
            </Text>
          </ChakraLink>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing="1" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.name}
                as={RouterLink}
                to={link.href}
                px="4"
                py="2"
                rounded="md"
                fontSize="md"
                fontWeight="medium"
                color="gray.300"
                _hover={{
                  textDecoration: "none",
                  bg: "whiteAlpha.100",
                  color: "white",
                }}
                transition="all 0.2s"
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>

          {/* Right Side Actions */}
          <HStack spacing="2">
            {/* Mobile menu button */}
            <IconButton
              size="md"
              icon={<GiHamburgerMenu />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              onClick={onOpen}
              color="white"
              bg="transparent"
              _hover={{ bg: "whiteAlpha.100" }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="rgba(0, 0, 0, 0.95)"
          borderLeft="1px"
          borderColor="whiteAlpha.200"
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottom="1px" borderColor="whiteAlpha.200">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              bgClip="text"
              fontFamily="Space Grotesk, sans-serif"
            >
              ABDUL
            </Text>
          </DrawerHeader>

          <DrawerBody pt="6">
            <VStack as="nav" spacing="3" align="stretch">
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.name}
                  as={RouterLink}
                  to={link.href}
                  px="4"
                  py="3"
                  rounded="md"
                  fontWeight="medium"
                  fontSize="lg"
                  color="gray.300"
                  _hover={{
                    textDecoration: "none",
                    bg: "whiteAlpha.100",
                    color: "white",
                  }}
                  transition="all 0.2s"
                  onClick={onClose}
                >
                  {link.name}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
