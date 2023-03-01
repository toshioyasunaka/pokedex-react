import '../style/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Logo Pokédex" className='header__pokemon-logo' />
            <img src="https://4.bp.blogspot.com/-NClwQIrF9dw/UKZtlzh3BUI/AAAAAAAADIU/UJJlJhrQRHo/s1600/Pokedex_DP.png" alt="Pokedex" className='header__pokedex' />
        </div>
    )
}

export default Header