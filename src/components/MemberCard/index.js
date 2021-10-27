import {
    Container
} from './styles'

const MemberCard = ({nome, index}) => {
    return (
        <Container>
            <img src={`https://source.unsplash.com/random?profile&sig=${index}`} alt="perfil" />
            <span>{nome}</span>
            <div>
                <a href="https://github.com">GitHub</a>
                <a href="https://www.linkedin.com">LinkedIN</a>
            </div>
        </Container>
    )
}

export default MemberCard