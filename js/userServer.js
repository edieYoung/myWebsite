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
        function signupForm( e ){
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
                    $('#respond').html( "User " +user.firstName+" is added!" );
			        
                    
			    },
			    error: function( data){
			       alert(JSON.stringify(data));
			    }
			});
            e.preventDefault();
        }
        $('#signup').submit( signupForm );
    })(jQuery);

(function($){
        function updateForm( e ){
            $.ajax({
                url: 'http://localhost:4567/user/'+$('#changeid').val(),
                dataType: 'json',
                type: 'put',
                contentType: 'application/json',
                traditional: true,
                data: JSON.stringify(
                    {"id": $("#changeid").val(), 
                    "firstName": $("#changefirst").val(), 
                    "lastName": $("#changelast").val(),
                    "email": $("#changeemail").val()
                }),
                success: function( data ){

                    var json = JSON.parse(JSON.stringify(data));
                    if(json.status=="ERROR"){
                        $('#respond').html( json.message);
                    }else{
                        var user = JSON.parse(json.message);
                        $('#respond').html( "User " +user.firstName+" is updated!" ); 
                    }     
                },
                error: function( data){
                   alert(JSON.stringify(data));
                }
            });
            e.preventDefault();
        }
        $('#update').submit( updateForm );
    })(jQuery);



