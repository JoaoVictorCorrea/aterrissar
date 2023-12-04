function Search() {
  const typo = 'https://i.imgur.com/d12inol.png';

  return(
    <div class="search shadow-lg">
      <section class="text-center py-5">
        <img src={typo} alt="Typo" height='200'/>
        <h2 class="text-light">Procure o Destino dos Seus Sonhos</h2>
        <form action="#">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-4">
                <input type="text" class="form-control mb-3" placeholder="Insira um destino..."/>
              </div>
              <div class="col-md-4">
                <input type="date" class="form-control mb-3" id="Saida"/>
              </div>
              <div class="col-md-4">
                <input type="date" class="form-control mb-3"/>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary"><i class="bi bi-search" aria-hidden="true"></i> Buscar Viagem</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Search