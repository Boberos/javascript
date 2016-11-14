
//example 1

var listofnumbers = [')','!','@','#','$','%','^','&','*','9'];
var id1 = document.getElementById('1');

for (var item in listofnumbers) {
	
		id1.innerHTML += 'key: shift + '+'&nbsp;'+item+' give you >> '+'&nbsp;'+'&nbsp;'+
		'" '+listofnumbers[item]+' "'+'&nbsp;'+'\n'+'</br>';
		
	}

//example 2
var text =  "A b C d E f G h I j K l m N o P";
var id2 = document.getElementById('2');
id2.innerHTML +='Orginal text: '+text+'</br>';
text = text.toUpperCase();
id2.innerHTML += 'to Upper Case: '+text+'</br>';
text = text.toLowerCase();
id2.innerHTML += 'to Lower Case: '+text+'</br>';


//example 3
var arrg = [];
arrg.push ( "Arrgh");
arrg.push ("argh","arggh");
id3 = document.getElementById('3');
id3.innerHTML +='display [] :  '+ arrg+'</br>';
id3.innerHTML +='   .join() :  '+ arrg.join(" ")+'</br>';
id3.innerHTML +='    .pop() :  '+ arrg.pop()+'</br>';
id3.innerHTML +='display [] :  '+ arrg+'</br>';

//example 4 

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
console.log('------------------------ example 4 ------------------------');
console.log('object1 = {value: 10} ');
console.log('object2 = object1 ');
console.log('object3 = {value: 10}');
console.log('----------------------------------------------------------');
console.log('object1 == object2 ?  '); console.log(object1 == object2);
console.log(' ');
console.log('object1 == object3 ?  '); console.log(object1 == object3);
console.log('----------------------------------------------------------');
object1.value = 15;
console.log('object1.value = 15 ');
console.log('object2.value :  '+object2.value);
console.log('object3.value :  '+object3.value);
console.log('-------------------- end of example 4 --------------------');

//example 5
console.log('------------------------ example 5 ------------------------');
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(journal);
console.log('-------------------- end of example 5 --------------------');