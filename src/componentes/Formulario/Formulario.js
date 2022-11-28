import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

export const Formulario = (props) => {


    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const[time,setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.Cadastro({
            nome,
            cargo, 
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    obrigatorio={true} 
                    label = "Nome" 
                    placeholder ="Digite o seu nome"
                    aoAlterado={valor => setNome(valor)}
                />
                
                <CampoTexto
                 valor={cargo}
                 obrigatorio={true}
                 label = "Cargo"
                 placeholder="Digite o seu cargo"
                 aoAlterado={valor => setCargo(valor)}
                 />

                <CampoTexto 
                valor={imagem}
                obrigatorio={false}
                label = "Imagem"
                placeholder="Digite  o endereço da imagem"
                aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa  
                label = "Time" 
                itens={props.times}
                obrigatorio={true} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>

            </form>

        </section>
    )
 
}