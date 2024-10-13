import Pagina from "@/components/template/Pagina";
import { Root } from '../models/weatherJsonResponse'
//import apiCall from "./api/weatherAPI"
import { useEffect, useState } from "react";
import ContextProvider from "@/context/context";

export default function Home() {
  return (
    <ContextProvider>
      <Pagina >
      </Pagina>
    </ContextProvider>
  )
}
