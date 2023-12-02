import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Profile(){
  const userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1UrvIGFDvsmN1YvavxG8q5nJCewYAa-tWQ&usqp=CAU";
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log("user => " + user);

  return (
    <div class="login">
          <Navbar />
          <div class="container">
                  <form class="form-signup">       
                    <h2 class="row1">Meu Perfil</h2>
                    <div class="row bg-light p-2 shadow-lg">
                      <div class="col">
                        <div class="row mb-3 m-1 ">
                          <h2 class="row1 text-center">Olá {user.nome}!</h2>
                        </div>
                        <div class="row mb-3 m-1">
                          <img src={userImg} class="rounded-circle" height="300" alt="User Image" loading="lazy" />
                        </div>
                      </div>
                      <div class="col">
                        <div class="row m-1">
                          <label for="email" class="form-label">Email:</label>
                          <input type="text" class="form-control" id="nome" name="nome" value={user.email} maxlength="80" required/>
                        </div>
                        <div class="row m-1">
                            <label for="telefone" class="form-label">Telefone:</label>
                            <input type="text" class="form-control" id="nome" name="nome" value={user.telefone} maxlength="80" readOnly/>
                        </div>
                        <div class="row mb-3 m-1">
                            <label for="cpf" class="form-label">CPF:</label>
                            <input type="text" class="form-control" id="nome" name="nome" value={user.cpf} maxlength="80" readOnly/>
                        </div>
                        <div class="row mb-3 m-1">
                          <label for="dataNasc" class="form-label">Data de Nascimento:</label>
                          <input type="date" class="form-control mb-3" id="dataNasc"  name="dataNasc" value={user.dataNasc} readOnly/>
                        </div>
                      </div>
                    </div>
              </form>
          </div>
        <Footer />
      </div>
  )
}

export default Profile;