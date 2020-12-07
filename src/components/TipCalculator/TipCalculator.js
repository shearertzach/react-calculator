import React, { Component } from 'react'

// const obj = {
//     num1: 1,
//     num2: 2
// }

// function test({num1, num2}) {
//     console.log(num1, num2)
// }

// test(obj)

class TipCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            tipAmount: 0,
            split: 1
        }
    }

    render() {
        const { amount, tipAmount, split } = this.state // {amount, tipAmount, split} (Deconstruction)
        const tipTotal = amount * (tipAmount * 0.01)
        const billTotal = parseInt(amount) + parseFloat(tipTotal)
        const splitTotal = split ? billTotal / split : billTotal / 1
        return (
            <div>
                <h1>Tip Calculator</h1>
                <form>
                    <h3>Bill Amount</h3>
                    <input
                        type='number'
                        placeholder='Bill Amount'
                        value={amount}
                        onChange={(e) => {
                            this.setState({
                                amount: e.target.value
                            })
                        }}
                    />
                    <h3>Tip Amount</h3>
                    <input
                        type='number'
                        placeholder='Tip Percentage'
                        value={tipAmount}
                        onChange={(e) => {
                            this.setState({
                                tipAmount: e.target.value
                            })
                        }}
                    />
                    <h3>Split</h3>
                    <input
                        type='number'
                        placeholder='Split'
                        value={split}
                        onChange={(e) => {
                            this.setState({
                                split: e.target.value
                            })
                        }}
                    />
                </form>
                <h3>Your tip will be ${tipTotal.toFixed(2)}</h3>
                <h2>Total: ${billTotal.toFixed(2)}</h2>
                <h4>Total Per Person: ${splitTotal.toFixed(2)}</h4>
            </div>
        )
    }
}

export default TipCalculator