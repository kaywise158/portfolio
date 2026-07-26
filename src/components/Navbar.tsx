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
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import scrollTo from "../utils/scrollTo";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; 

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = (id: string) =>
    activeId === id ? "#3B82F6" : "whiteAlpha.900";

  const linkWeight = (id: string) => (activeId === id ? "700" : "500");

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg="#08142B"
      borderBottom="1px solid rgba(239,68,68,0.35)"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl">
        <Flex h="80px" alignItems="center" justifyContent="space-between">
          {/* LOGO */}
          <ChakraLink
            onClick={() => scrollTo("home")}
            cursor="pointer"
            _hover={{ textDecoration: "none" }}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="800"
              letterSpacing="-0.5px"
              bgGradient="linear(to-r, #3B82F6, #A855F7, #EF4444)"
              bgClip="text"
            >
           Kaywise Digital
            </Text>
          </ChakraLink>

          {/* DESKTOP NAV */}
          <HStack spacing="10" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.name}
                onClick={() => scrollTo(link.id)}
                cursor="pointer"
                position="relative"
                fontWeight={linkWeight(link.id)}
                color={linkColor(link.id)}
                fontSize="lg"
                _hover={{ textDecoration: "none", color: "#3B82F6" }}
                transition="all 0.3s ease"
                // subtle underline indicator for active link
                _after={
                  activeId === link.id
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "-4px",
                        left: "0",
                        right: "0",
                        h: "2px",
                        borderRadius: "full",
                        bg: "linear-gradient(90deg, #3B82F6, #EF4444)",
                      }
                    : {}
                }
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>

          {/* RIGHT ACTIONS */}
          <HStack spacing="3">
            <Button
              onClick={() => scrollTo("contact")}
              h="52px"
              px="8"
              borderRadius="full"
              bg="rgba(255,255,255,0.03)"
              border="1px solid transparent"
              backgroundImage={`
                linear-gradient(#08142B, #08142B),
                linear-gradient(90deg, #3B82F6, #EF4444)
              `}
              backgroundClip="padding-box, border-box"
              color="white"
              fontWeight="700"
              fontSize="lg"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 0 30px rgba(239,68,68,0.25)",
              }}
              transition="all 0.3s ease"
              display={{ base: "none", md: "flex" }}
            >
               Hire Me
            </Button>

            <IconButton
              size="md"
              icon={<GiHamburgerMenu />}
              aria-label="Open Menu"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              color="white"
              bg="transparent"
              _hover={{ bg: "whiteAlpha.100" }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="#08142B"
          borderLeft="1px solid rgba(255,255,255,0.08)"
        >
          <DrawerCloseButton color="white" />

          <DrawerHeader borderBottom="1px solid rgba(255,255,255,0.08)">
            <Text
              fontSize="2xl"
              fontWeight="800"
              bgGradient="linear(to-r, #3B82F6, #A855F7, #EF4444)"
              bgClip="text"
            >
              Kaywise Digital
            </Text>
          </DrawerHeader>

          <DrawerBody pt="8">
            <VStack spacing="5" align="stretch">
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.name}
                  onClick={() => {
                    onClose();
                    setTimeout(() => scrollTo(link.id), 300);
                  }}
                  fontSize="lg"
                  fontWeight={linkWeight(link.id)}
                  color={linkColor(link.id)}
                  py="2"
                  // left border accent for active item in drawer
                  borderLeft={
                    activeId === link.id
                      ? "3px solid #3B82F6"
                      : "3px solid transparent"
                  }
                  pl={activeId === link.id ? "3" : "0"}
                  transition="all 0.2s ease"
                  _hover={{ textDecoration: "none", color: "#3B82F6" }}
                >
                  {link.name}
                </ChakraLink>
              ))}

              <Button
                mt="6"
                onClick={() => {
                  onClose();
                  setTimeout(() => scrollTo("contact"), 300);
                }}
                h="55px"
                borderRadius="full"
                bgGradient="linear(to-r, #3B82F6, #EF4444)"
                color="white"
                fontWeight="700"
                _hover={{ opacity: 0.9 }}
              >
                 Hire Me
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
