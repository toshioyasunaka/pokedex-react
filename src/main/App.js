import '../style/App.css'
import Header from '../components/Header'
import Form from '../components/Form'
import CardGrid from '../components/CardGrid'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Form />
            <CardGrid />          
        </div>
    )
}

export default App