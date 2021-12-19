import Header from "./components/Header/Header";
import Window from "./components/Wind/Window";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
  return (
      <div className="all__containers">
        <div className="main__container">
          <HeaderContainer />
          <Window />
          <Footer />
        </div>
      </div>
  )
}

export default App;
