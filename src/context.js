import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`)
      // if (!response.ok) {
      //   throw new Error("Request failed");
      // }

      const data = await response.json();
      const { meals } = data;

      if (meals) {
        const newMeals = meals.map((item) => {
          const {idMeal, strMeal, strMealThumb, strCategory, strArea, strTags } = item;
          return {id:idMeal, name:strMeal, image:strMealThumb, category:strCategory, area:strArea, tags:strTags}
        })
        setMeals(newMeals);
      } else {
        setMeals([])
      }
      setLoading(false)

    } catch (error) {
      setLoading(false);
    }
  }, [searchTerm])

  useEffect(() => {
    fetchMeals();

  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{ loading, meals, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
