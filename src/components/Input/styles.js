import styled from 'styled-components'

export const Container = styled.div`
    height: 3.25rem;
    margin: 3.5rem auto 0 auto;
    max-width: 47rem;
    display: flex;

    input {
        flex: 1;
        border-radius: 1rem 0 0 1rem;
        border: none;
        font-size: 1.5rem;
        padding: 0 1rem;
    }
    
    button {
        width: 10rem;
        border: none;
        border-radius: 0 1rem 1rem 0;
        background-color: #29A2FC;
        color: white;
        font-size: 1.5rem;
    }
`;  