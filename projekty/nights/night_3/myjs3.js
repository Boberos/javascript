"strict mode"

var person1 = { toLocaleString : function() {return "menelaos"; },
				toString : function() {return "menelaos"; }
};

var person2 = { toLocaleString : function() {return "Grigorios"; },
toString : function() {return "Greg"; }
};


var people =[person1,person2];
alert(people);
alert(people.toString());
alert(people.toLocaleString());