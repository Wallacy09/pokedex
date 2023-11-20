import React from 'react';
import styled from 'styled-components';

export const BaseStatus = styled.div`
font-family: Poppins;
width: 380px;
height: 500px;
border-radius: 12px;
background-color: white;
display: flex;
justify-content: flex-start;
flex-direction: column;
padding: 20px;


@media only screen and (min-width: 768px) and (max-width: 1024px) {
    order: 2;
    
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
    order: 2;
}

@media only screen and (max-width: 480px) {
    width: 280px;
    height: 500px;
    order: 2;
}
`;

const Statbar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    p {
    font-size: 14px;
    color: black;
    font-weight: bold;
    width: 50%; 
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    right: 76%;

}
`;

const Number = styled.div `
    margin-left: 80px;
    
    
`;

const Stat = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    border-radius: 10px;
    height: 50%;
    background-color: #4caf50;
    text-align: right;
    margin-left: 4px;
    
`;

const Total = styled.div`
        font-weight: bold;
        margin-left: 76px;
`;

const BarraStatus = ({ pokemon }) => {
    return (
        <BaseStatus>
            <h1>Base Stats</h1>
            <Statbar>
                <p>HP </p>
                    <Number>{pokemon.stats[0].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[0].base_stat}%` }}>
                
                </Stat>
                
            </Statbar>
            <Statbar>
                <p>Attack</p>
                <Number>{pokemon.stats[1].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[1].base_stat}%` }}>
                </Stat>
                
            </Statbar>
            <Statbar>
                <p>Defense</p>
                <Number>{pokemon.stats[2].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[2].base_stat}%` }}>
                </Stat>
                
            </Statbar>
            <Statbar>
                <p>Sp.Atk</p>
                <Number>{pokemon.stats[3].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[3].base_stat}%` }}>
                </Stat>
                
            </Statbar>
            <Statbar>
                <p>Sp.Def</p>
                <Number>{pokemon.stats[4].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[4].base_stat}%` }}>
                </Stat>
                
            </Statbar>
            <Statbar>
                <p>Speed</p>
                <Number>{pokemon.stats[5].base_stat}</Number>
                <Stat style={{ width: `${pokemon.stats[5].base_stat}%` }}>
                </Stat>
                {/* <Barra><div className='barra'></div></Barra> */}
            </Statbar>
            <Statbar >
                <p>Total</p>
                <Total>
                    <div className='total'>{pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}</div>
                </Total>
            </Statbar>
        </BaseStatus>
    );
};

export default BarraStatus;