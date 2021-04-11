import React from 'react';
import styled from 'styled-components';
import circle from './images/circle.png';

const Node = styled.div`
    position: absolute;
`;

function Nodes() {
    return (
        <Node style={{width:40}}>
            <img src={circle} style={{width: '100%'}}></img>
        </Node>
    )
}

export default Nodes

