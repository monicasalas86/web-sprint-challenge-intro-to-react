// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.div`
    /* border: 1px solid black;
    height: 80vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    opacity: 80%;
    border-radius: 5%;
    padding: 5px; */
    height: 100%;
    margin: 1% 40%;
    padding: 10px;
    border: 1px solid #b0a9a5;
    border-radius: 10px;
    color: #443e3e;
    background-color: #e0dcda;

`

export default function CharacterList(props) {

    const person = props.props;
    const personList = person.map((swPerson) => {
        return (
            <StyledCharacter key={swPerson.id}>
                <h3>{swPerson.name}</h3>
            </StyledCharacter>

        )
    })
    return personList;
}