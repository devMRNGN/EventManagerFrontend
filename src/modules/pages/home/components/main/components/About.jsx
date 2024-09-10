import { Image, Text, Flex, VStack } from "@chakra-ui/react";
import birthday from "@assets/images/home/birthday.svg";

export const About = () => {
    return (
        <Flex
            w="100%"
            h="90vh"
            display="flex"
            flexDir={{ base: "column-reverse", md: "row" }}
            justify={{ base: "center", sm: "flex-end", md: "center" }}
            align="center"
            gap={4}
            mb={{ base: "3rem", md: "1rem" }}
        >
            <Image 
                display={{ base: "none", sm: "block" }}
                src={birthday} 
                boxSize={{ base: "15em", sm: "20em", md: "25em" }} 
            />
            <VStack
                w={{ base: "85%", md: "40%", lg: "30%", xl: "25%" }} 
                display="flex" 
                justify="center"
                align="center"
                spacing={5}
            >
                <Text 
                    fontSize="1.6em" 
                    color="highlight.600" 
                    fontWeight="bold"
                    textAlign={{ base: "center", md: "left" }}
                >
                    Decoração de Festa Infantil
                </Text>
                <Text fontSize="1.2em" color="black" textAlign="justify" fontWeight="semibold">
                    Somos uma empresa especializada em decoração de festa infantil. Sempre
                    com o objetivo de proporcionar uma experiencia linda e surpreendente
                    para nossos clientes, trabalhamos com decoração de todos tamanhos, que
                    poderá ser aplicada em festas pequenas e delicadas até as festas
                    grandes e impactantes.
                </Text>
            </VStack>
        </Flex>
    );
};
