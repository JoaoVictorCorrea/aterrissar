import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Footer from "../components/Footer"
import Card from "../components/Card"

function Home(){
  return (
    <div>
      <Navbar admin={true}/>
      <Search />
      <section class="search-section text-center py-5 whitebg">
        <h2 class="text-dark">Destinos em destaque</h2>
      </section>
      <div class="grid-container whitebg">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home