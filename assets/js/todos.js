// Add Click Effects to each LI's.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(e){
    if(event.which === 13){
        if ($(this).val() !== ""){
            var todoText = $(this).val();
            $(this).val("");
            // Add the new todos to the first line of the element.
            $("ul").prepend(`<li><span><i class="fas fa-trash-alt"></i> </span> ${todoText} </li>`);
            console.log("Enter key is pressed.");
        }
        
        // 
    }
});

$(".fa-edit").on("click", function(){
    $(".show").toggle(function(){
        // $(this).remove();
    });
});

$("li").on("mouseover", function(){
    $(".fa-trash-alt").fadeOut(2000);
});
