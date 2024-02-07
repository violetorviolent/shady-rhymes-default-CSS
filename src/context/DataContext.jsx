import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [colorSVG, setColorSVG] = useState('#F79489')

    return (
        <DataContext.Provider value={{
            colorSVG, 
            setColorSVG
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;