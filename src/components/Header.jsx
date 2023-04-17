import '../style/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <section className="header__images">
                <img src="/header/pokedex_logo.png" alt="Logo Pokédex" className='header__pokedex-logo' />
                <img src="/header/pokedex.png" alt="Pokedex" className='header__pokedex' />
            </section>
        </header>
    )
}

export default Header