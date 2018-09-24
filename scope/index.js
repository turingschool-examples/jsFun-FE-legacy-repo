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
        console.log(personB, 'A');
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          console.log(personC, 'B');
        }
      }

      personC = personA;

      console.log(personB, 'C');
    }

    changePerson();

    console.log(personC, 'D');

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
}

module.exports = scope;