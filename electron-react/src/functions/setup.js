function setSpotText(row, col, spotDataStatus) {
    if (spotDataStatus) {
        return null;
    }

    if (row !== 0 && col === 0) {
        return row;
    }
    else if (row === 0 && col !== 0) {
        return setColLetter(col);
    }
    else if (row === 0 && col === 0) {
        return 0
    }
    else {
        return `${setColLetter(col)}${row}`
    }
}

function setSpotClassName(row, col, spotDataStatus) {
    if (row === 0 || col === 0) {
        return 'board-heading';
    }
    else if (spotDataStatus === 'Hit') {
        return 'spot-hit';
    }
    else if (spotDataStatus === 'Miss') {
        return 'spot-miss';
    }
    else {
        return 'board-spot';
    }

}

function setColLetter(col) {
    return String.fromCharCode(col + 64);
}

function returnRandomNumb(numb) {
    return Math.ceil(Math.random() * numb);
}

function returnRandomShipPositions() {
    let ships = [5, 4, 3, 3, 2];
    let shipNumb = 0;
    let totalShipSpots = ships.reduce((sum, numb) => {
        return sum + numb;
    })
    let spotsTaken = [];

    while (spotsTaken.length < totalShipSpots) {
        let randomSpot = returnRandomNumb(10) + "," + returnRandomNumb(10);
        if (spotsTaken.indexOf(randomSpot) === -1) {
            spotsTaken.push(randomSpot);
            //checkFreeShipBuildingSpots(spotsTaken, randomSpot, ships[shipNumb])
        }
    }
    console.log(spotsTaken);
    return spotsTaken;
}

// function checkFreeShipBuildingSpots(spotsTaken, randomSpot, shipLength) {
//     let consideredSpots = [];

//     let randomSpotArr = randomSpot.split(',');
//     console.log(randomSpotArr);
//     for (let i = randomSpot[0]; i < randomSpot[0] + shipLength; i++) {
//         let spots = [];
//         if ()
//     }
//     //TODO: Set up ship spots aligned horizontally or vertically depending on available spots. Currently spots are being set randomly. Check if spots are available to the right or down only



    
// }

module.exports = {
    setSpotText,
    setSpotClassName,
    setColLetter,
    returnRandomNumb,
    returnRandomShipPositions
}