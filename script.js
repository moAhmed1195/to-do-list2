

$(document).ready(function () {
    
  $("#btn").click(function(){
    $(".tasks").append(`<div class="createdTask"></div>`);
    $(".createdTask").last().append(`<span calss="addTask">${$("input[name=task]").val()}</span>`);
    $(".createdTask").last().append(`<button class="done">done</button>`);
      $(".createdTask").last().append(`<button class="delete">delete</button>`);

      $("span").css({
          
          "position": "absolute",
          "left": "0px",
          "padding": "10px",
      
      });
      $(".delete").css({
          "position": "absolute",
          "right": "0px", 
          "text-align" :"center"
      })
      
      
    $(".done").click(function () {
        $(this).parent().css("background-color","red");   
    });
    $(".delete").click(function () {
        $(this).parent().remove();   
    });
     
  });

  
});

