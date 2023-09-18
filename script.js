/*
	WEB 303 Assignment 1 - jQuery
	{Jorge Luis De Los Santos Reyes}
*/
$(document).ready(function(){
	//adding an event listener
	$('#yearly-salary, #percent').on('keyup', ()=>{
		//declaring and assigning values to variables
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		//Calculating and saving amount to spend into amountToSpend
		let amountToSpend = Number(salary) * Number(percent) * 0.01;

		//Replacing inner html of amount span to have the updated amountToSpend
		$('#amount').text(`$${amountToSpend.toFixed(2)}`);
	});
});