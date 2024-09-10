import { Flex, Image, Text } from "@chakra-ui/react";
import instagramIcon from "@assets/images/home/footer/instagramIcon.png";
import mailIcon from "@assets/images/home/footer/mailIcon.png";
import phoneIcon from "@assets/images/home/footer/phoneIcon.png";
import whatsappIcon from "@assets/images/home/footer/whatsappIcon.png";
import { DefaultLink } from "@common/components/DefaultLink.jsx";

export const Footer = () => {
    return(
        <Flex
            mt={4}
            h={{ base: "20vh", md: "15vh" }}
            w="100%"
            bg="pink.100"
            flexDir="column"
            justify="center"
            align="center"
        >
            <Text 
                fontSize={{ base: "1.2rem", md: "2rem" }}
                fontWeight="bold" 
                color="highlight.600"
            >
                Fale com a gente
            </Text>
            <Flex
                justify="space-evenly"
                w="100%"
                h="80%"
                maxH="100%"
                wrap="wrap"
                gap={2}
            >
                <Flex
                    justify="center"
                    align="center"
                >
                    <Image boxSize={6} src={instagramIcon}/>
                    <DefaultLink 
                        direction="https://www.instagram.com/mairagasparinifestas" 
                        content="@mairagasparinifestas"
                        target="_blank"
                    />
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                >
                    <Image boxSize={6} src={whatsappIcon}/>
                    <DefaultLink 
                        direction="https://wa.me/551935492054?text=Ol%C3%A1%20Maira,%20tudo%20bem!" 
                        content="(19) 3549-2054" 
                        target="_blank"
                    />
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                >
                    <Image boxSize={6} src={phoneIcon}/>
                    <DefaultLink 
                        direction="tel:19993022365" 
                        content="(19) 99302-2365" 
                        target="_blank"
                    />
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                >
                    <Image boxSize={6} src={mailIcon}/>
                    <DefaultLink 
                        direction="mailto:mairagasparini@gmail.com" 
                        content="mairagasparini@gmail.com" 
                        target="_blank"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}