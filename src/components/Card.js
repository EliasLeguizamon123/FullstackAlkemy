import {
		Box,
		Center,
		Text,
		Stack,
		Button,
		useColorModeValue,
		useToast
	} from '@chakra-ui/react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

export default function Card ({ ID, concept, amount, creationDate, isType, category}) {
		let type = isType === 1 ? 'Ingreso' : 'Egreso';
		const toast = useToast();
		let history = useHistory();

		const deleteForm = async  ID => {
				try {
					alert('Se eliminará el formulario seleccionado')
					await axios.delete(`https://whispering-forest-95291.herokuapp.com/${ ID }`)
					history.go(0)
					toast({
						title: "Éxito",
          				description: "Formulario eliminado exitosamente",
						status: "success",
						duration: 5000,
						isClosable: true,
					})
				}
			
			catch (err) {console.log(err)}
			}

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
							<Stack direction={'row'} align={'center'} justify={'center'} spacing={24} mt={10}>
									<Link to={`/edit/${ID}`} >
											<Button
												bg={'gray.400'}
												color={'white'}
												rounded={'xl'}
												_hover={{
													bg: 'cyan.100',
													color: 'black'
												}}
												>
												Editar 
											</Button>
									</Link>
									<Button
											bg={'gray.400'}
											color={'white'}
											rounded={'xl'}
											_hover={{
											bg: 'red.400',
											color: 'black'
											}}
											position="end"
											onClick={() => deleteForm(ID)}
											>
											Eliminar
									</Button>
							</Stack> 
					</Box>
				</Box>
			</Center>
			)
}