import { Flex } from "@chakra-ui/react";
import { Header } from "@pages/home/components/Header.jsx";
import { Main } from "@pages/home/components/main/Main.jsx";
import { Footer } from "@pages/home/components/Footer.jsx";

export const Home = () => {
    return(
        <Flex 
            w="100%"
            flexDir="column"
            justifyContent="flex-start"
            alignItems="center"
            overflow="auto"
        >
            <Header/>
            <Main/>
            <Footer/>
        </Flex>
    )
}