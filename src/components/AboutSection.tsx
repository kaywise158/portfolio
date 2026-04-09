import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  VStack,
  Flex,
} from '@chakra-ui/react';

import {
  skillCategories,
  skills,
  type Skill,
  type SkillCategory,
} from '../utils/Skills';
import { bgGradient } from '../App';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Box
      p='6'
      bg='rgba(255, 255, 255, 0.05)'
      borderWidth='1px'
      borderColor='whiteAlpha.150'
      borderRadius='xl'
      transition='all 0.3s'
      backdropFilter='blur(10px)'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: category.color,
        bg: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <VStack spacing='4' align='start'>
        <Flex
          w='12'
          h='12'
          align='center'
          justify='center'
          borderRadius='lg'
          bg={'whiteAlpha.100'}
        >
          <Icon as={category.icon} boxSize='6' color={category.color} />
        </Flex>
        <Heading size='md' color='white'>
          {category.title}
        </Heading>
        <Text color='gray.300' fontSize='sm'>
          {category.description}
        </Text>
      </VStack>
    </Box>
  );
};

interface SkillIconCardProps {
  skill: Skill;
}

const SkillIconCard: React.FC<SkillIconCardProps> = ({ skill }) => {
  return (
    <Box
      p='6'
      bg='rgba(255, 255, 255, 0.05)'
      borderWidth='1px'
      borderColor='whiteAlpha.150'
      borderRadius='lg'
      transition='all 0.3s'
      backdropFilter='blur(10px)'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        borderColor: skill.color,
        bg: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      <VStack spacing='3'>
        <Flex
          w='16'
          h='16'
          align='center'
          justify='center'
          borderRadius='lg'
          bg='whiteAlpha.100'
          transition='all 0.3s'
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Icon as={skill.icon} boxSize='8' color={skill.color} />
        </Flex>
        <Text
          fontWeight='medium'
          color='white'
          fontSize='sm'
          textAlign='center'
        >
          {skill.name}
        </Text>
      </VStack>
    </Box>
  );
};

export const AboutSection: React.FC = () => {
 

  return (
    <Box py='20' bgGradient={bgGradient} id='about'>
      <Container maxW='container.xl'>
        {/* Section Header */}
        <Stack spacing='4' textAlign='center' mb='16'>
          <Heading as='h2' size='2xl' color='white'>
            About Me
          </Heading>
          <Text fontSize='lg' color='gray.300' maxW='3xl' mx='auto'>
            I'm a passionate software engineer with expertise in building
            scalable web applications. I love solving complex problems and
            creating seamless user experiences.
          </Text>
        </Stack>

        {/* About Content */}
        <Stack spacing='16'>
          {/* Bio Section */}
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8' mb='12'>
              <Stack spacing='4'>
                <Heading size='lg' color='white'>
                  My Journey
                </Heading>
                <Text color='gray.300' lineHeight='tall'>
                  I began my tech journey by building core frontend foundations
                  and contributing to real-world projects that strengthened my
                  skills in modern web development. Over the past 3+ years, I’ve
                  grown into a full-stack developer, building production-ready
                  applications including e-commerce platforms, real-time
                  systems, and enterprise dashboards.
                </Text>
                <Text color='gray.300' lineHeight='tall'>
                  My background in Physics and Telecommunications combined with
                  my self-taught journey in full-stack development has given me
                  strong analytical and problem-solving skills. I believe in
                  writing clean, maintainable code and continuously learning to
                  deliver better solutions.
                </Text>
              </Stack>

              <Stack spacing='4'>
                <Heading size='lg' color='white'>
                  What I Do
                </Heading>
                <Text color='gray.300' lineHeight='tall'>
                  I specialize in modern JavaScript/TypeScript development with
                  Next.js, React, and Node.js. I work with both SQL (PostgreSQL)
                  and NoSQL (MongoDB) databases, implement secure authentication
                  systems, and integrate payment gateways and real-time
                  features.
                </Text>
                <Text color='gray.300' lineHeight='tall'>
                  Currently expanding my skill set into Java and Spring Boot to
                  contribute to enterprise-level backend systems. When I'm not
                  coding, I'm learning new technologies and exploring ways to
                  write better, more efficient code.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>

          {/* Skill Categories */}
          <Box>
            <Heading size='lg' color='white' mb='8' textAlign='center'>
              What I'm Offering
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing='6'>
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Technical Skills */}
          <Box>
            <Heading size='lg' color='white' mb='8' textAlign='center'>
              Technical Skills
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing='6'>
              {skills.map((skill, index) => (
                <SkillIconCard key={index} skill={skill} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
