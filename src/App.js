import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import terry from './assets/img/terry-bogard.png';
import kyo from './assets/img/kyo.png';

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React"></Header>
      <div className="container row py-5 g-2 align-items-center justify-content-center mx-auto">
        <Card 
          img={terry} 
          color="red"
          name="Terry Bogard" 
          description="Terry Bogard es el protagonista de la saga de vídeojuegos Fatal Fury, co-protagonista en Garou Mark of the Wolves y personaje recurrente en The King of Fighters.<br><br>
        Terry Bogard es el hermano de Andy Bogard ambos eran huérfanos adoptados por Jeff Bogard. El se refiere a menudo como La leyenda del lobo hambriento (Garou Densetsu significa leyenda del lobo hambriento). tiene una mascota mono llamado Ukee (la mascota anterior de SNK antes de Terry.<br><br> 
        Terry tiene un don para la puntuacion del baloncesto lo que explica la creación de su movimiento de alimentacion Dunk."></Card>

        <Card 
          img={kyo} 
          color="orange"
          name="Kyo Kusanagi" 
          description="Kyo Kusanagi es uno de los personajes principales de la entrega de SNK Playmore The King of Fighters; (el héroe eterno de KOF según los desarrolladores) debutando en el torneo del año 1994 como líder del equipo de Japón. Habiendo ganado los torneos KOF del año '94 hasta el '97, teniendo 4 de ellos y siendo el que más ha ganado. También es el rival de Iori Yagami y K', ademas de ser uno de los personajes de la famosa 'Band of fighters'"></Card>
      </div>
      <Footer description="&copy; Galería de imágenes de personajes correspondientes a distintas franquicias."></Footer>
    </>
  );
}

export default App;