import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Link,
  Flex,
  Avatar,
  Icon,
} from "@chakra-ui/react";

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

import { yearsOfExperience } from "../utils/experience";
import scrollTo from "../utils/scrollTo";

export const HeroSection: React.FC = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="#08142B"
      id="home"
    >
      {/* Background Glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="700px"
        h="700px"
        bg="radial-gradient(circle, rgba(66,153,225,0.12) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)"
        filter="blur(80px)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 16, lg: 10 }}
        >
          {/* LEFT SIDE */}
          <Stack
            flex="1"
            spacing="6"
            maxW={{ base: "100%", lg: "580px" }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Heading
              color="white"
              fontWeight="700"
              lineHeight="1"
              fontSize={{ base: "4rem", md: "5rem", lg: "6rem" }}
              letterSpacing="-2px"
            >
              Hi, I'm
            </Heading>

            <Heading
              mt="-2"
              fontWeight="800"
              lineHeight="1"
              letterSpacing="-2px"
              fontSize={{ base: "3.2rem", md: "4.5rem", lg: "5.5rem" }}
              bgGradient="linear(to-r, #3B82F6, #A855F7, #EF4444)"
              bgClip="text"
            >
              Abdulazeez
              <br />
              Muritador
            </Heading>

            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "md", md: "xl" }}
              lineHeight="1.8"
              maxW="520px"
            >
              {yearsOfExperience}+ years building scalable full-stack
              applications using React, Node.js, Express, MongoDB, Java, and
              Spring Boot. I focus on clean architecture, high performance, and
              seamless user experiences.
            </Text>

            {/* BUTTONS */}
            <HStack
              spacing="5"
              pt="4"
              flexWrap="wrap"
              align={{ base: "stretch", sm: "center" }}
            >
              <Button
                onClick={() => scrollTo("projects")}
                size="lg"
                px="10"
                h="60px"
                borderRadius="full"
                fontWeight="700"
                color="white"
                bgGradient="linear(to-r, #3B82F6, #EF4444)"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(59,130,246,0.35)",
                }}
                transition="all 0.3s ease"
              >
                View Projects
              </Button>

              <Button
                as={Link}
                href="https://wa.me/2348148985591?text=Hello%20I%20would%20like%20to%20work%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                h="60px"
                px="10"
                borderRadius="full"
                variant="outline"
                borderColor="#2563EB"
                color="#3B82F6"
                borderWidth="2px"
                rightIcon={<BsArrowUpRight />}
                _hover={{
                  textDecoration: "none",
                  bg: "rgba(59,130,246,0.08)",
                  transform: "translateY(-3px)",
                }}
                transition="all 0.3s ease"
              >
                Let&apos;s Collaborate
              </Button>
            </HStack>
          </Stack>

          {/* RIGHT SIDE */}
          <Flex
            flex="1"
            justify="center"
            align="center"
            position="relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Box
              position="relative"
              w={{ base: "280px", md: "450px" }}
              h={{ base: "280px", md: "450px" }}
            >
              {/* OUTER GLOW */}
              <Box
                position="absolute"
                inset="0"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(59,130,246,0.25), rgba(236,72,153,0.08), transparent)"
                filter="blur(30px)"
                transform="scale(1.15)"
              />

              {/* PROFILE IMAGE */}
              <Box
                position="relative"
                w="100%"
                h="100%"
                borderRadius="full"
                overflow="hidden"
                bg="black"
                boxShadow="0 0 80px rgba(59,130,246,0.2)"
              >
                <Avatar
                  src="/my-profile-image.webp"
                  name="Abdulazeez"
                  w="100%"
                  h="100%"
                  borderRadius="full"
                  sx={{
                    "& img": {
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      mixBlendMode: "screen",
                    },
                  }}
                />
              </Box>

              {/* FLOATING ICONS */}
              {[
                {
                  icon: FaReact,
                  top: "5%",
                  right: "-2%",
                },
                {
                  icon: FaNodeJs,
                  top: "50%",
                  right: "-10%",
                },
                {
                  icon: FaJsSquare,
                  top: "45%",
                  left: "-10%",
                },
                {
                  icon: FaCss3Alt,
                  bottom: "0%",
                  left: "10%",
                },
                {
                  icon: FaHtml5,
                  bottom: "-2%",
                  right: "5%",
                },
                {
                  icon: SiExpress,
                  top: "10%",
                  left: "0%",
                },
                {
                  icon: SiMongodb,
                  bottom: "15%",
                  left: "-5%",
                },
              ].map((item, index) => (
                <Flex
                  key={index}
                  position="absolute"
                  top={item.top}
                  bottom={item.bottom}
                  left={item.left}
                  right={item.right}
                  w={{ base: "52px", md: "62px" }}
                  h={{ base: "52px", md: "62px" }}
                  borderRadius="full"
                  bg="rgba(59,130,246,0.12)"
                  border="1px solid rgba(59,130,246,0.15)"
                  backdropFilter="blur(10px)"
                  align="center"
                  justify="center"
                  boxShadow="0 0 20px rgba(59,130,246,0.12)"
                  animation={`float ${3 + index * 0.3}s ease-in-out infinite`}
                >
                  <Icon
                    as={item.icon}
                    boxSize={{ base: 6, md: 7 }}
                    color="#3B82F6"
                  />
                </Flex>
              ))}
            </Box>
          </Flex>
        </Flex>
      </Container>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </Box>
  );
};
