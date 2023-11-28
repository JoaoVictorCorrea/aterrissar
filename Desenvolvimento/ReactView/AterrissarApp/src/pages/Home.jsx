import React, { Component } from "react"
import { render } from "react-dom"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Footer from "../components/Footer"
import Card from "../components/Card"
import VooService from "../services/VooService"

class Home extends Component{

  componentDidMount(){
    VooService.getVoos().then((res) => {
      this.setState({ voos: res.data });
      console.log('Voos => ' + JSON.stringify(this.state.voos));
    });
  }

  constructor(props){
    super(props)

    this.state = {
        voos: [],
    };
  }

  render() {
    return (
      <div>
        <Navbar admin={true}/>
        <Search />
        <section class="search-section text-center py-5 whitebg">
          <h2 class="text-dark">Destinos em destaque</h2>
        </section>
        <div class="grid-container whitebg">
        {this.state.voos.map((key, id) => (
            <Card data={key} key={id} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home