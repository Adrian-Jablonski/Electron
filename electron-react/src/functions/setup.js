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

}

// Ship len; 5, 4, 3, 3, 2

module.exports = {
    setSpotText,
    setSpotClassName,
    setColLetter,
    returnRandomNumb
}