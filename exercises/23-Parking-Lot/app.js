

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking_state) {


  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };

  let parking_state_flat = parking_state.flatMap(x => x);

  parking_state_flat.forEach(p => {
    if (p == 1) {
      state.occupiedSlots++;
    }

    else if (p == 2) {
      state.availableSlots++;
    }

  });

  state.totalSlots = state.occupiedSlots + state.availableSlots;

  return state;
}


console.log(getParkingLotState(parking_state))