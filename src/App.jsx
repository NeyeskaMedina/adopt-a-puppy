import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { MyCards } from "./components/MyCards";
import {Container} from "react-bootstrap";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Container>
      <Header title="Adopt a puppy 🐕‍🦺😍"/>
      <MyCards />
      <Footer />
    </Container>
    </>
  )
}

export default App
