//to sort by string
const names = ["Prerna","Ishita","Shruti","Anshika"];
names.sort();
document.getElementById("para1").innerHTML = names;


//to sort by numbers
// this compare funcion is used . So, it returns the values as positive, negative or zero according to the condition stated inside. 
// If the result is negative , a is sorted before b.
// If the result is positive , b is sorted before a.

const points = [30,20,50,10,60,100];
points.sort(

    function(a,b){
        return a-b;//for asc order
    }

);
document.getElementById("para2").innerHTML = points;
document.write("The lowest number in array is:"+ points[0]); 
document.write("The heighest number in array is:"+ points[5]);


points.sort(

    function(a,b){
        return b-a; //for des order
    }

);
document.getElementById("para3").innerHTML = points;



document.getElementById("para4").innerHTML =Math.random(); // this Math.random gives a random value between 0-1 including 0 and not 1.

function Function1(){

    points.sort(

       function random (a,b){

            return 0.5-Math.random(); // here same logic will apply 0.5 - any random value between 0-1 will return +ve or -ve according to which the array will be sorted in a random order.

       } 

    );

    document.getElementById("para5").innerHTML = points;
}

//sorting object arrays
const cars = [

    {type:"Volvo" , year:"2016"},
    {type:"Saab" , year:"2001"},
    {type:"BMW" , year:"2019"}

];
function sorting(a,b){

    return a.year-b.year;

}
cars.sort(sorting);

function displayCars(){

    for(i=0;i<cars.length;i++)
    {
        
        document.getElementsById("para7").innerHTML = 
        cars[i].type + " " + cars[i].year + "<br>"

    }
    
    

}
document.getElementById("para8").innerHTML = displayCars();