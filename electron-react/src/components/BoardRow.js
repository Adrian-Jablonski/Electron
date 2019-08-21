import React, {Component} from 'react';
import BoardSpot from './BoardSpot';

class BoardRow extends Component {

    render() {
        const {row, board, clickSpot} = this.props;
        let boardSpotArr = [];

        for (let i = 0; i <= 10; i++) {
            let spotData = null;
            if (row !== 0 && i !== 0) {
                spotData = board[String.fromCharCode(i + 64) + "" + row];
            }
            boardSpotArr.push(<BoardSpot
                key={i}
                row={row}
                col={i}
                spotData={spotData}
                clickSpot={clickSpot}
            ></BoardSpot>);
        }

        return (
            <div className="board-row">
                {boardSpotArr}
            </div>
        )
    }
}

export default BoardRow;