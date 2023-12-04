import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AdminPage(){
  return (
    <div class="login"><br /><br />
    <Navbar />
      <div class="container">
        <form class="form-signin" >       
          <h2 class="row1">Painel do Administrador</h2>
          <hr />
          <a type="button" class="btn btn-light w-100" href='adminVoo'>Adicionar Voo</a>
          <hr></hr>
          <a type="button" class="btn btn-light w-100" href='adminEmpresa'>Gerenciar Empresas</a>
          <hr></hr>
          <a type="button" class="btn btn-light w-100" href='#'>Gerenciar Clientes</a>
          <hr></hr>
        </form>
      </div>
    <Footer />
    </div>
  )
}

export default AdminPage; 