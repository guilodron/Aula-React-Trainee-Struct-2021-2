import MemberCard from "../MemberCard"
import { Container } from "./styles"

const Members = ({members}) => {
    return (
        <Container>
            {members.map((item, index) => (
                <MemberCard key={index} index={index} nome={item} />
            ))}
        </Container>
    )
}

export default Members