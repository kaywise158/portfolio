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
  { icon: FaGithub, href: "https://github.com/abdulazeez9", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abdulazeez-muritador",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/Asadoye5050",
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
      py="3"
      align="center"
      transition="all 0.3s"
      _hover={{ transform: "translateX(4px)" }}
    >
      <Icon as={info.icon} boxSize="5" color="whiteAlpha.700" flexShrink={0} />
      <Text
        color="whiteAlpha.800"
        fontSize={{ base: "sm", md: "md" }}
        wordBreak="break-all"
      >
        {info.value}
      </Text>
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

// Shared input styles matching the image: pill/rounded, dark bg, subtle border
const inputStyles = {
  size: "lg" as const,
  bg: "rgba(255, 255, 255, 0.07)",
  borderColor: "rgba(255, 255, 255, 0.15)",
  borderWidth: "1px",
  borderRadius: "full",
  color: "white",
  px: "6",
  _placeholder: { color: "whiteAlpha.400", fontSize: "sm" },
  _hover: {
    borderColor: "rgba(255, 255, 255, 0.3)",
    bg: "rgba(255,255,255,0.09)",
  },
  _focus: {
    borderColor: "rgba(130, 100, 255, 0.6)",
    boxShadow: "0 0 0 1px rgba(130,100,255,0.4)",
    bg: "rgba(255,255,255,0.09)",
  },
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <Box
      py="20"
      id="contact"
      bg="linear-gradient(135deg, #0a0f2c 0%, #0d1340 40%, #12103a 100%)"
      minH="100vh"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background glow blobs matching the dark navy aesthetic */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(80, 40, 180, 0.15) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(220, 50, 100, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Section Header */}
        <Stack spacing="4" textAlign="center" mb="16" data-aos="fade-up">
          <Heading as="h2" size="2xl" color="white">
            Get In Touch
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing="16"
          alignItems="center"
        >
          {/* Left Side — matches image: plain text info, no cards */}
          <Stack spacing="8" data-aos="fade-right">
            <Box>
              <Heading size="xl" color="white" mb="2" fontWeight="bold">
                Get in touch today
              </Heading>
              <Text color="whiteAlpha.600" fontSize="md" maxW="sm">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </Text>
            </Box>

            <Stack spacing="1">
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <ContactInfoCard info={info} />
                </Box>
              ))}
            </Stack>

            {/* Social Links */}
            <Box data-aos="fade-right" data-aos-delay="300">
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

          {/* Right Side — Form card matching the image */}
          <Box
            bg="rgba(255, 255, 255, 0.04)"
            p={{ base: "6", md: "8" }}
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(20px)"
            boxShadow="0 8px 60px rgba(0,0,0,0.4)"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="5">
                {/* Row 1: Name + Email */}
                <SimpleGrid columns={2} spacing="4">
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.700" fontSize="sm" mb="2">
                      Name
                    </FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Carter"
                      {...inputStyles}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.700" fontSize="sm" mb="2">
                      Email
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      {...inputStyles}
                    />
                  </FormControl>
                </SimpleGrid>

                {/* Row 2: Phone + Subject (mapped to "Company" slot in image) */}
                <SimpleGrid columns={2} spacing="4">
                  <FormControl>
                    <FormLabel color="whiteAlpha.700" fontSize="sm" mb="2">
                      Phone
                    </FormLabel>
                    <Input
                      name="phone"
                      placeholder="(123) 456 - 789"
                      {...inputStyles}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.700" fontSize="sm" mb="2">
                      Subject
                    </FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      {...inputStyles}
                    />
                  </FormControl>
                </SimpleGrid>

                {/* Message */}
                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.700" fontSize="sm" mb="2">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please type your message here..."
                    rows={5}
                    size="lg"
                    bg="rgba(255, 255, 255, 0.07)"
                    borderColor="rgba(255, 255, 255, 0.15)"
                    borderWidth="1px"
                    borderRadius="2xl"
                    color="white"
                    px="6"
                    py="4"
                    resize="none"
                    _placeholder={{ color: "whiteAlpha.400", fontSize: "sm" }}
                    _hover={{ borderColor: "rgba(255,255,255,0.3)" }}
                    _focus={{
                      borderColor: "rgba(130,100,255,0.6)",
                      boxShadow: "0 0 0 1px rgba(130,100,255,0.4)",
                    }}
                  />
                </FormControl>

                {/* Gradient Send button matching the image */}
                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  h="14"
                  borderRadius="full"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  background="linear-gradient(90deg, #4f8ef7 0%, #c0397a 100%)"
                  color="white"
                  fontWeight="semibold"
                  fontSize="md"
                  border="none"
                  _hover={{
                    background:
                      "linear-gradient(90deg, #3a7ae0 0%, #a82e6a 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 30px rgba(100, 80, 220, 0.4)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.2s"
                >
                  Send message
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
              size="lg"
              w="full"
              borderRadius="full"
              onClick={onClose}
              background="linear-gradient(90deg, #4f8ef7 0%, #c0397a 100%)"
              color="white"
              _hover={{
                background: "linear-gradient(90deg, #3a7ae0 0%, #a82e6a 100%)",
                transform: "translateY(-2px)",
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
