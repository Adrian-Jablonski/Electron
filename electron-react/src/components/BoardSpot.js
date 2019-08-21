import React, {Component} from 'react';

const setSpotText = require('../functions/setup').setSpotText;
const setSpotClassName = require('../functions/setup').setSpotClassName;

class BoardSpot extends Component {

    mouseHover(e) {
        //console.log("Hovering on ")
    }

    render() {
        const {row, col, spotData, clickSpot} = this.props;

        let spotDataStatus = (spotData) ? spotData.status : '';
        let text = setSpotText(row, col, spotDataStatus);
        let spotClassName = setSpotClassName(row, col, spotDataStatus);
        
        

        return(
            <button onClick={() => clickSpot(spotClassName, text)} onMouseEnter={(e, row, col) => this.mouseHover(e)} className={spotClassName + ' spot'} disabled={(spotDataStatus) ? true : false}>{text}</button>
        )
    }
}

export default BoardSpot;