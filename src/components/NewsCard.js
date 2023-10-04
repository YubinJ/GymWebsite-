import { Box, Container, Flex, Spacer, Text, Image } from "@chakra-ui/react";

export default function NewsCard(props) {
  return (
    <>
      <Container m="5" p="2" border="2px solid #2596be" bg="gray.200">
        <Flex>
          <Box bg="rgb(90 237 137)" borderRadius="5px" p="1">
            {props.Time}
          </Box>
          <Spacer></Spacer>
          <Text fontSize="xl" as="b">
            {props.Title}
          </Text>
        </Flex>
        <Image src={props.PICURL}></Image>
        <Text>{props.Content}</Text>
      </Container>
    </>
  );
}
