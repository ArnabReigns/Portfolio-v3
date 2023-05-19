import { createContext } from 'react';

export const context = createContext();

const AppContext = ({children}) => {

    const value = {

    }

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export default AppContext