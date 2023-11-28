import { render } from "react-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import React, { Component } from "react"
import VooService from "../services/VooService"
import EmpresaService from "../services/EmpresaService"
import AeroportoService from "../services/AeroportoService"

class AdminVoo extends Component{

  componentDidMount(){
    EmpresaService.getEmpresas().then((res) => {
      this.setState({ empresas: res.data });
      console.log('Empresas => ' + JSON.stringify(this.state.empresas));
    });

    AeroportoService.getAeroportos().then((res) => {
      this.setState({ aeroportos: res.data });
      console.log('Aeroportos => ' + JSON.stringify(this.state.aeroportos));
    });
  }

  constructor(props){
    super(props)

    this.state = {
        empresas: [],
        aeroportos: [],

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
    EmpresaService.getEmpresaById(event.target.value)
    .then(response => {
      this.setState({ empresa: response.data});
      console.log("Empresa => " + JSON.stringify(this.state.empresa));
    })
    .catch(error => {
      console.error('Erro ao buscar empresa por ID:', error);
    });
  };

  changeDestinoHandler = (event) => {
    AeroportoService.getAeroportoById(event.target.value)
    .then(response => {
      this.setState({destino: response.data});
      console.log("Destino => " + JSON.stringify(this.state.destino));
    })
    .catch(error => {
      console.error('Erro ao buscar aeroporto por ID:', error);
    });
  };

  changePartidaHandler = (event) => {
    AeroportoService.getAeroportoById(event.target.value)
    .then(response => {
      this.setState({partida: response.data});
      console.log("Partida => " + JSON.stringify(this.state.partida));
    })
    .catch(error => {
      console.error('Erro ao buscar aeroporto por ID:', error);
    });
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
                      <div class="col shadow-lg border rounded m-3 p-3">
                        <div class="row mb-2 p-3">
                          <label for="partida" class="form-label">Partida:</label>
                          <select class="form-select" value={this.state.partida} onChange={this.changePartidaHandler}>
                            { 
                              this.state.aeroportos.map((key) => {
                                return <option key={key.id} value={key.id}>{key.nome}</option>;
                              })
                            }
                          </select>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="dataSaida" class="form-label">Data de Saída:</label>
                          <input type="date" class="form-control mb-3" id="dataSaida"  name="dataSaida" value={this.state.dataSaida} onChange={this.changeDataSaidaHandler}/>
                        </div>
                        <div class="row mb-2 p-3">
                            <label for="destino" class="form-label">Destino:</label>
                            <select class="form-select" value={this.state.destino} onChange={this.changeDestinoHandler}>
                            { 
                              this.state.aeroportos.map((key) => {
                                return <option key={key.id} value={key.id}>{key.nome}</option>;
                              })
                            }
                          </select>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="dataChegada" class="form-label">Data de Chegada:</label>
                          <input type="date" class="form-control mb-3" id="dataChegada"  name="dataChegada" value={this.state.dataChegada} onChange={this.changeDataChegadaHandler}/>
                        </div>
                        <hr />
                        <h5 class="row1">Quantidade de Assentos: </h5>
                        <div class="row">
                          <div class="col">
                            <div class="row mb-2 p-3">
                              <label for="qtdAssentosExecutiva" class="form-label">Executiva:</label>
                              <input type="number" class="form-control" id="qtdAssentosExecutiva" name="qtdAssentosExecutiva" value={this.state.qtdAssentosExecutiva} onChange={this.changeQtdAssentosExecutivaHandler} maxlength="80" required/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row mb-2 p-3">
                              <label for="qtdAssentosPrimeiraClasse" class="form-label">Primeira Classe:</label>
                              <input type="number" class="form-control" id="qtdAssentosPrimeiraClasse" name="qtdAssentosPrimeiraClasse" value={this.state.qtdAssentosPrimeiraClasse} onChange={this.changeQtdAssentosPrimeiraClasseHandler} maxlength="80" required/>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row mb-2 p-3">
                              <label for="qtdAssentosEconomica" class="form-label">Economica:</label>
                              <input type="number" class="form-control" id="qtdAssentosEconomica" name="qtdAssentosEconomica" value={this.state.qtdAssentosEconomica} onChange={this.changeQtdAssentosEconomicaHandler} maxlength="80" required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='col shadow-lg border rounded m-3 p-3'>
                        <div class="row mb-2 p-3">
                          <label for="imgPreview" className="form-label" >Preview da Imagem:</label>
                          <div class="card shadow">
                            <img name="imgPreview" id="imgPreview" class="card-img-top" src={this.state.imgUrl} alt="Imagem do Destino" style={{"height" : "200px"}}/>
                          </div>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="imgUrl" class="form-label">Url da Imagem:</label>
                          <input type="text" class="form-control" id="imgUrl" name="imgUrl" value={this.state.imgUrl} onChange={this.changeImgUrlHandler} required/>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="empresa" class="form-label">Empresa:</label>
                          <select class="form-select" value={this.state.empresa} onChange={this.changeEmpresaHandler}>
                            { 
                              this.state.empresas.map((key) => {
                                return <option key={key.id} value={key.id}>{key.nome}</option>;
                              })
                            }
                          </select>
                        </div>
                        <div class="row mb-2 p-3">
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