import React, {Component} from 'react';

class BoardSpot extends Component {

    state = {

    }

    clickSpot(e) {
        console.log("Spot Clicked");
    }

    render() {
        return(
            <button onClick={(e) => this.clickSpot(e)} className="board-spot"></button>
        )
    }
}

export default BoardSpot;