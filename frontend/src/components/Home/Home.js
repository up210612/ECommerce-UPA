import Banner from "./HomeComponents/Banner";
import ProductList from "./HomeComponents/ProductList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
        <Navbar/>
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-12">
            <div class="banner">
              <Banner />
            </div>
            <div class="container mt-4">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
