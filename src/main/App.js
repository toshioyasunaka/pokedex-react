import '../style/App.css'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import CardGrid from '../components/CardGrid'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Inputs />
            <CardGrid /> 
        </div>
    )
}

export default App