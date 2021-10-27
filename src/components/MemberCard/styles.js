import styled from 'styled-components'

export const Container = styled.div`

        &:hover{
            transform: scale(1.1);
        }
        transition: .5s;
        padding: 1rem 0 1.2rem 0;
        border-radius: 20px;
        background-color: white;
        width: 11.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;

        span {
            margin-top: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
            color: #29A2FC;
            text-align: center;
        }

        img {
            width: 4.6rem;
            height: 4.6rem;
            border-radius: 50%;
            border: 2px solid #29A2FC;
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            a {
                color: #A49D9D;
                text-decoration: none;
                margin: 0 5px;
            }
        }

`;