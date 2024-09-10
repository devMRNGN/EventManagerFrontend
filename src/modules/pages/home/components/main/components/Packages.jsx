import { Heading, Text, Flex, VStack } from "@chakra-ui/react"
import { Swiper } from "@common/components/Swiper.jsx";
import { PackageCard } from "@pages/home/components/main/components/PackageCard.jsx";
import { useState, useEffect } from "react";
import { getPartySizeImages } from "@pages/home/utils/getPartyImages.js";
import { IMAGE_SIZE_DETAILS } from "@pages/home/utils/imageSizeDetails.js";

export const Packages = () => {
    const [elementList, setElementList] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const images = await getPartySizeImages();
    
            const elements = images.map((image, index) => {
                const imageName = image.split("/").pop();
                const { title, description, items } = IMAGE_SIZE_DETAILS[imageName] || {};
    
                return (
                    <PackageCard
                        key={`${image + index}`}
                        image={image}
                        title={title || ""}
                        description={description || ""}
                        items={items}
                    />
                );
            });
    
            setElementList(elements);
        };
    
        fetchImages();
    }, []);

    return(
        <Flex
            w="100%"
            h={{ base: "130vh", md: "105vh", lg: "100vh" }}
            flexDir={{ base: "column", lg: "row" }}
            justify="center"
            align="center"
            gap={{ base: "1rem", lg: "6.5rem" }}
            bg="pink.100"
        >
            <VStack
                w={{ base: "90%", lg: "30%" }}
                spacing={3}
            >
                <Heading color="primary.500">Pacotes</Heading>
                <Text 
                    color="gray.900" 
                    textAlign="justify"
                    fontWeight="semibold"
                    fontSize={{ base: "1rem", lg: "1.2rem" }}
                >
                    Contrate sua decoração de acordo com o tamanho e os itens que compoem o cenário, 
                    o TEMA é de sua livre escolha e não influencia no custo. Atualmente possuimos 
                    3 formatos de contratação de decoração, dois deles (Pequeno e Médio) possuem estrutura, 
                    tamanho e preço fixo e o pacote personalizado permite a montagem de uma decoração totalmente 
                    personalizada para sua festa.
                </Text>
            </VStack>
            <Flex
                w={{ base: "100%", lg: "30%" }}
                justify="center"
                align="center"
            >
                <Swiper
                    type="card"
                    elements={elementList}
                    showInDesktop={true}
                />
            </Flex>
        </Flex>
    )
}