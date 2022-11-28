import './Rodape.css'

export const Rodape =() =>{
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/lucca_hiratsuca/" >
                        <img src="/imagens/ig.png" alt="Instagram"/>
                    </a>
                </li>
                
                <li>
                    <a href="https://github.com/LuccaHiratsuca">
                        <img src="/imagens/gh.png" alt="GitHub"/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Lucca Hiratsuca.
            </p>
        </section>
    </footer>)
}