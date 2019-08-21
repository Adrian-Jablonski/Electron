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
        console.log(spotsTaken);
        let randomSpot = returnRandomNumb(10) + "," + returnRandomNumb(10);
        if (spotsTaken.indexOf(randomSpot) === -1) {
            spotsTaken.push(randomSpot);
        }
    }
    //console.log(spotsTaken);
    return spotsTaken;
}



function createShip(spotsTaken, randomSpot, shipLength) {
    let shipSpotsX = [];
    let shipSpotsY = [];
    let x = randomSpot[0];
    let y = randomSpot[1];
    let createXShip = (x + shipLength) <= 10;
    let createYShip = (y + shipLength) <= 10;
    for (let i = 0; i < shipLength; i++) {
        if (createXShip) {
            shipSpotsX.push([x + i, y]);
        }
        if (createYShip) {
            shipSpotsY.push([x, y + i]);
        }
    }


    if (createXShip && createYShip) {
        return [shipSpotsX, shipSpotsY];
    }
    else if (createXShip) {
        return [shipSpotsX];
    }
    else if (createYShip) {
        return [shipSpotsY];
    }
    return false;
}

module.exports = {
    setSpotText,
    setSpotClassName,
    setColLetter,
    returnRandomNumb,
    returnRandomShipPositions,
    createShip
    
}
