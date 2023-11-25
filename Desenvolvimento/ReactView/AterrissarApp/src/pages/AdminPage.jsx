import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AdminPage(){
  return (
    <div class="login">
    <Navbar />
      <div class="container">
        <form class="form-signin" >       
          <h2 class="row1">Painel do Administrador</h2>
          <hr />
          <button type="button" class="btn btn-light w-100" href='adminVoo'>Adicionar Voo</button>
          <hr></hr>
          <button type="button" class="btn btn-light w-100" href='#'>Gerenciar Empresas</button>
          <hr></hr>
          <button type="button" class="btn btn-light w-100" href='#'>Gerenciar Clientes</button>
          <hr></hr>
        </form>
      </div>
    <Footer />
    </div>
  )
}

export default AdminPage; 