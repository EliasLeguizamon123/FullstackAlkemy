import { useFormik } from 'formik';
import {
    Box, 
    Stack, 
    Button, 
    FormControl, 
    FormLabel, 
    Input, 
    useColorModeValue, 
    Select, 
    Text,
} from '@chakra-ui/react';
import {CheckIcon, CloseIcon} from '@chakra-ui/icons';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import EditForm from '../pages/EditForm';

export default function MyForm ({ ID, concept, amount,  isType, category}) {
    let history = useHistory();
    // let {id} = useParams();

    const handdleSendForm = async (values) => {
        const response = await axios.post('https://whispering-forest-95291.herokuapp.com/new', values);
        const data = await response.data;
        alert('Formulario guardado correctamente')
        console.log(data);
        history.push(`/`);
    }

    const formik = useFormik({
        initialValues: {
            concept: concept ? concept : "",
            amount: amount ? amount : "",
            category: category ? category : "",
            isType: isType ? isType : "",
        },
        onSubmit : values => {
            // handdleSendForm(values)
            EditForm(values);
            
        },
    });

return(
    <form onSubmit={formik.handleSubmit}>
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
                <FormControl mt={2} isRequired>
                    <FormLabel>
                        Concepto
                    </FormLabel>
                    <Input
                    name="concept"
                    type="text"
                    value={formik.values.concept}  
                    onChange={formik.handleChange}                                  
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>
                    Monto
                    </FormLabel>
                    <Input
                    name="amount"
                    type="number"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>
                    Categoria
                    </FormLabel>
                    <Input
                    name="category"
                    type="text"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    />
                </FormControl>
                    <FormControl isRequired>
                    <FormLabel>
                        Tipo de operación
                    </FormLabel>
                    <Select name="isType" placeholder="Seleccione el tipo de operación" onChange={formik.handleChange} value={formik.values.isType}>
                        <option value='1'>Ingreso</option>
                        <option value='2'>Egreso</option>
                    </Select>
                </FormControl>
                <Stack direction="row" p={4}>
                    <Button 
                    type="submit" 
                    bg={'gray.400'} 
                    color={'white'} 
                    rounded={'xl'} 
                    _hover={{bg: 'cyan.100', color: 'gray.600'}}
                    >
                        <CheckIcon />
                        <Text>Guardar</Text>
                    </Button>
                    <Link to='/'>
                        <Button 
                        bg={'gray.400'} 
                        color={'white'} 
                        rounded={'xl'} 
                        _hover={{bg: 'cyan.100', color: 'gray.600'}}
                        >
                            <CloseIcon />
                            <Text>Cancelar</Text>
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    </form>
    )
}