import { useContext } from "react";
import { AuthenticationProvider } from "../Context/Authentication";
import { Navigate } from "react-router-dom";

const ProtectRouter = ({children}) => {
    const user = useContext(AuthenticationProvider);

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default ProtectRouter;