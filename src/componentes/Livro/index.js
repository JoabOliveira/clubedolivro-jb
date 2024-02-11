import './Livro.css'

const Livro = ({autor, imagem, titulo, corDeFundo}) => {
    return (<div className='livro'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={titulo}/>
        </div>
        <div className='rodape'>
            <h4>{titulo}</h4>
            <h5>{autor}</h5>
        </div>
    </div>)
}

export default Livro