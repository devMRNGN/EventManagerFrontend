import { useLoading } from "@common/hooks/Loading/useLoading";
import { Spinner, Flex, Text } from "@chakra-ui/react";

export function Loading(){
    const { loading } = useLoading();
    if(!loading) return null;

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            w="100%"
            h="100vh"
            position="fixed"
            top="0"
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            zIndex="9999"
        >
            <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
            <Text fontSize="large" fontWeight="bold">Carregando...</Text>
        </Flex>
    );
}