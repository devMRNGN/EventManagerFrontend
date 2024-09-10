import { useEffect, useState } from 'react';
import {
    Grid,
    GridItem,
    Heading,
    VStack,
} from "@chakra-ui/react";
import { getPartyImages } from "@pages/home/utils/getPartyImages.js";
import { ImageCard } from "@pages/home/components/main/components/ImageCard.jsx";
import { Swiper } from "@common/components/Swiper.jsx";

export const Galery = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const images = await getPartyImages();
            setImageList(images);
        };

        fetchImages();
    }, []);

    return (
        <VStack spacing={4} w="100%">
            <Heading color="primary.500">Galeria</Heading>

            {/* Desktop or Tablets (DefaultGalery) */}
            <Grid
                display={{ base: "none", md: "grid" }}
                templateColumns={{ md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
                gap={4}
                w="100%"
                maxW="95%"
                p={{ md: 2 }}
                mx="auto"
            >
                {imageList.map((src, index) => (
                    <GridItem key={`image${index}`}>
                        <ImageCard src={src} index={index} />
                    </GridItem>
                ))}
            </Grid>

            {/* Mobile Galery Swiper */}
            <Swiper 
                type="image" 
                elements={imageList}
                showInDesktop={false}
            />
        </VStack>
    );
};