import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
export default function Card (form) {
    const { ID, concept, amount, creationDate, isType, category} = form;

    
    let type = isType === 1 ? 'Ingreso' : 'Egreso';

    return (
        <Center w="100%">
      <Box
        w="100%"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('cyan.100', 'cyan.900')}
            p={2}
            px={3}
            color={'gray.500'}
            rounded={'full'}>
            {type}
          </Text>
          <Stack direction={'column'} align={'center'} justify={'center'}>
            <Text fontSize={'4xl'} fontWeight={800}>
            {`$${amount}`}
            </Text>
            <Text fontSize={'2xl'} fontWeight={800}> Categoria: {category} </Text>
          </Stack>
        </Stack>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <Stack direction={'column'} align={'center'} justify={'center'} spacing={5}>
                <Text>{`Fecha de creación: ${creationDate}`}</Text>
                <Text>{`Concepto: ${concept}`}</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} justify={'center'} spacing={24}>
                <Link to={`/edit/${ID}`}>
                    <Button
                            mt={10}
                            bg={'gray.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                            bg: 'cyan.100',
                            color: 'gray.600'
                            }}
                            >
                            Editar 
                        </Button>
                </Link>
                <Link to={`/delete/${ID}`}>
                <Button
                    mt={10}
                    bg={'gray.400'}
                    color={'white'}
                    rounded={'xl'}
                    _hover={{
                    bg: 'cyan.100',
                    color: 'gray.600'
                    }}
                    position="end"
                    >
                    Eliminar
                </Button>
                </Link>
            </Stack> 
        </Box>
      </Box>
    </Center>
    )
}