import React from 'react';
import './StoryGraph.css'
import Node from './Node';
import {Data} from './data';

function StoryGraph() {
    return (
        <div id="window">
            <div id="graph-container">
                <div id="node-layer">
                    <Node></Node>
                </div>
                <div id="line-layer">
                    
                </div>
            </div>
        </div>
    )
}

export default StoryGraph
