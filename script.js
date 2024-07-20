let age = prompt('ur age');

if (age < 18) {
    alert('No entry');
} else {
    let name = prompt('wahts ur name ');

    if (name.length < 8) {
        alert('Incorrect name');
    } else {
        alert('OK, come in');
    }
    
    console.log(name);
}