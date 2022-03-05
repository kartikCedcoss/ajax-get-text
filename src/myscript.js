$(document).ready(function(){
$('#btn').on('click',function(){

    $.ajax({
        url:"get.html",
        type :"GET",
        datatype:"text",
        success:function(data){
            $('#disp').append(data);
        },
        error:function(data){
            alert('you cannot read');
        }
    })



})


})