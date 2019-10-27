// Code your solutions in this file
const namedPeople = [[ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise']

function writeCards(namedPeople) {

    let output = []
    let first = ['Lisa', 'Kaitlin', 'Jan' ]
    let response = "surprise"
    for (let i = 0; i < first.length; i++ ) {
        
        output.push(`Thank you, ${first[i]}, for the wonderful ${response} gift!`);

}

return output;
}

function countDown(number) {

    while ( number > 0 ) {
        console.log(number);
        number -= 1;
    }

    console.log(number);



}