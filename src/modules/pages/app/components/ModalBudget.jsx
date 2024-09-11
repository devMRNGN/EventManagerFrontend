import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Select,
    VStack,
    FormLabel,
    FormControl,
} from "@chakra-ui/react";
import { FormField } from "@common/components/FormField.jsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { formatToDateTimeLocal } from "@pages/app/utils/dateUtils.js";
import { useToast } from "@chakra-ui/react";
import { useLoading } from "@common/hooks/Loading/useLoading";
import { useAuth } from "@auth/hooks/AuthContext/UseAuth.jsx";

const requiredFields = ["length", "address", "theme", "birthdayPerson", "schedule"];

export const ModalBudget = ({ startDate, addEvent, isOpen, onClose }) => {
    const toast = useToast();
    const { showLoading, hideLoading } = useLoading();
    const [checkInvalidInputs, setCheckInvalidInputs] = useState(false);
    const { auth } = useAuth();
    const { customer } = auth;

    const [budget, setBudget] = useState({
        length: "M",
        address: null,
        customer: customer,
        schedule: null,
        theme: null,
        description: null,
        birthdayPerson: null,
        value: 0.0,
        isBudget: true,
        finished: false
    });
    
    const handleBudgetInputChange = (e) => {
        setBudget({
            ...budget,
            [e.target.name]: e.target.value
        });
    }

    const handleBudgetValidation = () => {
        try{
            const missingFields = requiredFields.filter(field => !budget[field]);
            if(missingFields.length > 0){
                setCheckInvalidInputs(true);
                throw new Error("Preencha todos os campos necessários");
            }

            handleOnCloseModal();
            showLoading();
            addEvent(budget);
            hideLoading();
        }catch(error){
            toast({
                status: "error",
                title: "Campos obrigatórios",
                description: error?.message,
                isClosable: true
            });
        }
    };

    const handleOnCloseModal = () => {
        setCheckInvalidInputs(false);
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Criar evento</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <VStack spacing={2}>
                        <FormField
                            onChange={handleBudgetInputChange}
                            label="Tema"
                            placeholder="Informe o tema"
                            name="theme"
                            size="md"
                            isRequired={true}
                            checkIfIsInvalid={checkInvalidInputs}
                            errorMessage="Por favor, informe o tema."
                        />
                        <FormControl 
                            isRequired={true}
                            w="100%"
                        >
                            <FormLabel>Tamanho</FormLabel>
                            <Select 
                                placeholder="Escolha o tamanho do evento"
                                name="length"
                                onChange={handleBudgetInputChange}
                                value={budget.length}
                            >
                                <option value="P">Pequeno</option>
                                <option value="M">Médio</option>
                                <option value="G">Grande</option>
                            </Select>
                        </FormControl>
                        <FormField
                            onChange={handleBudgetInputChange}
                            label="Nome do aniversariante"
                            placeholder="Informe o aniversariante"
                            name="birthdayPerson"
                            size="md"
                            isRequired={true}
                            checkIfIsInvalid={checkInvalidInputs}
                            errorMessage="Por favor, informe o nome do aniversariante."
                        />
                        <FormField
                            onChange={handleBudgetInputChange}
                            label="Horário"
                            placeholder="Informe o horário do evento"
                            name="schedule"
                            type="datetime-local"
                            size="md"
                            value={formatToDateTimeLocal(new Date(startDate))}
                            isRequired={true}
                            checkIfIsInvalid={checkInvalidInputs}
                            errorMessage="Por favor, informe o horário."
                        />
                        <FormField
                            onChange={handleBudgetInputChange}
                            label="Endereço"
                            placeholder="12345-678: bairro, rua, 777"
                            name="address"
                            size="md"
                            isRequired={true}
                            checkIfIsInvalid={checkInvalidInputs}
                            errorMessage="Por favor, informe o endereço."
                        />
                        <FormField
                            onChange={handleBudgetInputChange}
                            label="Descrição"
                            placeholder="Informe a descrição"
                            name="description"
                            size="md"
                        />
                    </VStack>

                </ModalBody>
                <ModalFooter display="flex" gap="4">
                    <Button onClick={handleOnCloseModal}>Voltar</Button>
                    <Button colorScheme="purple" onClick={handleBudgetValidation}>Realizar orçamento</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

ModalBudget.propTypes = {
    startDate: PropTypes.any,
    addEvent: PropTypes.func,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
}