import { render } from "react-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import React, { Component } from "react"
import VooService from "../services/VooService"
import EmpresaService from "../services/EmpresaService"

class AdminVoo extends Component{

  componentDidMount(){
    EmpresaService.getEmpresas().then((res) => {
      this.setState({empresas: res.data});
      console.log('Empresas => ' + JSON.stringify(empresas));
    });
  }

  constructor(props){
    super(props)

    this.state = {
        empresas: [],

        dataSaida: '',
        dataChegada: '',
        precoPassagem: '',
        qtdAssentosEconomica: '',
        qtdAssentosPrimeiraClasse:'',
        qtdAssentosExecutiva:'',
        empresa:'',
        destino:'',
        partida:'',
        imgUrl:'',
    };

    this.changeDataSaidaHandler = this.changeDataSaidaHandler.bind(this);
    this.changeDataChegadaHandler = this.changeDataChegadaHandler.bind(this);
    this.changePrecoPassagemHandler = this.changePrecoPassagemHandler.bind(this);
    this.changeQtdAssentosEconomicaHandler = this.changeQtdAssentosEconomicaHandler.bind(this);
    this.changeQtdAssentosPrimeiraClasseHandler = this.changeQtdAssentosPrimeiraClasseHandler.bind(this);
    this.changeQtdAssentosExecutivaHandler = this.changeQtdAssentosExecutivaHandler.bind(this);
    this.changeEmpresaHandler = this.changeEmpresaHandler.bind(this);
    this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
    this.changePartidaHandler = this.changePartidaHandler.bind(this);
    this.changeImgUrlHandler = this.changeImgUrlHandler.bind(this);
    
    this.addVoo = this.addVoo.bind(this);
  }

  addVoo = (e) => {
    const novoVoo = {
      dataSaida: this.state.dataSaida,
      dataChegada: this.state.dataChegada,
      precoPassagem: this.state.precoPassagem,
      qtdAssentosEconomica: this.state.qtdAssentosEconomica,
      qtdAssentosPrimeiraClasse: this.state.qtdAssentosPrimeiraClasse,
      qtdAssentosExecutiva: this.state.qtdAssentosExecutiva,
      empresa: this.state.empresa,
      destino: this.state.destino,
      partida: this.state.partida,
      imgUrl: this.state.imgUrl,
    };
    
    console.log('voo => ' + JSON.stringify(novoVoo));

    VooService.createVoo(novoVoo).then(res => {
      
    });
  };

  changeDataSaidaHandler = (event) => {
    this.setState({ dataSaida: event.target.value });
  };

  changeDataChegadaHandler = (event) => {
    this.setState({ dataChegada: event.target.value });
  };

  changePrecoPassagemHandler = (event) => {
    this.setState({ precoPassagem: event.target.value });
  };

  changeQtdAssentosEconomicaHandler = (event) => {
    this.setState({ qtdAssentosEconomica: event.target.value });
  };

  changeQtdAssentosPrimeiraClasseHandler = (event) => {
    this.setState({ qtdAssentosPrimeiraClasse: event.target.value });
  };

  changeQtdAssentosExecutivaHandler = (event) => {
    this.setState({ qtdAssentosExecutiva: event.target.value });
  };

  changeEmpresaHandler = (event) => {
    this.setState({ empresa: event.target.value });
  };

  changeDestinoHandler = (event) => {
    this.setState({ destino: event.target.value });
  };

  changePartidaHandler = (event) => {
    this.setState({ partida: event.target.value });
  };

  changeImgUrlHandler = (event) => {
    this.setState({ imgUrl: event.target.value });
  };

