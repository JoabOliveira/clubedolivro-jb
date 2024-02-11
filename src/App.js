import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';

function App() {

  const categorias = [
    {
      nome:'Ação',
      corPrimaria:'#1F1717',
      corSecundaria:'#CE5A67',
    },
    {
      nome:'Drama',
      corPrimaria:'#FFA33C',
      corSecundaria:'#FFFB73',
    },
    {
      nome:'Fantasia',
      corPrimaria:'#C683D7',
      corSecundaria:'#7071E8',
    },
    {
      nome:'Ficção',
      corPrimaria:'#ECE3CE',
      corSecundaria:'#3A4D39',
    },
    {
      nome:'Romance',
      corPrimaria:'#ED5AB3',
      corSecundaria:'#860A35',
    },
    {
      nome:'Suspense',
      corPrimaria:'#427D9D',
      corSecundaria:'#164863',
    },
    {
      nome:'Terror',
      corPrimaria:'#363062',
      corSecundaria:'#435585',
    }
  ]

  const [livros, setLivros] = useState ([])

  const aoNovoLivroAdicionado = (livro) => {
    setLivros ([...livros, livro])
  }

    return (
      <div className="App">
        <Banner />
        <Formulario categorias={categorias.map(categoria => categoria.nome)} aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)}/>
        
        {categorias.map (categoria => <Categoria 
          key={categoria.nome} 
          nome={categoria.nome} 
          corPrimaria={categoria.corPrimaria} 
          corSecundaria={categoria.corSecundaria}
          livros={livros.filter(livro => livro.categoria === categoria.nome)}
          />)}

        <Rodape/>
      </div>
  );
}

export default App;
