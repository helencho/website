import React, { Component } from 'react';
import Button from '../elements/Button';
import Anchor from '../elements/Anchor';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Button text="Primary" />
                <p>I walked 5 miles in <Anchor text="Bear Mountain" /> yesterday.</p>
            </div>
        )
    }
}

export default Test;