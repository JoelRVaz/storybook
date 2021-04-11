import React from 'react';
import styled from 'styled-components';
import circle from './images/circle.png';

const Node = styled.div`
    position: absolute;
`;

function Nodes(props) {

    return (
        <Node style={{width:40, left:props.nodeattr.left, top: props.nodeattr.top}}>
            <img src={circle} style={{width: '100%'}}></img>
        </Node>
    )
}

export default Nodes

