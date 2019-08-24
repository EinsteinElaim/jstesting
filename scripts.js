//var age = parseInt(prompt('How old are you?')); //converting the age input to integer
//  if (age = 18) {
//      alert('you can drive a small car');
//  } else if (age > 18 && age <= 24) {
//      alert('you can drive a big car');
//  } else if (age > 24) {
//      alert('you can drive a truck');
//  } else {   
//      alert('you cant drive');
//  }
//var age = document.getElementById('event')
//event.preventDefault();
let age = document.getElementById('event').value;
 function driverVerifier(age){
    if (age == 18) {
        //alert('you can drive a small car');
        document.write("you can drive a small car")
    } else if (age > 18 && age <= 24) {
        //alert('you can drive a big car');
        document.write("you can drive a big car")
    } else if (age > 24) {
        //alert('you can drive a truck');
        document.write("you can drive a truck")
    } else {   
        //alert('you cant drive');
        document.write("you cant drive")
    }
 }

 driverVerifier(age)

// switch(age) {
//     case (age = 18):
//         console.log();
//         break;
//     case (age > 18 && age <24):
//         console.log();
//         break;
//     case (age > 24):
//         console.log();
//         break;
//     default:
//         console.log("You cant drive")
// }