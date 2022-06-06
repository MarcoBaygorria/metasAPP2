import estilos from './Vinculo.module.css';

function Vinculo({ Icono, texto, href }) {
    return (
        <a href={href} className={estilos.vinculo}>
            <Icono classname={estilos.icono}/>
            {texto &&<span className={estilos.texto}>{texto}</span>}
        </a> 
    );
}

export default Vinculo;