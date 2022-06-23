const fruits = ["Apple","Mango","Banana","Cherry"];

document.getElementById("fruits").innerHTML = fruits.toString();
document.getElementById("fruits1").innerHTML = fruits.join(" : ");
document.getElementById("fruits2").innerHTML = fruits.pop(); // pop will remove last element from the array

//this will push an element in array
fruits.push("Kiwi");
document.getElementById("fruits3").innerHTML = fruits;

//to merge two arrays
const chocolates = ["DairyMilk","Kitkat","Perk"];
const mix = fruits.concat(chocolates);
document.getElementById("fruits4").innerHTML = mix;

//to sort array
const fruits1 = ["Apple","Mango","Banana","Cherry"];
fruits1.sort;
document.getElementById("fruits5").innerHTML = fruits1;

