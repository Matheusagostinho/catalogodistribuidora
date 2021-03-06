import { Box, Container, Flex, SlideFade, Text, Image, Stack } from '@chakra-ui/react'
import * as prismic from "@prismicio/client";
import { RichText} from 'prismic-dom'

import type { GetStaticProps, NextPage } from 'next'

import styles from "../styles/styles.module.scss"
import { Header } from '../components/Header'
import { Card } from '../components/Card';


type Product = {
    title: string,
    category:string,
    amount:string,
    image:string
}
interface ProductsProps {
  products:Product[]
  categories: string[]
}

export default function Home ({products, categories}: ProductsProps) {
  
  return (
    <Box
    w="100%" mr={0} ml={0}
    >
    <Header/>
    <SlideFade in={true}offsetY='20px'>
     <Container maxW='container.xl' pt="5">
       <Text fontSize="24" fontWeight="black" textAlign="center" mb="4">
         Catálogo de Produtos
         
       </Text>
       <Stack  direction={['column','column']} spacing='10px'>
        {categories.map(category=>(
          <>
          <Text fontSize="20" fontWeight="black" textAlign="initial" >{category}</Text>
          <Stack  direction={['column','column',]} spacing='10px'>
          {products.map(product =>{
            if(product.category === category){
              return(
                  <Box as="a"
                    width="100%"
                    borderWidth="1px"
                    borderRadius="md"
                    overflow="hidden"
                    h="96px"
                    maxWidth="390px"
                    minWidth="370px"
                    w={['100%', '390px']}
                    display="flex"
                    justifyContent="row"
                    paddingY="5px"
                    borderColor="gray.300"
                    marginY={["5px", "5px", '0']}
                    className={styles.card}
                  >
                    <Flex
                    marginLeft="0.8rem"
                    borderRight="1px"
                    marginY="2px"
                    borderColor="gray.300"
                    alignItems="center"
                    justifyContent="center"
                    paddingRight="1rem"
                    w="8rem"
                  >
                    <Image
                      src={product.image}
                      alt={product.category}
                      maxHeight="5.5rem"
                      
                      alignItems="center"
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
            
          })}
          </Stack>
          </>
        ))}
       </Stack>
     </Container>
    </SlideFade>
    </Box>
  )
}


export const getStaticProps: GetStaticProps = async ()=>{
  const client = prismic.createClient("distribuidoraemporio", {accessToken: process.env.PRISMIC_ACCESS_TOKEN} );
  const response = await client.getAllByType("product");


  const fullCategories = response.map(product => {
    return product.data.category
    
  })

  const categories = fullCategories.filter((category, i) =>{
    return fullCategories.indexOf(category) === i
  })
  categories.sort()


  
  
  const products = response.map(product => {
    return {
      title:RichText.asText( product.data.title),
      category:product.data.category,
      amount:`R$ ${product.data.amount},00`,
      image:product.data.image.url

    }
  })

 
  
  return{
    props:{
      products,
      categories
    },
    revalidate: 60 * 60 * 1, // 24 hours 
  }

}
