import { Box, Container, Stat, StatLabel, StatNumber, StatGroup, VStack, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Business Dashboard
        </Heading>
        <IconContext.Provider value={{ size: "3em" }}>
          <StatGroup>
            <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200">
              <FaShoppingCart />
              <StatLabel>Sales</StatLabel>
              <StatNumber>320</StatNumber>
            </Stat>
            <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200">
              <FaDollarSign />
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$25,400</StatNumber>
            </Stat>
            <Stat as={Box} p={5} shadow="md" border="1px" borderColor="gray.200">
              <FaUsers />
              <StatLabel>New Customers</StatLabel>
              <StatNumber>85</StatNumber>
            </Stat>
          </StatGroup>
        </IconContext.Provider>
      </VStack>
    </Container>
  );
};

export default Index;
