/*
	WEB 303 Assignment 1 - jQuery
	{Jorge Luis De Los Santos Reyes}
*/
$(document).ready(function(){
	$('#yearly-salary, #percent').on('keyup', ()=>{
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();
		let amountToSpend = Number(salary) * Number(percent) * 0.01;
		$('#amount').text(`$${amountToSpend.toFixed(2)}`);
	});
});