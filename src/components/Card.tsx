import { Box, Flex, Text, Image } from "@chakra-ui/react";

import styles from "../styles/styles.module.scss"
type Product = {
  title: string,
  category:string,
  amount:string,
  image:string
}

export function Card(product:Product){
  return(
    <Box as="a"
          width="100%"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          h="96px"
          maxWidth="390px"
          w={['100%', '390px']}
          display="flex"
          justifyContent="row"
          paddingY="5px"
          borderColor="gray.300"
          marginY="5px"
          className={styles.card}
        >
           <Flex
          marginLeft="0.8rem"
          borderRight="1px"
          marginY="2px"
          borderColor="gray.300"
          alignItems="center"
          justifyItems="center"
          paddingRight="1rem"
        >
          <Image
            src={product.image}
            w="3.9rem"
          ></Image>
        </Flex>
        <Flex
          flex="1"
          justifyContent="flex-start"
          ml="1rem"
          flexDirection="column"
          lineHeight="short"
          justifyItems="center"
          marginY="auto"
        >
          <Text fontWeight="500" fontSize="18">
            {product.title}
          </Text>
          
        </Flex>
        <Flex alignItems="center" justifyItems="center" marginRight="0.8rem">
          <Text  fontSize="18" fontWeight="bold" color="green.500">
              {product.amount}
          </Text>
        </Flex>
        </Box>
  )
}