  render() {
    return (
        <div class="login">
          <Header />
          <div class="container">
                  <form class="form-cadvoo">       
                    <h2 class="row1">Adicionar Viagem</h2>
                    <div class="row">
                      <div class="col">
                        <div class="row mb-3">
                          <label for="partida" class="form-label">Partida:</label>
                          <input type="text" class="form-control" id="partida" name="partida" value={this.state.partida} onChange={this.changePartidaHandler} maxlength="80" required/>
                        </div>
                        <div class="row mb-3">
                          <label for="dataSaida" class="form-label">Data de Saída:</label>
                          <input type="date" class="form-control mb-3" id="dataSaida"  name="dataSaida" value={this.state.dataSaida} onChange={this.changeDataSaidaHandler}/>
                        </div>
                        <div class="row mb-3">
                            <label for="destino" class="form-label">Destino:</label>
                            <input type="text" class="form-control" id="destino" name="destino" value={this.state.destino} onChange={this.changeDestinoHandler} maxlength="80" required/>
                        </div>
                        <div class="row mb-3">
                          <label for="dataChegada" class="form-label">Data de Chegada:</label>
                          <input type="date" class="form-control mb-3" id="dataChegada"  name="dataChegada" value={this.state.dataChegada} onChange={this.changeDataChegadaHandler}/>
                        </div>
                        <hr />
                        <h5 class="row1">Quantidade de Assentos: </h5>
                        <div class="row">
                          <div class="col">
                            <div class="row mb-3 m-1">
                              <label for="qtdAssentosExecutiva" class="form-label">Executiva:</label>
                              <input type="number" class="form-control" id="qtdAssentosExecutiva" name="qtdAssentosExecutiva" value={this.state.qtdAssentosExecutiva} onChange={this.changeQtdAssentosExecutivaHandler} maxlength="80" required/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row mb-3 m-1">
                              <label for="qtdAssentosPrimeiraClasse" class="form-label">Primeira Classe:</label>
                              <input type="number" class="form-control" id="qtdAssentosPrimeiraClasse" name="qtdAssentosPrimeiraClasse" value={this.state.qtdAssentosPrimeiraClasse} onChange={this.changeQtdAssentosPrimeiraClasseHandler} maxlength="80" required/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row mb-3 m-1">
                              <label for="qtdAssentosEconomica" class="form-label">Economica:</label>
                              <input type="number" class="form-control" id="qtdAssentosEconomica" name="qtdAssentosEconomica" value={this.state.qtdAssentosEconomica} onChange={this.changeQtdAssentosEconomicaHandler} maxlength="80" required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='col'>
                        <div class="row mb-3 m-1">
                          <div class="card">
                            <img class="card-img-top" src={this.state.imgUrl} alt="Imagem do Destino" style={{"height" : "200px"}}/>
                          </div>
                        </div>
                        <div class="row mb-3 m-1">
                          <label for="imgUrl" class="form-label">Url da Imagem:</label>
                          <input type="text" class="form-control" id="imgUrl" name="imgUrl" value={this.state.imgUrl} onChange={this.changeImgUrlHandler} required/>
                        </div>
                        <div class="row mb-3 m-1">
                          <label for="empresa" class="form-label">Empresa:</label>
                          <select>
                            {
                              empresas ? this.state.empresas.map((key) => {
                                return <option>{key.nome}</option>;
                              })
                              : null
                            }
                          </select>
                          <input type="text" class="form-control" id="empresa" name="empresa" value={this.state.empresa} onChange={this.changeEmpresaHandler} maxlength="80" required/>
                        </div>
                        <div class="row mb-3 m-1">
                          <label for="precoPassagem" class="form-label">Preço da Passagem Economica:</label>
                          <input type="number" class="form-control" id="precoPassagem" name="precoPassagem" value={this.state.precoPassagem} onChange={this.changePrecoPassagemHandler} maxlength="80" required/>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary m-1 w-100" onClick={this.addVoo}><i class="bi bi-airplane"></i> Cadastrar</button>
                        <button type="button" class="btn btn-secondary m-1 w-100"><i class="bi bi-trash-fill"></i> Limpar</button>
                      </div>                      
                    </div>
              </form>
          </div>
        <Footer />
      </div>
    )
  }
}

export default AdminVoo;