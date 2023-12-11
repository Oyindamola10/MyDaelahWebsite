import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext(null);

export const AppContextProvider = ({ children }) => {

    const [cartNo, setcartNo] = useState(0);

    const incrCart = () => {
        setcartNo(prev => prev + 1);
    }

    const value = {
        cartNo,
        incrCart,
    }


    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => useContext(Context);