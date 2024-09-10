import { useContext } from "react";
import { LoadingContext } from "@common/hooks/Loading/LoadingProvider";

export function useLoading(){
    const context = useContext(LoadingContext);
    if(!context){
        throw new Error('useLoading precisa ser usado por um filho do LoadingProvider');
    }
    return context;
}