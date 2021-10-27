import {
    Container
} from './styles'
import Logo from '../../assets/logo.png'
const Header = () => {
    return (
        <Container>
            <img src={Logo} alt='logo' />
        </Container>
    )
}

export default Header
