import { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      position="fixed"
      bottom={{ base: "6", md: "8" }}
      right={{ base: "4", md: "8" }}
      zIndex="9999"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(20px)"}
      transition="opacity 0.35s ease, transform 0.35s ease"
      pointerEvents={isVisible ? "auto" : "none"}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaArrowUp size="16" />}
        onClick={scrollToTop}
        size="md"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        color="whiteAlpha.800"
        border="1px solid"
        borderColor="whiteAlpha.300"
        backdropFilter="blur(10px)"
        boxShadow="0 4px 24px rgba(0,0,0,0.4)"
        _hover={{
          bg: "rgba(255, 255, 255, 0.2)",
          color: "white",
          borderColor: "whiteAlpha.500",
          transform: "translateY(-3px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}
        _active={{
          transform: "translateY(0px)",
        }}
        transition="all 0.2s ease"
      />
    </Box>
  );
};
