let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(person) {
    return people.filter( p => p!=person);
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
