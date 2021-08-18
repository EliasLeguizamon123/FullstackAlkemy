import {SimpleGrid} from '@chakra-ui/react'
import Card from './Card';

const Home = (form) => {
    
    
    return (
        <SimpleGrid columns={{lg: 1, md: 1, sm: 1}} mt={4} spacingY={20} pt={10}>
            <Card key={form.ID} {...form}/>
        </SimpleGrid>
    )
}

export default Home
