const classrooms = [
  { roomLetter: 'A', program: 'FE', capacity: 32 },
  { roomLetter: 'B', program: 'BE', capacity: 29 },
  { roomLetter: 'C', program: 'FE', capacity: 27 },
  { roomLetter: 'D', program: 'BE', capacity: 30 },
  { roomLetter: 'E', program: 'FE', capacity: 22 },
  { roomLetter: 'F', program: 'BE', capacity: 19 },
  { roomLetter: 'G', program: 'FE', capacity: 29 },
  { roomLetter: 'H', program: 'BE', capacity: 18 }
];

module.exports = {
  classrooms
};

 classrooms.reduce((newObj, currentVal) => {
  if (currentVal.program === 'FE'){
    newObj.feCapactiy += currentVal.capacity
  } else {
    newObj.beCapactiy += currentVal.capacity
  }
  return newObj
  
 },{})