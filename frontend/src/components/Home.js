import {SimpleGrid, Spinner, Box} from '@chakra-ui/react'
import Card from './Card';
import {useState, useEffect} from 'react'
import axios from 'axios';

const Home = (form) => {
    const [forms, setForms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchForms = async () => {
        try {
            const response = await axios
            .get('https://whispering-forest-95291.herokuapp.com')
            const data = await response.data;
            setForms(() => data);
            console.log(data);
            setIsLoading(false);
        } catch (err) {
            throw err;
        }
    };

    useEffect(() => {
        fetchForms();
    }, []);
    
    if (isLoading) {
        return (
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} h={'80vh'}>
                <Spinner color="teal" size="xl" emptyColor="gray.200" speed="0.8s"/>
            </Box>
        )
    }
    
    return (
        <SimpleGrid columns={{lg: 2, md: 1, sm: 1}} mt={4} spacing={10} pt={10}>
            {
                forms.map(form => (
                    <Card key={form.ID} {...form}/>
                ))
            }
        </SimpleGrid>
    )
}

export default Home
