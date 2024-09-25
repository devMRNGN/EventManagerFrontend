import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HouseIcon, ScheduleIcon } from "@common/icons/icons.jsx";
import { useAuth } from "@auth/hooks/AuthContext/UseAuth.jsx";
import { WarningIcon } from "@chakra-ui/icons";

export function Sidebar(){
    const { auth } = useAuth();

    return(
        <List 
            color="highlight.600" 
            fontSize="1.2rem" 
            spacing={4}
        >
            <ListItem>
                <NavLink to="/">
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
                        Eventos
                    </Flex>
                </NavLink>
            </ListItem>
            {auth?.user?.admin ? 
                (
                    <ListItem>
                        <NavLink to="/customers">
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
                                <ListIcon as={WarningIcon}/>
                                Clientes
                            </Flex>
                        </NavLink>
                    </ListItem>
                ) : null 
            }
        </List>
    );
}