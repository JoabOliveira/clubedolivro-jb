import { useState } from 'react';
import Botao from '../Botao'
import  CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
  

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoLivroCadastrado({
            titulo, 
            autor,
            imagem, 
            categoria
        })
        setTitulo('')
        setAutor('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cadastrar seu livro favorito</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o título"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Autor" 
                    placeholder="Digite o autor"
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                />

                <CampoTexto 
                    label= <a href="https://www.skoob.com.br/" target="_blank">Imagem do livro - Clique aqui</a>
                    placeholder="Cole aqui o link da imagem pelo Skoob"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label= "Categoria"
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao texto="Salvar"/>
            </form>
        </section>
    )
}

export default Formulario 