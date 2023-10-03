//Asignment 3 By Jorge De Los Santos Reyes

//First method to get data using the getJSON method
const getJsonData = () =>{
    $.getJSON( "team.json", (data)=>{
        //lopping through the array returned
        $.each(data, ( key, val )=> {
            $(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`).appendTo("#team");
        });  
    });
}

//Second method to get data but using ajax method
const makeAjaxRequest = () =>{
    $.ajax({
        url: "team.json",
        //Before sending request we want load message to show up
        beforeSend: ()=> {
            $("<p>Loading...</p>").appendTo("#team");
        }
    })
        //This will execute if successfull call is made
        .done((data)=> {
            //Setting timeout to delay displaying the result and wait 3 seconds with the loading message
            setTimeout(()=>{
                $("#team").empty();
                $.each(data, ( key, val )=> {
                    $(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`).appendTo("#team");
                });  
            },3000)
        })
        //This will execute in case of failure
        .fail(()=>{
            $("#team").empty();
            $("<p>Data could not be retrieved!!!</p>").appendTo("#team");
        })
}
$(document).ready(function(){
	// getJsonData();
    makeAjaxRequest();
});
