import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";

export function DefaultLink({ direction, content, target }){
    return(
        <Link
            to={direction}
            style={{
                textDecoration: "underline",
                color: "Highlight"
            }}
            target={target || "_self"}
            
        >
            <Text
                fontSize={{ base: "1rem", md: "1.5rem" }}
            >
                { content }
            </Text>
        </Link>
    );
}

DefaultLink.propTypes = {
    direction: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    target: PropTypes.string
}