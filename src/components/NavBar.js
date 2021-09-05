import {HStack, Button, Text} from '@chakra-ui/react';
import { AddIcon, } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
        <HStack borderBottom="1px" borderColor="gray.100" p={2} spacing={2}  justify="center" boxShadow="md">
            <Link to='/new'>
                <Button>
                    <AddIcon /> 
                    <Text>
                        Agregar Formulario
                    </Text>
                </Button>
            </Link>
        </HStack>
    )
};