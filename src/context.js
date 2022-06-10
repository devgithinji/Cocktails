import React, {useState, useContext, useEffect} from 'react'
import {useCallback} from 'react'
import axios from "axios";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback(
        async () => {
            setLoading(true);
            try {
                const {data} = await axios.get(`${url}${searchTerm}`);
                const {drinks} = data;
                if (drinks) {
                    let newCockTails = drinks.map((cocktail) => {
                        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = cocktail
                        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                    })
                    setCocktails(newCockTails);
                } else {
                    setCocktails([])
                }
                setLoading(false);
            } catch (e) {
                console.log(e)
                setLoading(false);
            }
        }, [searchTerm])

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm,fetchDrinks])


    return <AppContext.Provider value={{loading, cocktails, setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
