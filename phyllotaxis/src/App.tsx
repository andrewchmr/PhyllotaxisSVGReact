import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface AppState {
    n: number;
}

const c = 8;

class App extends React.Component<{}, AppState> {

    constructor() {
        super({});

        this.state = {
            n: 0
        }
    }

    toDegrees(angle: number) {
        return angle * (180 / Math.PI);
    }

    componentDidMount() {
        setInterval(() => this.update(), 10);
    }

    update() {
        this.setState({n: this.state.n + 1});
    }

    getXY(n: number) {
        const a = n * 137.5;
        const r = c * Math.sqrt(n);

        const x = r * Math.cos(this.toDegrees(a)) + window.innerWidth / 2;
        const y = r * Math.sin(this.toDegrees(a)) + window.innerHeight / 2;

        return {x: x, y: y};
    }

    public render() {

        let circles = [];
        for (let i = 0; i < this.state.n; ++i) {
            circles.push(<circle stroke={'black'} fill={`rgb(${i % 256}, ${i % 256}, ${i % 256})`} r={7}
                                 cx={this.getXY(i).x} cy={this.getXY(i).y}
                                 key={i}/>)
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Phyllotaxis (SVG + React)</h1>
                </header>
                <p className="App-intro"/>
                <svg style={{backgroundColor: 'black'}} preserveAspectRatio="xMinYMin meet"
                     viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
                    {circles}
                </svg>
            </div>
        );
    }
}

export default App;
