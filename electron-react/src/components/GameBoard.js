import React, { Component } from 'react';
import BoardRow from './BoardRow';

const returnRandomNumb = require('../functions/setup').returnRandomNumb;
const returnRandomShipPositions = require('../functions/setup').returnRandomShipPositions;

class GameBoard extends Component {
    state = {
        board: []
    }

    componentWillMount() {
        this.restartGame();
    }

    clickSpot = (spotClassName, spot) => {
        if (spotClassName === 'board-spot') {

            this.setState(prevState => ({
                board: {
                    ...prevState.board,
                    [spot]: {
                        ...prevState.board[spot],
                        status: (prevState.board[spot].hasShip) ? 'Hit' : 'Miss'
                    }
                }
            }));
        }
    }

    revealAll = () => {
        let boardLen = document.getElementsByClassName("board-spot").length;
        for (let i = 0; i < boardLen; i++) {
            document.getElementsByClassName("board-spot")[i].click();
        }
    }

    restartGame = () => {
        const spotsTaken = returnRandomShipPositions().sort();
        console.log(spotsTaken)
        let board = {};
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                const colLetter = String.fromCharCode(j + 64);
                board[colLetter + i] = {
                    "status": null,
                    "hasShip": spotsTaken.indexOf(`${i},${j}`) !== -1
                }
            }
        }

        this.setState({ board });
    }

    render() {

        let boardRowArr = [];
        for (let i = 0; i <= 10; i++) {
            boardRowArr.push(<BoardRow
                key={i}
                row={i}
                board={this.state.board}
                clickSpot={this.clickSpot}
            ></BoardRow>);
        }

        return (
            <div>
                <div id="gameboard">
                    {boardRowArr}
                </div>
                <div>
                    <button onClick={() => this.restartGame()}>Restart Game</button>
                </div>
                <br></br>
                <div>
                    <button onClick={() => this.revealAll()}>Reveal All</button>
                </div>
            </div>
        )
    }
}

export default GameBoard;