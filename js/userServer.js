// function sendData(){
//     $.ajax({
//         url:'http://localhost:4567/user',
//         type: 'POST',
//         data: {
//             id:$('phone').val(), 
//             firstName: $('first').val(),
//             lastName: $('last').val(), 
//             email:$('email').val()
//         },
//         dataType: 'json',
//         success: function(data){alert(data);},
//         failure: function(errMsg) {
//             alert(errMsg);
//         }
//     });
// }

(function($){
        function processForm( e ){
            $.ajax({
                url: 'http://localhost:4567/user',
                dataType: 'json',
			    type: 'post',
			    contentType: 'application/json',
			    traditional: true,
			    data: JSON.stringify(
                    {"id": $("#phone").val(), 
                    "firstName": $("#first").val(), 
                    "lastName": $("#last").val(),
                    "email": $("#email").val()
                }),
			    success: function( data ){
                    var json = JSON.parse(JSON.stringify(data));
                    var user = JSON.parse(json.message);
			        alert("User " +user.firstName+" is added!");
                    
			    },
			    error: function( data){
			       alert(JSON.stringify(data));
			    }
			});
            e.preventDefault();
        }
        $('#signup').submit( processForm );
    })(jQuery);


