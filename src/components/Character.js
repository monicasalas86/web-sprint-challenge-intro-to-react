// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    opacity: 80%;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;

`

export default function CharacterList(props) {

    const person = props.props;
    const personList = person.map((swPerson) => {
        return (
            <StyledCharacter key={swPerson.id}>
                <h3>{swPerson.name}</h3>
                <p>{swPerson.birth_year}</p>
            </StyledCharacter>

        )
    })
    return personList;
}