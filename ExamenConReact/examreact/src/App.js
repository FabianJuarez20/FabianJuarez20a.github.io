import Animals from './components/Animals'
import Habitats from './components/Habitats'
import Zoo from './components/Zoo'
import './App.css'

function App() {

    return (<div className='Principal'>
        <div className='contenido'>
            <Animals nombre ="Charlie" especie ="Caiman" edad ="10"   />
            <Habitats habitat ="Selva" continente ="Africa" clima ="Calido" />
        </div>
        <div className='contenido'>
            <Animals nombre ="Perro" especie ="Perro" edad ="4"   />
            <Habitats habitat ="Monte" continente ="America" clima ="Arido" />
        </div>
        <div className='contenido'>
            <Animals nombre ="Oso" especie ="Oso" edad ="15"   />
            <Habitats habitat ="Bosque" continente ="Europa" clima ="Humedo" />
        </div>
    </div>
    );
}

export default App;