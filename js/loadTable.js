$(function(){
    $.ajax({
    	url:'http://localhost:4567/user',
    	type:'get',
    	dataType:'json',
    	success: function(data){
    		var response = JSON.parse(JSON.stringify(data));
    		var json = JSON.parse(JSON.stringify(response.data));
    		//alert(json[0].id);
    		for(var i in json){

    			var user = json[i];
    			
    			var tr;

    			tr = '<td>'+user.id+'</td>'+'<td>'+user.firstName+'</td>'+'<td>'+user.lastName+'</td>'+'<td>'+user.email+'</td>'+'<td>'+'<button class = "ti-close btn btn-warn btn-fill" onclick="del('+user.id+')"></button></td>';
    			
    			$("#userstable").append('<tr>'+tr+'</tr>');

    		}
    	}

    });
});

function del(id){
	$.ajax({
		url: "http://localhost:4567/user/"+id,
		datatype:'json',
		type:'delete',
		success: function(data){
			var json = JSON.parse(JSON.stringify(data));
			alert(json.message);
			location.reload();
		}

	});
}