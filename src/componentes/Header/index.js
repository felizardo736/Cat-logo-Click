import './Header.css'
import logo from '../../assets/img/logo.png'


function Header() {
    return(
        <div className='logo'>
            <img className='img' src={logo} alt='logo'/>
        </div>
    )
}

export default Header