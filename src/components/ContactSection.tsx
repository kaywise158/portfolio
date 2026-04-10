import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  HStack,
  VStack,
  Link,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
} from "react-icons/fa";
import { type IconType } from "react-icons";
import { bgGradient } from "../App";

interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "abdulazeezmuritador9@gmail.com",
    href: "mailto:abdulazeezmuritador9@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+(234)814-898-5591",
    href: "tel:+2348148985591",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Lagos, Nigeria",
  },
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
    href: "https://twitter.com/Az",
    label: "Twitter",
  },
];

interface ContactInfoCardProps {
  info: ContactInfo;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info }) => {
  const content = (
    <HStack
      spacing="4"
      p="6"
      bg="rgba(255, 255, 255, 0.05)"
      borderWidth="1px"
      borderColor="whiteAlpha.150"
      borderRadius="xl"
      transition="all 0.3s"
      backdropFilter="blur(10px)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "whiteAlpha.400",
        bg: "rgba(255, 255, 255, 0.08)",
      }}
      align="flex-start"
    >
      <Box
        w="12"
        h="12"
        minW="12"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        bg="whiteAlpha.100"
        color="whiteAlpha.700"
      >
        <Icon as={info.icon} boxSize="6" />
      </Box>
      <VStack align="start" spacing="1" minW="0" flex="1">
        <Text fontSize="sm" color="whiteAlpha.600" fontWeight="medium">
          {info.label}
        </Text>
        <Text
          fontWeight="semibold"
          color="white"
          wordBreak="break-all"
          overflowWrap="anywhere"
          fontSize={{ base: "sm", md: "md" }}
        >
          {info.value}
        </Text>
      </VStack>
    </HStack>
  );

  return info.href ? (
    <Link href={info.href} _hover={{ textDecoration: "none" }}>
      {content}
    </Link>
  ) : (
    content
  );
};

export const ContactSection: React.FC = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitterName, setSubmitterName] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitterName(formData.name);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      onOpen();
    } catch {
      toast({
        title: "Error sending message",
        description:
          "Something went wrong. Please try again or email me directly at abdulazeezmuritador9@gmail.com",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box py="20" bgGradient={bgGradient} id="contact">
      <Container maxW="container.xl">
        <Stack spacing="4" textAlign="center" mb="16">
          <Heading as="h2" size="2xl" color="white">
            Get In Touch
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="12">
          {/* Left Side - Contact Info */}
          <Stack spacing="8">
            <Box>
              <Heading size="lg" color="white" mb="6">
                Contact Information
              </Heading>
              <Stack spacing="4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </Stack>
            </Box>

            {/* Social Links */}
            <Box>
              <Heading size="md" color="white" mb="4">
                Follow Me
              </Heading>
              <HStack spacing="4">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} isExternal>
                    <Box
                      w="12"
                      h="12"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="lg"
                      bg="whiteAlpha.100"
                      color="whiteAlpha.700"
                      transition="all 0.3s"
                      _hover={{
                        bg: "whiteAlpha.200",
                        color: "white",
                        transform: "translateY(-4px)",
                      }}
                    >
                      <Icon as={social.icon} boxSize="5" />
                    </Box>
                  </Link>
                ))}
              </HStack>
            </Box>
          </Stack>

          {/* Right Side - Contact Form */}
          <Box
            bg="rgba(255, 255, 255, 0.05)"
            p="8"
            borderRadius="xl"
            boxShadow="lg"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.150"
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="6">
                <FormControl isRequired>
                  <FormLabel color="white">Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    size="lg"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="whiteAlpha.150"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{
                      borderColor: "whiteAlpha.600",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="white">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    size="lg"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="whiteAlpha.150"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{
                      borderColor: "whiteAlpha.600",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="white">Subject</FormLabel>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    size="lg"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="whiteAlpha.150"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{
                      borderColor: "whiteAlpha.600",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="white">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    size="lg"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="whiteAlpha.150"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{
                      borderColor: "whiteAlpha.600",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                    }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="whiteAlpha"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Thank You Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          bg="rgba(0, 0, 0, 0.95)"
          borderWidth="2px"
          borderColor="whiteAlpha.400"
          borderRadius="2xl"
          p="4"
        >
          <ModalCloseButton color="white" />
          <ModalHeader>
            <VStack spacing="4" pt="4">
              <Box
                w="20"
                h="20"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                bg="whiteAlpha.100"
                border="3px solid"
                borderColor="whiteAlpha.400"
              >
                <Icon as={FaCheckCircle} boxSize="10" color="whiteAlpha.800" />
              </Box>
              <Heading size="xl" color="white" textAlign="center">
                Message Sent Successfully!
              </Heading>
            </VStack>
          </ModalHeader>
          <ModalBody>
            <VStack spacing="4" py="4">
              <Text fontSize="lg" color="gray.300" textAlign="center">
                Thank you for reaching out, {submitterName}!
              </Text>
              <Text color="gray.400" textAlign="center">
                I've received your message and will get back to you as soon as
                possible. Usually within 24-48 hours.
              </Text>
              <Box
                w="full"
                p="4"
                bg="whiteAlpha.50"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="whiteAlpha.150"
              >
                <Text fontSize="sm" color="whiteAlpha.700" textAlign="center">
                  In the meantime, feel free to check out my projects or connect
                  with me on social media!
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="whiteAlpha"
              size="lg"
              w="full"
              onClick={onClose}
              _hover={{ transform: "translateY(-2px)" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
