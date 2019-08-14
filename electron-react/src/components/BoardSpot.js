import React, {Component} from 'react';

class BoardSpot extends Component {




    mouseHover(e) {
        console.log("Hovering on ")
    }

    render() {
        const {row, col, spotData, clickSpot} = this.props;
        const colLetter = String.fromCharCode(col + 64);

        let text = ' ';
        console.log(spotData)
        let spotDataStatus = (spotData) ? spotData.status : '';
        console.log(col + "" + row + " : " + spotDataStatus)
        let spotClassName = 'board-spot';
        let disabled = false;
        if (spotDataStatus === null) {
            text = `${colLetter}${row}`
        }
        else {
            if (row !== 0 && col === 0) {
                text = row;
                spotClassName = 'board-heading';
            }
            else if (row === 0 && col !== 0) {
                text = colLetter;
                spotClassName = 'board-heading';
            }
            else if (row === 0 && col === 0) {
                text = 0
                spotClassName = 'board-heading';
            }
            else if (spotDataStatus === 'Hit') {
                spotClassName = 'spot-hit';
                disabled = true;
            }
            else if (spotDataStatus === 'Miss') {
                spotClassName = 'spot-miss';
                disabled = true;
            }
            else {
                text = `${colLetter}${row}`
            }
        }
        

        return(
            <button onClick={() => clickSpot(spotClassName, text)} onMouseEnter={(e, row, col) => this.mouseHover(e)} className={spotClassName + ' spot'} disabled={disabled}>{text}</button>
        )
    }
}

export default BoardSpot;