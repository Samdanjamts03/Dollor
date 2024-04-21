// +prompt() -> garaas utga avah
//var jims = prompt("Jims oruulna uu");
// alert() -> sanamj tsonh
//alert("Tanii oruulsan jims!! " + jims);

//var too1 = +prompt("Too1 oruulna uu?");
//var too2 = +prompt("Too2 oruulna uu?");
//alert(too1*too2);

//var nas = +prompt("Ta heden ond tursun be?");
//alert(2024-nas);

//var too = +prompt("Kb devshuuleh toogoo oruulna uu?");
//alert(too*too);

//var too = +prompt("2 orontoi too oruulna uu");
//var too1 = too%10;
//var too2 = Math.floor(too/10);
//alert(too1+too2);

//var second = +prompt("Second oruulna uu?");
//var time = Math.floor(second/3600);
//var min = Math.floor((second%3600)/60);
//var sec = (second%3600)%60;
//alert(time+" hour "+min+" min "+sec+" sec ");

//var min = +prompt("Minute oruulna uu?");
//var sec = +prompt("Second oruulna uu?");
//alert(60*min+sec);

//--------------------

//var hour = +prompt("Tsagaa oruulna uu?");
//var min = +prompt("Minute oruulna uu?");
//var sec = +prompt("Second oruulna uu?");
//alert(3600*hour+60*min+sec);

//var day = +prompt("Tsagaa ouulna uu?");
//var da = Math.floor(day/24)
//var hour =(day%24);
//alert(da+" Day "+hour+" hour ");

//var day = +prompt("Ta honogoo oruulna uu?");
//var hour = +prompt("ta tsagaa oruulna uu?");
//alert(24*day+hour);

//var years = +prompt("Ta saraa oruulna uu?")
//var year = Math.floor(years/12);
//var month = (years%12);
//alert(year+" year "+month+" month ")

//var year = +prompt("Ta jilee oruulna uu?");
//var month = +prompt("Ta saraa oruulna uu?");
//alert(12*year+month);
var input = document.getElementsByTagName("input")[0]
var p = document.getElementsByTagName("p")[0]
function dollor(){
	if(input.value==""){
		alert("Cannot be empty");
	}else if (input.value<0){
		p.style.color="red";
		p.innerText ="Tanii unen dun oilgogdohgui bn ";
	}else{
	var dolor = 3376 * input.value;
	p.innerText ="Your USA dollor Mongolia by : " + dolor;
	}
}
