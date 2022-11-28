import './CampoTexto.css'

export const CampoTexto = ({label,placeholder,obrigatorio,valor, aoAlterado}) => {
    
    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={valor} onChange={e => aoAlterado(e.target.value)} required = {obrigatorio} placeholder={`${placeholder}`}/>   
        </div>

    ) 
}

