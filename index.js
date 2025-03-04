// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  let scubberHeadquaters = 42;
  return Math.abs(pickupLocation - scubberHeadquaters);
}

function distanceFromHqInFeet(pickupLocation) {
  let block = 264;
  return distanceFromHqInBlocks(pickupLocation) * block;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    const charged = (2 * (distance - 400)) /100

    return charged;
  } else if ( distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
