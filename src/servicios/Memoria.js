import { createContext, useReducer } from "react";

const listaMock = [
    {
        "id": "1",
        "detalles": "Correr por 30 minutos",
        "periodo": "dia",
        "eventos": 1,
        "icono": "🏃‍♂️",
        "meta": 365,
        "plazo": "2030-01-01",
        "completado": 5
    },
    {
       "id": "2",
       "detalles": "Leer libros",
       "periodo": "año",
       "eventos": 6,
       "icono": "📚",
       "meta": 365,
       "plazo": "2030-01-01",
       "completado": 0
    },
    {
       "id": "3",
       "detalles": "Viajar a parques nacionales",
       "periodo": "mes",
       "eventos": 1,
       "icono": "✈️",
       "meta": 60,
       "plazo": "2030-01-01",
       "completado": 5
    }
];

const estadoInicial = {
    orden: [],
    objetos: {}
};

export const Contexto = createContext(null);

function Memoria({ children }) {
    const [estado, enviar] = useReducer(reductor, estadoInicial);
    return (
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memoria;