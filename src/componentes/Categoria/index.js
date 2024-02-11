import Livro from '../Livro'
import './Categoria.css'

const Categoria = (props) => {
    return (
        (props.livros.length > 0) && <section className='categoria' style={{backgroundColor: props.corSecundaria}}>
            
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='livros'>
            {props.livros.map( livro => <Livro
            corDeFundo={props.corPrimaria} 
            key={livro.titulo}
            titulo={livro.titulo} 
            autor={livro.autor} 
            imagem={livro.imagem}
            />)}
           </div>
        </section>
    )
}

export default Categoria
