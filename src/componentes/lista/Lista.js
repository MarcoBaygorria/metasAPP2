import { useContext } from "react";
import { Contexto } from "../../servicios/Memoria";
import Meta from "./Meta";

function Lista() {

    const metas = useContext(Contexto);
    return (
       metas.map(meta => <Meta key={meta.id} {...meta}></Meta>)
    );
}

export default Lista;