import React, { Component } from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Container } from 'reactstrap'

class App extends Component {
  constructor() {
    super()

    extendObservable(this, {
      counter: 0,
    })
  }

  onIncrement = () => {
    this.counter++
  }

  onDecrement = () => {
    this.counter--
  }

  render() {
    return (
      <Container>
        {this.counter}

        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </Container>
    )
  }
}

export default observer(App)
