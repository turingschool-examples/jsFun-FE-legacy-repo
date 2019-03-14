scopeExercise() {
  let animal = 'dog';

  function getNewAnimal() {
    let animal = 'cat';

    if(animal === 'cat') {
      animal = 'dog';
      // Log A: animal
    }

    function feedAnimal() {
      if(animal === 'cat') {
        let animalTreat = 'sweet potato'
      }
    }
    
    // Log B: animalTreat

    // Log C: animal

    feedAnimal();
  }

  getNewAnimal();

  // Log D: animal

  const result = 'REPLACE WITH YOUR RESULT HERE';
  return result;

  // Annotation:
  // Write your annotation here as a comment
}