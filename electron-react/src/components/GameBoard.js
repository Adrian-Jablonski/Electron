import React, { Component } from 'react';
import BoardRow from './BoardRow';

class GameBoard extends Component {
    render() {

        let boardRowArr = [];
        for (let i = 0; i < 10; i++) {
            boardRowArr.push(<BoardRow></BoardRow>);
        }

        return (
            <div id="gameboard">
                {boardRowArr}
            </div>
        )
    }
}

export default GameBoard;