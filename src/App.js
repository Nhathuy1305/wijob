import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { routeActions, routeSelect } from './slices/routeSlice';
import { authActions, authSelect, userSelect } from './slices/authSlice';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelect);

  React.useEffect(() => {
    const updateUser = onAuthStateChanged(auth, currentUser => {
      dispatch(authActions.setUser(currentUser));
    });
    return () => {
      updateUser();
    };
  }, []);

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        {/* {user && <Text>{user.displayName}</Text>} */}
        <SignIn />
      </Box>
    </>
  );
}
