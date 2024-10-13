import Pagina from "../components/template/Pagina";
import ContextProvider from "@/context/context";

export default function Home() {
  return (
    <ContextProvider>
      <Pagina >
      </Pagina>
    </ContextProvider>
  )
}
