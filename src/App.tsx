
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react";
import { HomePage } from "./components/pages/HomePage";
import Header from './components/common/Header';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header title="Справочник"/>
    <HomePage/>
  </ChakraProvider>
);

