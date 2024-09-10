import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HouseIcon, ScheduleIcon } from "@common/icons/icons.jsx";

export function Sidebar(){
    return(
        <List 
            color="highlight.600" 
            fontSize="1.2rem" 
            spacing={4}
        >
            <ListItem>
                <NavLink to="/teste">
                    <Flex 
                        justify="center" 
                        align="center" 
                        bg="purple.200"
                        p="12px"
                        borderRadius="12px"
                        _hover={{
                            bg: "purple.300"
                        }}
                    >
                        <ListIcon as={HouseIcon}/>
                        Inicio
                    </Flex>
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/calendar">
                    <Flex 
                        justify="center" 
                        align="center" 
                        bg="purple.200"
                        p="12px"
                        borderRadius="12px"
                        _hover={{
                            bg: "purple.300"
                        }}
                    >
                        <ListIcon as={ScheduleIcon}/>
                        Agenda
                    </Flex>
                </NavLink>
            </ListItem>
        </List>
    );
}