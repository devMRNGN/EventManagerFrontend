import { Box, Flex, HStack } from "@chakra-ui/react";
import {  } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { HouseIcon, ScheduleIcon } from "@common/icons/icons.jsx";

export function FooterbarMobile(){
    return(
        <HStack
            color="highlight.600" 
            fontSize="1.2rem" 
            spacing={4}
        >
            <Box>
                <NavLink to="/">
                    <Flex 
                        justify="center" 
                        align="center"
                        bg="purple.200"
                        p="16px"
                        borderRadius="12px"
                        _hover={{
                            bg: "purple.300"
                        }}
                    >
                        <HouseIcon/>
                    </Flex>
                </NavLink>
            </Box>
            <Box>
                <NavLink to="/calendar">
                    <Flex 
                        justify="center" 
                        align="center"
                        bg="purple.200"
                        p="16px"
                        borderRadius="12px"
                        _hover={{
                            bg: "purple.300"
                        }}
                    >
                        <ScheduleIcon/>
                    </Flex>
                </NavLink>
            </Box>
        </HStack>
    );
}