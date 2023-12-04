import { render } from "react-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React, { Component } from "react"
import VooService from "../services/VooService"
import EmpresaService from "../services/EmpresaService"
import AeroportoService from "../services/AeroportoService"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from "@mui/x-date-pickers"


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

    EmpresaService.getEmpresaById(1)
    .then(response => {
      this.setState({ empresa: response.data });
      console.log("Empresa => " + JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Erro ao buscar empresa por ID:', error);
    });

    AeroportoService.getAeroportoById(1)
    .then(response => {
      this.setState({destino: response.data});
      this.setState({partida: response.data});
      console.log("Destino => " + JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Erro ao buscar aeroporto por ID:', error);
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
      this.clear();
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
    const selectedEmpresaId = event.target.value;
    EmpresaService.getEmpresaById(selectedEmpresaId)
    .then(response => {
      this.setState({ empresa: response.data });
      console.log("Empresa => " + JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Erro ao buscar empresa por ID:', error);
    });
  };

  changeDestinoHandler = (event) => {
    const selectedAeroportoId = event.target.value;
    AeroportoService.getAeroportoById(selectedAeroportoId)
    .then(response => {
      this.setState({destino: response.data});
      console.log("Destino => " + JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Erro ao buscar aeroporto por ID:', error);
    });
  };

  changePartidaHandler = (event) => {
    const selectedAeroportoId = event.target.value;
    AeroportoService.getAeroportoById(selectedAeroportoId)
    .then(response => {
      this.setState({partida: response.data});
      console.log("Partida => " + JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Erro ao buscar aeroporto por ID:', error);
    });
  };

  changeImgUrlHandler = (event) => {
    this.setState({ imgUrl: event.target.value });
  };

  clear = (e) => {
    this.setState({ dataSaida:"" });
    this.setState({ dataChegada:"" });
    this.setState({ qtdAssentosEconomica:"" });
    this.setState({ qtdAssentosPrimeiraClasse:"" });
    this.setState({ qtdAssentosExecutiva:"" });
    this.setState({ destino: ""})
    this.setState({ partida: ""})
    this.setState({ imgUrl: ""})
    this.setState({ empresa: ""})
    this.setState({ precoPassagem: ""})
  }

  render() {
    return (
        <div class="login">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Navbar /><br /><br />
          <div class="container">
                  <form class="form-cadvoo">       
                    <h2 class="row1">Adicionar Viagem</h2>
                    <div class="row">
                      <div class="col shadow-lg border rounded m-3 p-3">
                        <div class="row mb-2 p-3">
                          <label for="partida" class="form-label">Partida:</label>
                          <select class="form-select" onChange={this.changePartidaHandler}>
                            { 
                              this.state.aeroportos.map((key) => {
                                return <option key={key.id} value={key.id}>{key.cidade}</option>;
                              })
                            }
                          </select>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="dataSaida" class="form-label">Data de Saída:</label>
                          <DateTimePicker value={this.state.dataSaida} onChange={(newValue) => this.setState({dataSaida: newValue})}/>
                        </div>
                        <div class="row mb-2 p-3">
                            <label for="destino" class="form-label">Destino:</label>
                            <select class="form-select" onChange={this.changeDestinoHandler}>
                            { 
                              this.state.aeroportos.map((key) => {
                                return <option key={key.id} value={key.id}>{key.cidade}</option>;
                              })
                            }
                          </select>
                        </div>
                        <div class="row mb-2 p-3">
                          <label for="dataChegada" class="form-label">Data de Chegada:</label>
                          <DateTimePicker value={this.state.dataChegada} onChange={(newValue) => this.setState({dataChegada: newValue})}/>
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
                          <select class="form-select" onChange={this.changeEmpresaHandler}>
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
                        <button type="button" class="btn btn-secondary m-1 w-100" onClick={this.clear}><i class="bi bi-trash-fill"></i> Limpar</button>
                      </div>                      
                    </div>
              </form>
          </div>
          </LocalizationProvider>
        <Footer />
      </div>
    )
  }
}

export default AdminVoo;