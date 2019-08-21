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
        const randomSpot = returnRandomNumb(10) + "," + returnRandomNumb(10);
        if (spotsTaken.indexOf(randomSpot) === -1) {
            let newShip = createShip(spotsTaken, randomSpot, ships[shipNumb]);
            if (newShip !== false) {
                newShip[returnRandomNumb(newShip.length - 1)].forEach((ship) => {
                    spotsTaken.push(ship);
                })
                shipNumb ++;
            }
            // spotsTaken.push(randomSpot);
        }
    }
    return spotsTaken;
}



function createShip(spotsTaken, randomSpot, shipLength) {
    if (spotsTaken.indexOf(randomSpot) !== -1) {
        return false;
    }
    let shipSpotsX = [];
    let shipSpotsY = [];
    let randomSpotArr = randomSpot.split(',');
    let x = Number(randomSpotArr[0]);
    let y = Number(randomSpotArr[1]);
    let createXShip = (x + shipLength) <= 10;
    let createYShip = (y + shipLength) <= 10;
    for (let i = 0; i < shipLength; i++) {
        if (createXShip) {
            let newSpot = `${x + i},${y}`;
            if (spotsTaken.indexOf(newSpot)) {
                shipSpotsX.push(newSpot);
            }
            else {
                createXShip = false;
                shipSpotsX = [];
            }
        }
        if (createYShip) {
            let newSpot = `${x},${y + i}`;
            if (spotsTaken.indexOf(newSpot)) {
                shipSpotsY.push(newSpot);
            }
            else {
                createYShip = false;
                shipSpotsY = [];
            }
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
