// Code your solution in this file!

const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(block){
    if (block > 42){
    return block - hq;
}   else if (block < 42) {
    return hq - block;
}
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * feet
}

function distanceTravelledInFeet (start, destination) {
    let walkDistance = Math.abs(destination - start)
    return walkDistance * feet
}
function calculatesFarePrice (start, destination) {
    let n = distanceTravelledInFeet (start, destination)
    if (n<=400) {
        return 0;
    } else if (n>400 && n<=2000) {
        return (n-400)*.02;
    } else if (2500>n && n>2000) {
        return 25;
    } else if (n>2500) { 
        return 'cannot travel that far'
    } 
}