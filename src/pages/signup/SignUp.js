import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center,
  Divider,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useMediaQuery,
} from '@chakra-ui/react';
import { GoogleIcon } from '../../assets/AssetUtil';
import GoogleAuth from '../../utils/google_auth';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function SignUp() {
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  const handleGoogleSignIn = async () => {
    try {
      await GoogleAuth.signIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await GoogleAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex minH="100vh" align="center" justify="center" mx="1rem">
        <Stack mx="1rem" px={6} w="70vw" minW="24rem" maxW="30rem">
          <Box
            rounded="1rem"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={
              isMobile
                ? ''
                : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
            }
            p={8}
          >
            <Stack spacing={4}>
              {/* google SignIn button */}
              <Flex
                bg="light.googleBtn"
                color="white"
                p="1px"
                rounded="full"
                cursor="pointer"
                onClick={handleGoogleSignIn}
              >
                <Box bg="white" rounded="full" minW="38px" minH="38px">
                  <Center w="full" h="full">
                    <Image w="20px" h="20px" src={GoogleIcon} />
                  </Center>
                </Box>
                <Box w="full">
                  <Center w="full" h="full">
                    <Text fontWeight="600">Sign in with Google</Text>
                  </Center>
                </Box>
              </Flex>

              <Flex align="center" gap="0.5rem">
                <Divider borderColor="black" />
                <Text>or</Text>
                <Divider borderColor="black" />
              </Flex>

              <Stack spacing={4}>
                <FormControl id="first-name">
                  <Input type="text" placeholder="First name" />
                </FormControl>
                <FormControl id="last-name">
                  <Input type="text" placeholder="Last name" />
                </FormControl>
                <FormControl id="email">
                  <Input type="email" placeholder="Email" />
                </FormControl>
                <FormControl id="password">
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        bg="white"
                        _hover={{ bg: 'white' }}
                        _active={{ bg: 'white' }}
                        onClick={handleClick}
                      >
                        {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Checkbox alignItems="start">
                  <Text textAlign="start" fontSize="0.8rem">
                    Yes, I understand and agree to the{' '}
                    <Link>WiJob Terms of Service</Link>, including the{' '}
                    <Link>User Agreement</Link> and <Link>Privacy Policy</Link>.
                  </Text>
                </Checkbox>
              </Stack>

              <Stack>
                {/* email SignIn button */}
                <Button
                  bg="black"
                  color="white"
                  _hover={{ backgroundColor: 'gray.700' }}
                >
                  <Text>Create my account</Text>
                </Button>
              </Stack>
            </Stack>

            <Flex align="center" mt="2rem" mb="1rem">
              <Divider borderColor="black" />
              <Text minW="14rem">Already have an WiJob account ?</Text>
              <Divider borderColor="black" />
            </Flex>

            {/* sign up button */}
            <Button
              _hover={{ backgroundColor: 'gray.100' }}
              bg="white"
              borderWidth="1px"
              borderColor="black"
            >
              <Text>Log in</Text>
            </Button>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
