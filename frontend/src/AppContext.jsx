import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext ();

 export const AppProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setloggedin(false);
        navigate('/login');
    }



    const [loggedin, setloggedin] = useState(currentUser !==null);

    return <AppContext.Provider value={{loggedin, setloggedin, logout}}>
        {children}
    </AppContext.Provider>
};

const UseAppContext = () => useContext(AppContext);

export default UseAppContext;