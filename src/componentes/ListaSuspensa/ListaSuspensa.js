import './ListaSuspensa.css'

export const ListaSuspensa = ({label,itens,obrigatorio,valor,aoAlterado}) =>{
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={e => aoAlterado(e.target.value)} value={valor} required={obrigatorio}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item} </option>)}  
                {/* OU:
                {itens.map(item => {
                    return <option>{item}</option>
                })}
                */}      
            </select>
        </div>
    )
}

