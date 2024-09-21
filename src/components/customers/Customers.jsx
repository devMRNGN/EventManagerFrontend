import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import getAllCustomersController from "@controllers/customer/getAllCustomersController.js";
import { useAuth } from "@auth/hooks/AuthContext/UseAuth.jsx";
import { CustomerCard } from "@components/customers/components/CustomerCard.jsx";
import { SearchIcon } from "@chakra-ui/icons";
import { isBlank } from "@common/utils/isBlank.js";

let customers = [];

export const Customers = () => {
  const { auth } = useAuth();
  const searchInputRef = useRef(null);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleGetAllCustomers = async () => {
      try{
        const { success, data } = await getAllCustomersController(auth?.token);
        if (success){
          customers = data;
          setFilteredCustomers(customers);
        }
      }catch(error){
        console.error("Erro ao buscar os clientes cadastrados");
        console.error(error?.message);
      }
    };

    handleGetAllCustomers();
  }, [auth.token, auth]);

  useEffect(() => {
    const handleFilterCustomerList = () => {
      if(isBlank(searchTerm)){
        setFilteredCustomers(customers);
        return;
      }

      setFilteredCustomers(
        customers.filter(customer => {
          return(
            customer?.name?.toLowerCase()?.includes(searchTerm) ||
            customer?.phone?.includes(searchTerm) ||
            customer?.mobile?.includes(searchTerm) ||
            customer?.user?.username?.toLowerCase()?.includes(searchTerm) ||
            customer?.user?.email?.toLowerCase()?.includes(searchTerm)
          );
        })
      );
    };

    const debounceTimeout = setTimeout(() => {
      handleFilterCustomerList();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const handleInputChange = () => {
    setSearchTerm(searchInputRef.current.value.toLowerCase());
  };

  return (
    <Flex flexDir="column" gap="1.5rem">
      <Flex
        w="100%"
        flexDir="row"
        justify="space-between"
        align="center"
      >
        <Heading size="lg">Clientes</Heading>
        <InputGroup size="md" w="40%">
          <Input
            ref={searchInputRef}
            name="Search customer"
            onChange={handleInputChange}
            pr="4.5rem"
            type="text"
            placeholder="Buscar cliente"
            borderColor="gray.400"
          />
          <InputRightElement width="3rem">
            <Button
              h="1.75rem"
              size="sm"
              bg="transparent"
              onClick={handleInputChange}
            >
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex
        w="100%"
        wrap="wrap"
        gap="1.5rem"
      >
        {filteredCustomers ? filteredCustomers.map(customer => (
          <Box
            key={customer?.customerId}
            w="18vw"
            h="35vh"
          >
            <CustomerCard
              customer={customer}
            />
          </Box>
        )) : null}
      </Flex>
    </Flex>
  );
};