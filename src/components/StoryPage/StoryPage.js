import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoryGraph from '../StoryGraph/StoryGraph';

function StoryPage() {
    return (
        <div>
            <StoryGraph></StoryGraph>
            <BrowserRouter>
            
            </BrowserRouter>
        </div>
    )
}

export default StoryPage
