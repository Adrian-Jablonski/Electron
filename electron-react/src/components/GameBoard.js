import React, { Component } from 'react';
import BoardRow from './BoardRow';

class GameBoard extends Component {
    state = {
        board: []
    }

    componentWillMount() {
        let board = {};
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                const colLetter = String.fromCharCode(j + 64);
                board[colLetter + i] = {
                    "status": null
                }
            }
        }

        this.setState({ board });
    }

    clickSpot = (spotClassName, spot) => {
        if (spotClassName === 'board-spot') {

            console.log("Spot Clicked " + spot);

            this.setState(prevState => ({
                board: {
                    ...prevState.board,
                    [spot]: {
                        ...prevState.board[spot],
                        status: 'Hit'
                    }
                }
            }));
        }
    }

    render() {

        let boardRowArr = [];
        for (let i = 0; i <= 10; i++) {
            boardRowArr.push(<BoardRow
                row={i}
                board={this.state.board}
                clickSpot={this.clickSpot}
            ></BoardRow>);
        }

        return (
            <div id="gameboard">
                {boardRowArr}
            </div>
        )
    }
}

export default GameBoard;