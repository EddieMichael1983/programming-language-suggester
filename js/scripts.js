$(document).ready(function() {
  $("#formOne").submit(function() {
    const usernameInput = $("input#username").val();
    const language1Input = $("input#language1").val();
    const language2Input = $("input#language2").val();
    const language3Input = $("input#language3").val();
    const language4Input = $("input#language4").val();
    const language5Input = $("input#language5").val();
    
    
    $(".username").append(usernameInput);
    $(".language1").append(language1Input);
    $(".language2").append(language2Input);
    $(".language3").append(language3Input);
    $(".language4").append(language4Input);
    $(".language5").append(language5Input);
    
    $("#summary").show();

    event.preventDefault();
  });
});