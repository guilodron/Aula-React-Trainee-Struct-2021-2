import { useState } from "react";
import { Container } from "./styles";

const Input = ({addMember}) => {

    const [input, setInput] = useState('');

    return (
        <Container>
            <input onChange={setInput} placeholder='Digite o nome do membro' />
            <button onClick={() => addMember(input.target.value)}>Adicionar</button>
        </Container>
    );
}

export default Input