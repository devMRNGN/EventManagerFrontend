import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoadingContext = createContext();

export function LoadingProvider({ children }){
    const [loading, setLoading] = useState(false);

    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);

    return(
        <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

LoadingProvider.propTypes = {
    children: PropTypes.node.isRequired
}