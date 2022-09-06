




// given a circular list of gas stations, where we can go from a station i to a station i+1, and last one to first one
// find the index of the station from where we can srart to be able to traverse all the stations
// and go back to the initial station without running out of gas

// we can only go forward, 
//so we need to find the index of the station where we can start and come back to the initial station 
//after traversing all the stations without gas being negative

//the gas tank starts empty
//gas[i] is the amount of gas we have at station i
//cost[i] is the amount of gas we need to go from station i to i+1


const traverseArrayCircularly = (gas, cost, initialStation) => {
    let n = gas.length;
    let availableGas = 0
    let i = initialStation
    let traversingStarted = false
    while (i != initialStation || !traversingStarted) {
        traversingStarted = true
        availableGas += gas[i] - cost[i]
        if (availableGas < 0) {
            return false
        }
        i = (i + 1) % n
        console.log(i);
    }
    return true
}


const gasStationCall = (gas, cost) => {
    for (let i = 0; i < gas.length; i++) {
        if (traverseArrayCircularly(gas, cost, i)) {
            return i
        }
    }
    return -1
}


var gas = [1, 5, 3, 3, 5, 3, 1, 3, 4, 5]
var cost = [5, 2, 2, 8, 2, 4, 2, 5, 1, 2]

console.log(gasStationCall(gas, cost));


//---------------------------------------an optimal solution by syphh-------------------------------//

// const gas_station = (gas, cost) => {
//     let remaining = 0
//     let prev_remaining = 0
//     let candidate = 0
//     for (i in range(len(gas))) {
//         remaining += gas[i] - cost[i]
//         if (remaining < 0) {
//             candidate = i + 1
//             prev_remaining += remaining
//             remaining = 0
//         }
//     }
//     if (candidate == len(gas) || remaining + prev_remaining < 0) {
//         return -1
//     }
//     else {
//         return candidate
//     }
// }

