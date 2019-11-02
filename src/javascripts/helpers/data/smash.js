import machineData from './machineData';
import positionData from './positionData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => resolve(positions))
    .catch((error) => reject(error));
// 1. getMachines - returns first machine (hardcode)
// 2. use machineId to get all positions for that machine
// 3. use machineId to get all snack positions
// 4. use uid of snackPositions/positions to get available snacks for that machine
// 5. SMASH 'EM - return and array of positions (in order A1, A2, A3, B1....). so positions should have position.snack if a snack exists in that position
});

export default { getCompleteMachine };
