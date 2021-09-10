// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    border: 1px solid black;
    /* width: 60%; */
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .character-div {
        border: 1px solid green;
    }
`

export default function CharacterList({name}) {
    return (
        <StyledCharacter>
            <div className='character-div'>
                <h3>{name}</h3>
                {/* <button className='character-id'>{id}</button> */}
            </div>
        </StyledCharacter>
    )
}