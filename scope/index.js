const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        logValues(personB, 'A');
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          logValues(personC, 'B');
        }
      }

      personC = personA;

      logValues(personB, 'C');
    }

    changePerson();

    logValues(personC, 'D');

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
}

module.exports = scope;