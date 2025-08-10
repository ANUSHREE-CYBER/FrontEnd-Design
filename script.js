$(document).ready(function(){
    
    $(".btn").on("click", function(){
        $(this).text("ADDED ✅").css({"background":"#4CAF50","color":"white"});
        setTimeout(() => {
            $(this).text("ADD TO CART").css({"background":"white","color":"black"});
        }, 2000);
    });

    
    function floatEffect(element, range){
        $(element).animate({top: `+=${range}`}, 2000)
                  .animate({top: `-=${range}`}, 2000, function(){
                      floatEffect(element, range);
                  });
    }

    floatEffect(".e1", 15);
    floatEffect(".e2", 10);
    floatEffect(".e3", 12);
    floatEffect(".e4", 8);
});
