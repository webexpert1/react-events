import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';

const mapState = (state) => ({
    data: state.test.data
});

const actions = {
    incrementCounter,
    decrementCounter
}


class TestArea extends Component {
    
    render() {
        const { incrementCounter, decrementCounter, data} = this.props;
        return (
            <div>
              <h1>State data is: {data}</h1>
              <Button onClick={incrementCounter} positive content="Increment" />
              <Button onClick={decrementCounter} negative content='Decrement' />
            </div>
        )
    }
}

export default connect(mapState, actions)(TestArea);


