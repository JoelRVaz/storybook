import React from 'react';
import './StoryGraph.css'
import Node from './Node';
import {chronology} from './data';


function StoryGraph() {
    const nodes = chronology[3].nodes;
    let nodes_elem =  nodes.map((node) => {
       return  <Node nodeattr={node}></Node>;
    });
    return (

        <div id="window">
            <div id="graph-container">
                <div id="node-layer">
                    {nodes_elem}
                </div>
                <div id="line-layer">
                    
                </div>
            </div>
        </div>
    )
}

export default StoryGraph
