import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import terry from './assets/img/terry-bogard.png';
import kyo from './assets/img/kyo.png';
import deathstroke from './assets/img/death-stroke.png';
import v from './assets/img/v.png';
import velvet from './assets/img/velvet.png'
import yuri from './assets/img/yuri.png';
import lightning from './assets/img/lightning.png';
import ardyn from './assets/img/ardyn.png';

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React"></Header>
      <div className="container row py-5 align-items-center mx-auto">
        <Card 
          img={terry}
          origin="Fatal Fury" 
          color="red"
          name="Terry Bogard" 
          description="Terry Bogard es el protagonista de la saga de vídeojuegos Fatal Fury, co-protagonista en Garou Mark of the Wolves y personaje recurrente en The King of Fighters.<br><br>
        Terry Bogard es el hermano de Andy Bogard ambos eran huérfanos adoptados por Jeff Bogard. El se refiere a menudo como La leyenda del lobo hambriento (Garou Densetsu significa leyenda del lobo hambriento). tiene una mascota mono llamado Ukee (la mascota anterior de SNK antes de Terry.<br><br> 
        Terry tiene un don para la puntuacion del baloncesto lo que explica la creación de su movimiento de alimentacion Dunk."></Card>

        <Card 
          img={kyo}
          origin="The king of fighters" 
          color="#222"
          name="Kyo Kusanagi" 
          description="Kyo Kusanagi es uno de los personajes principales de la entrega de SNK Playmore The King of Fighters; (el héroe eterno de KOF según los desarrolladores) debutando en el torneo del año 1994 como líder del equipo de Japón. Habiendo ganado los torneos KOF del año '94 hasta el '97, teniendo 4 de ellos y siendo el que más ha ganado. También es el rival de Iori Yagami y K', ademas de ser uno de los personajes de la famosa 'Band of fighters'"></Card>

        <Card 
          img={deathstroke}
          color="orange"
          origin="DC comics"
          name="Death Stroke" 
          description="Deathstroke, originalmente conocido como Terminator, apareció por primera vez en 1980 en la segunda edición del libro New Teen Titans. Se introdujo originalmente como un mercenario que estaba finalizando los términos de un contrato realizado por su hijo, Devastador, pero rápidamente se convirtió en uno de los principales antagonistas de los Titanes. Deathstroke se convirtió rápidamente en uno de los favoritos de los fans. Más tarde es visto a menudo aliado con los Titanes contra amenazas mutuas. Deathstroke aparece en la serie animada Teen Titans usando sólo su primer nombre, Slade."></Card>

        <Card 
          img={v}
          origin="V the vendetta"
          color="black"
          name="V" 
          description="V es un personaje ficticio de la serie de cómics V de Vendetta, creado por Alan Moore y David Lloyd. V es un misterioso anarquista a quien se reconoce por su máscara de Guy Fawkes y ropa oscura. Según Moore, V puede ser tanto el protagonista como el antagonista de la historia; es el lector quien decide si es un héroe que lucha por una causa justa o simplemente un loco."></Card>

        <Card 
          img={velvet}
          origin="Tales of berseria"
          color="#ad2c4e"
          name="Velvet Crowne" 
          description="Velvet Crowe es la protagonista central de Tales of Berseria. Originalmente amable y familiar, los eventos de la Noche Escarlata tres años antes la convirtieron en una mujer enojada manchada por la venganza. Durante este tiempo, Velvet es una chica alegre, amable y cariñosa con una vida normal. Expresa la sobreprotección de su hermano pequeño e instantáneamente cae en ruinas cuando sus seres queridos son masacrados."></Card>

        <Card 
          img={yuri}
          origin="Tales of vesperia"
          color="#3e363d"
          name="Yuri Lowell" 
          description="Yuri es el protagonista principal del videojuego Tales of Vesperia. Es un espadachín que en el pasado fue un caballero hasta que desertó de su grupo para perseguir su propia senda.<br><br>Yuri y Flynn soñaron con ser Caballeros Imperiales para así cambiar el sistema y traer justicia al imperio, pero después de tres meses en servicio Yuri decidió desertar, pues no es alguien que guste de seguir órdenes, además de descubrir la corrupción que rodeaba al ejército imperial. Yuri trata de cargar con todos los problemas de la gente oprimida o en problemas, y no dudará en prestar su espada a cualquiera que lo necesite"></Card>

        <Card 
          img={lightning}
          origin="Final fantasy XIII"
          color="#df7b89"
          name="Lightning" 
          description="Esta solitaria mujer nunca comparte nada de su vida privada; de hecho, incluso su propio nombre es un misterio. Todos los demás la conocen simplemente como 'Lightning'. Joven de 21 años, mide 1.78 m, su color de pelo es rosa chicle y de ojos azules claros, nacida el 13 de mayo. Tras el fallecimiento de sus padres se cambia de nombre para olvidar esa etapa de su vida y seguir tirando junto con su hermana Serah. Ella estaba en el ejército de la Guardia hasta el dia de la Purga."></Card>

        <Card 
          img={ardyn}
          origin="Final fantasy XV"
          color="#6b281f"
          name="Ardyn Lucis Caelum" 
          description="Ardyn Lucis Caelum es el antagonista principal del videojuego Final Fantasy XV, apareciendo también en Final Fantasy XV: La película y como protagonista en Final Fantasy XV: Episode Ardyn. Es el astuto y jocoso canciller de Niflheim que maneja las operaciones políticas del imperio para el emperador Iedolas Aldercapt, siendo el responsable de la expansión de la infantería magitec de Verstael Besithia.<br><br>
          En los capítulos finales, se revela su relación con los cadentes y su auténtica identidad como antiguo rey de Lucis, quien tras dedicar su vida a purificar la Estepatía se vio corrompido por la misma y fue rechazado por la Santálita, que le consideró no merecedor de su poder. Deseoso de venganza, pretende destruir el linaje real de la familia Lucis."></Card>
      </div>
      <Footer description="&copy; Galería de imágenes de personajes correspondientes a distintas franquicias."></Footer>
    </>
  );
}

export default App;