'use client'

import { createContext, useEffect, useState } from "react";
import { Root } from '../models/weatherJsonResponse'

interface GeneralContextType {
  inputValUpdate: string;
  weatherCondition: Root;
  setInputValUpdate: (value: string) => void; // Update type to accept a string
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const GeneralContext = createContext({} as GeneralContextType);

export default function ContextProvider({ children }: { children: React.ReactNode }) {

  const [inputValUpdate, setInputValUpdate] = useState("");
  const [inputValStored, setInputValStored] = useState("");
  const [weatherCondition, setWeatherCondition] = useState({} as Root);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setInputValStored(inputValUpdate);
    console.log(inputValStored)
  }

  useEffect(() => {
    if (inputValStored !== undefined && inputValStored !== '') {
      fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValStored}?key=9WDVFPB33F3RK7Q4QPTTPH3T8&lang=pt`)
        .then(resp => resp.json())
        .then(data => {
          setWeatherCondition(data)
        });
    }
  }, [inputValStored]);

  return (
    <GeneralContext.Provider value={{ inputValUpdate, setInputValUpdate, handleClick, weatherCondition }}>
      {children}
    </GeneralContext.Provider>
  )
}