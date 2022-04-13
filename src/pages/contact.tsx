import { Box, Container, SlideFade, Text, Image, Stack, Button } from '@chakra-ui/react'



import styles from "../styles/styles.module.scss"
import { Header } from '../components/Header'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';



export default function Contact() {
  const router = useRouter()

  function handleWhatsApp( number:string){
  
    const href ='https://api.whatsapp.com/send?phone='+number+'&text=Ol%C3%A1%20Gostaria%20de%20Fazer%20um%20pedido'
    router.replace(href, '_blank')
  }
  
  return (
    <Box
    w="100%" mr={0} ml={0}
    >
    <Header/>
    <SlideFade in={true}offsetY='20px'>
     <Container maxW='container.xl' pt="5">
       <Text fontSize="24" fontWeight="black" textAlign="center" mb="4">
        Contatos
       </Text>

         <Stack  direction={['column','column', "row"]} spacing='10px'>
          <Box><Text fontSize="20" fontWeight="normal" textAlign="initial"  ml="5">Unidade Várzea da Palma/MG</Text>
           <Box
           width="100%"
           borderWidth="1px"
           borderRadius="md"
           overflow="hidden"
           
           maxWidth="390px"
           w={['100%', '390px']}
           display="flex"
           flexDir="column"
           justifyContent="row"
           padding="15px"
           borderColor="gray.300"
           bgColor="gray.50"
           marginY={["5px", "5px", '0']}
           className={styles.card}         
            >
               <Text fontWeight="bold" fontSize="20" color="purple.600">
                  Distribuidora Empório do Açaí
             </Text>
             <Text fontWeight="normal" fontSize="20">
             R. Dr. Antônio Gomes Pinto Coelho, nº 800, Bairro Princesa
             </Text>
             <Box  justifyContent="right">
             <Button colorScheme="whatsapp"  
              float="right" rightIcon={<ArrowForwardIcon />}  
              onClick={e => {e.preventDefault(); handleWhatsApp('5538988740316')}}>WhatsApp</Button>
             </Box>
             
           </Box>
           </Box>
           <Box><Text fontSize="20" fontWeight="normal" textAlign="initial"  ml="5">Unidade Pirapora/MG</Text>
           <Box
           width="100%"
           borderWidth="1px"
           borderRadius="md"
           overflow="hidden"
           
           maxWidth="390px"
           w={['100%', '390px']}
           display="flex"
           flexDir="column"
           justifyContent="row"
           padding="15px"
           borderColor="gray.300"
           bgColor="gray.50"
           marginY={["5px", "5px", '0']}
           className={styles.card}         
            >
               <Text fontWeight="bold" fontSize="20" color="purple.600">
                  Distribuidora Empório do Açaí
             </Text>
             <Text fontWeight="normal" fontSize="20">
             R. Dr. Armando Braga, nº 1127, Bairro Santos Dumont
             </Text>
             <Box  justifyContent="right">
             <Button 
              colorScheme="whatsapp"  
              float="right" 
              rightIcon={<ArrowForwardIcon />} 
              onClick={e => {e.preventDefault(); handleWhatsApp('5538988626555')}}
              >WhatsApp</Button>
             </Box>
             
           </Box>
           </Box>
         </Stack>
        
  
     </Container>
    </SlideFade>
    </Box>
  )
}



