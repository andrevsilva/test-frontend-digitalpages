import './App.css';
import api from './api';
import React , { Component } from 'react';
import logo from './img/logo.png'


class App extends Component{

  state= {
    frutas: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    
    console.log(response.data);

    this.setState({ frutas: response.data })
  }

   handleSelect = (e) => {
    e.preventDefault(); 

    const foto = e.target.elements.foto.value;
    localStorage.setItem('/foto', foto);

    const nome = e.target.elements.nome.value;
    localStorage.setItem('/nome', nome);

    const fibras = e.target.elements.fibras.value;
    localStorage.setItem('/fibras', fibras);

    const calorias = e.target.elements.calorias.value;
    localStorage.setItem('/calorias', calorias);

    const proteinas = e.target.elements.proteinas.value;
    localStorage.setItem('/proteinas', proteinas);

    const carboidratos = e.target.elements.carboidratos.value;
    localStorage.setItem('/carboidratos', carboidratos);

    const porcao = e.target.elements.porcao.value;
    localStorage.setItem('/porcao', porcao);

    const gordura = e.target.elements.gordura.value;
    localStorage.setItem('/gordura', gordura);
    
    window.location.reload();
  }

  handleBack = () => {
    localStorage.removeItem('/foto');
    localStorage.removeItem('/nome');
    localStorage.removeItem('/fibras');
    localStorage.removeItem('/calorias');
    localStorage.removeItem('/proteinas');
    localStorage.removeItem('/carboidratos');
    localStorage.removeItem('/porcao');
    localStorage.removeItem('/gordura');
    window.location.reload();
  }

  render(){

  const { frutas } = this.state;

  const foto = localStorage.getItem('/foto');
  const nome = localStorage.getItem('/nome');
  const fibras = localStorage.getItem('/fibras');
  const calorias = localStorage.getItem('/calorias');
  const proteinas = localStorage.getItem('/proteinas');
  const carboidratos = localStorage.getItem('/carboidratos');
  const porcao = localStorage.getItem('/porcao');
  const gordura = localStorage.getItem('/gordura');


  if (foto , nome , fibras , calorias , proteinas , carboidratos , porcao , gordura !== null) {
    return (
      <div>
        <header>
          <img src={logo} />
          <h2>Clique em voltar para escolher outra fruta</h2>
        </header>
        <div className="detalhes">
            <img src={foto} />
            <p className="nome">{nome}</p>
            <p>Fibras: {fibras}</p>
            <p>Calorias: {calorias}</p>
            <p>Proteinas: {proteinas}</p>
            <p>Carboidratos: {carboidratos}</p>
            <p>Porção: {porcao}</p>
            <p>Gordura: {gordura}</p>
            <button onClick={this.handleBack} >Voltar</button>
          </div>
      </div>
    );
  }
  
  return(
    <div>
      <header>
        <img src={logo} />
        <h2>Clique na fruta e veja suas informações nutricionais</h2>
      </header>
      <div className="lista-frutas">
          {frutas.map(fruta =>(
          <form className="fruta" onSubmit={this.handleSelect}>
            <button type="submit" >
              <li>
                <input type="text" name="foto" value={fruta.photo} required hidden />
                <input type="text" name="nome" value={fruta.name} required hidden />
                <input type="text" name="fibras" value={fruta.fiber} required hidden />
                <input type="text" name="calorias" value={fruta.calories} required hidden />
                <input type="text" name="proteinas" value={fruta.protein} required hidden />
                <input type="text" name="carboidratos" value={fruta.carbohydrates} required hidden />
                <input type="text" name="porcao" value={fruta.portion} required hidden />
                <input type="text" name="gordura" value={fruta.blubber} required hidden />
                
                <div className="nome">
                  <h1>{fruta.name}</h1>
                </div>
                <img src={fruta.photo}></img>
              </li>
            </button>
          </form>
          ))}
      </div>
    </div>
    );
  };
}

export default App;
