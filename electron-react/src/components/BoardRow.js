import React, {Component} from 'react';
import BoardSpot from './BoardSpot';

class BoardRow extends Component {

    render() {

        let boardSpotArr = [];
        for (let i = 0; i < 10; i++) {
            boardSpotArr.push(<BoardSpot></BoardSpot>);
        }

        return (
            <div className="board-row">
                {boardSpotArr}
            </div>
        )
    }
}

export default BoardRow;