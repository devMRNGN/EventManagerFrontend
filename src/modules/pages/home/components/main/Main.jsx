import { Flex } from "@chakra-ui/react";
import { About } from "@pages/home/components/main/components/About.jsx";
import { Galery } from "@pages/home/components/main/components/Galery.jsx";
import { Packages } from "@pages/home/components/main/components/Packages.jsx";

export const Main = () => {
    return(
        <Flex
            w="100%"
            flexDir="column"
            justifyContent="flex-start"
            alignItems="center"
            mt={{ base: "5em", lg: "80px" }}
            gap={{ md: "1rem", lg: "1.5rem" }}
        >
            <About/>
            <Packages/>
            <Galery/>
        </Flex>
    );
}