import {
    Card, 
    CardBody, 
    Flex, 
    Heading, 
    Image,
    Text,
    Button
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import withoutPhoto from "@images/customerCard/withoutPhoto.png";

export const CustomerCard = ({ customer }) => {
    const infos = [
        {
          label: "Usuário:",
          value: customer?.user?.username
        },
        {
          label: "Email:",
          value: customer?.user?.email
        },
        {
          label: "Celular:",
          value: customer?.mobile
        },
        {
          label: "Telefone:",
          value: customer?.phone
        }
    ];

    const handleSeeCustomerEvents = () => {
        console.log(customer);
    }

    return(
        <Card 
            w="100%"
            h="100%"
            shadow="lg"
        >
            <CardBody
                display="flex"
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    flexDir="column"
                    justify="center"
                    align="center"
                    gap="0.5rem"
                >
                    <Image
                        src={ customer?.user?.photo || withoutPhoto }
                        alt="customer photo"
                        borderRadius="100%"
                        w="45%"
                        h="45%"
                        objectFit="contain"
                    />
                    <Heading 
                        size="sm"
                        textAlign="center"
                    >
                        { customer?.name }
                    </Heading>
                    <Flex
                        w="100%"
                        fontSize="small"
                        flexDir="column"
                        align="start"
                    >
                        {infos ? 
                            infos.map(info => {
                                const { label, value } = info;

                                if(!value) return;

                                return(
                                    <Flex 
                                        key={`${label}-${value}`}
                                        gap="5px"
                                    >
                                        <Text fontWeight="bold">{ label }</Text>
                                        <Text>{ value }</Text>
                                    </Flex>
                                );
                            }) : null
                        }
                    </Flex>
                </Flex>
                <Button onClick={handleSeeCustomerEvents}>Ver eventos</Button>
            </CardBody>
        </Card>
    );
}

CustomerCard.propTypes = {
    customer: PropTypes.object
}