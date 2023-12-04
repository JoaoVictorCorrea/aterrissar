function Navbar({admin}) {
  const userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1UrvIGFDvsmN1YvavxG8q5nJCewYAa-tWQ&usqp=CAU";
  const logo = 'https://i.imgur.com/d12inol.png';

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log("user => " + user);

  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="bi bi-three-dots"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <a class="nav-link" href="#">Aterrissar</a>
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="home">Destinos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Quem Somos</a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a class="nav-link text-success m-3" href="reservas">Minhas reservas </a>
            <a class="text-reset me-3" href="#">
              <i class="bi bi-bag"></i>
            </a>

            <div class="dropdown">
              <a class="dropdown-toggle d-inline-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
                role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                <img src={userImg} class="rounded-circle" height="30" alt="User Image"
                  loading="lazy" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a class="dropdown-item" href="profile">{user.nome}</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Configurações</a>
                </li>
                <li>
                  <a class="dropdown-item text-danger" href="login">Logout</a>
                </li>
                { user.admin == 1 ?
                  <li>
                    <a class="dropdown-item" href="painel">Painel do Administrador</a>
                  </li>
                  :
                  <a></a>
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar