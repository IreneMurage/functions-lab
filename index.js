// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    const hqLocation = 42;
    if (pickup > hqLocation) {
        return pickup - hqLocation;
    } else {
        return hqLocation - pickup;
    }
}


function distanceFromHqInFeet(pickup) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickup) * feetPerBlock;
}


 function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let blocksTravelled;

    if (destination > start) {
        blocksTravelled = destination - start;
    } else {
        blocksTravelled = start - destination;
    }

    return blocksTravelled * feetPerBlock;
}

 function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}
