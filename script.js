$(function () {
    $("#button").on("click", function(){
        var text = $("#text");
        text.val(text.val() + "after clicking");
    });
})

document.addEventListener("click", function(){
    document.getElementByClass("container").inputMode;
})
