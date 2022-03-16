import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, IconButton, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { useRef } from "react"




export const Header =  ()=>{

  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
return(
  <Container maxW='container.xxl' h="82px" bgColor="purple.600" alignItems="center" display="flex" justifyContent="space-between">
       <Box alignItems="center" display="flex">
       <Link href="/">
          <Image w={['40px', '50px']} src="/images/logo.png" alt="Empório" />  
        </Link>
        <Text color="white" fontWeight="bold" ml="2">Distribuidora Empório do Açaí</Text>
       </Box>
       <Box alignItems="center" display="flex">
     
      <IconButton
        colorScheme='yellow'
        aria-label='Menu'
        fontSize='20px'
        icon={!isOpen ? <HamburgerIcon /> : <CloseIcon fontSize="13px"/>}
        ref={btnRef && null} onClick={!isOpen ? onOpen : onClose}
        zIndex="popover"
      /> 
      <Modal
       closeOnOverlayClick={false}
        onClose={onClose}
        finalFocusRef={btnRef && null || undefined}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="full"
      >
        <ModalOverlay  mt="81px"/>
        <ModalContent mt="81px" bgColor="purple.600" border="0" borderRadius="0">
          
          <ModalBody color="white">
            <Flex  alignItems="center" flexDir="column"  mt="100px" h="100%" justifyContent="center">
            <Link href="/">
                <Box h="20px" fontWeight="bold" fontSize="20" cursor="pointer"> Catálogo</Box>
              </Link>
              <Link href="/">
               <Box h="20px" fontWeight="bold" fontSize="20" mt="20"  cursor="pointer"> Contato</Box>
              </Link>
            </Flex>
            
          </ModalBody>
          
        </ModalContent>
      </Modal>
      </Box>
       
       
        
        
     </Container>
)

}