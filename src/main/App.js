import '../style/App.css'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import CardGrid from '../components/CardGrid'
import {FiltersProvider} from '../data/Context'

const App = () => {
    return (
        <div className='App'>
            <FiltersProvider>
                <Header />
                <Inputs />
                <CardGrid /> 
            </FiltersProvider>
        </div>
    )
}

export default App