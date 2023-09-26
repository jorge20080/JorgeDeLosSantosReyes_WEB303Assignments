// WEB303 Assignment 2
// Jorge De Los Santos Reyes - W0826009

$(document).ready(function(){
	$('#prospect, #convert, #retain').on('click', (e)=>{
        $("#content").hide().empty();
		var xhr = new XMLHttpRequest;
        switch(e.target.id){
            case "prospect":
                xhr.open('GET','prospect.html',true);
                break;
            case "convert":
                xhr.open('GET','convert.html',true);
                break;
            default:
                xhr.open('GET','retain.html',true);
                break;
        }
        xhr.onload = function() {
            if(this.status=== 200) {
                let el = document.getElementById("content");
                el.innerHTML=xhr.responseText;
            }
        }   
        $("#content").fadeIn(500);
        xhr.send();
	});
});