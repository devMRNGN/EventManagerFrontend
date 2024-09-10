import { Flex, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ImageCard = ({ src, index }) => {
    
    return(
        <Flex 
            w="100%" 
            h={{ base: "500px", md: "250px", lg: "300px" }}
            boxShadow="lg"
            borderTop="0.5rem solid #9F7AEA"
            borderRadius="1rem"
            overflow="hidden"
            justify="center"
            align="flex-start"
            bg="rgba(255, 255, 255, 0.92)"
        >
            <Image
                src={src}
                alt={`Imagem ${index}`}
                objectFit="cover"
                w="99%"
                h="99%"
                borderRadius="0.5rem"
                cursor="pointer"
                _hover={{
                    w: "100%",
                    h: "100%"
                }}  
            />
        </Flex>
    )
}

ImageCard.propTypes = {
    src: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};