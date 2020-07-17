// feetToMile

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(1);
console.log(result); //0.0001893939393939394

// woodCalculator

function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

var result = woodCalculator(2, 2, 2);
console.log(result); //18

//brickCalculator

function brickCalculator(floor) {

    var bricksPerFeet = 1000;
    var totalBricksUpto10 = 10 * 15 * bricksPerFeet;
    var totalBricksUpto20 = 10 * 12 * bricksPerFeet;

    if (floor <= 10) {
        var totalBricks = floor * 15 * bricksPerFeet;
        return totalBricks;
    } 
    
    if (floor > 10 && floor <= 20) {
        var subTotalBricks = (floor - 10) * 12 * bricksPerFeet;
        totalBricks = totalBricksUpto10 + subTotalBricks;
        return totalBricks;
    } 

    if (floor > 20) {
        var subTotalBricks = (floor - 20) * 10 * bricksPerFeet;
        totalBricks = totalBricksUpto10 + totalBricksUpto20 + subTotalBricks;
        return totalBricks;
    } 
    
}

    var result = brickCalculator(35);
    console.log(result); //420000

//tinyFriend

function tinyFriend(arr) {
    var shortest = arr[0];
    for (var i = 0; i <arr.length; i++ ) {
        var currentArr = arr[i];
        if (currentArr.length < shortest.length) {
            shortest = currentArr;
        }
    }
    return shortest;
}

var shortestArr = tinyFriend(["Chowdhury", "Reza", "Muin", "Regan"]);
console.log(shortestArr); // Reza