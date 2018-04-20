$("document").ready(function() {

    // var back = document.getElementById("backToHome");
    // $(back).on("click" , function(){
    //     var x = document.getElementById("mainScreen");
    //     x.style.display = "block";
    //     var y = document.getElementById("balanceScreen");
    //     y.style.display = "none";
    // });
    
    //  var ticket = document.getElementById("transticket");
    // $(back).on("click" , function(){
    //     var x = document.getElementById("mainScreen");
    //     x.style.display = "none";
    //     var y = document.getElementById("");
    //     y.style.display = "block";
    // })
    
    //  var card = document.getElementById("transcard");
    // $(back).on("click" , function(){
    //     var x = document.getElementById("mainScreen");
    //     x.style.display = "none";
    //     var y = document.getElementById("");
    //     y.style.display = "block";
    // })
    
    
    //  var cont = document.getElementById("continue");
    //   $(cont).on("click" , function(){
    //     var x = document.getElementById("");
    //     x.style.display = "block";
    //     var y = document.getElementById("balanceScreen");
    //     y.style.display = "none";
    // });
    
    var one = document.getElementById("1");
    $(one).on("click", function(){
        var x = document.getElementById("added").value +="1";
    });
    
    var two = document.getElementById("2");
    $(two).on("click", function(){
        var x = document.getElementById("added").value +="2";
    });
    
    var three = document.getElementById("3");
    $(three).on("click", function(){
        var x = document.getElementById("added").value +="3";
    });
    
    var four = document.getElementById("4");
    $(four).on("click", function(){
        var x = document.getElementById("added").value +="4";
    });
    
    var five = document.getElementById("5");
    $(five).on("click", function(){
        var x = document.getElementById("added").value +="5";
    });
    
    var six = document.getElementById("6");
    $(six).on("click", function(){
        var x = document.getElementById("added").value +="6";
    });
    
    var seven = document.getElementById("7");
    $(seven).on("click", function(){
        var x = document.getElementById("added").value +="7";
    });
    
    var eight = document.getElementById("8");
    $(eight).on("click", function(){
        var x = document.getElementById("added").value +="8";
    });
    
    var nine = document.getElementById("9");
    $(nine).on("click", function(){
        var x = document.getElementById("added").value +="9";
    });
    
    var zero = document.getElementById("0");
    $(zero).on("click", function(){
        var x = document.getElementById("added").value +="0";
    });
    
    var dot = document.getElementById("dot");
    $(dot).on("click", function(){
        var x = document.getElementById("added").value +=".";
    });
    
    var cancel = document.getElementById("X");
    $(cancel).on("click", function(){
        var x = document.getElementById("added").value ="$";
    });
    
//number pad functions
    var i = 0;
$('.keys').on('click', 'li', function() {
  if(i<4){
    var num = $(this).data('number')
    //document.getElementById("myPsw").value = num;
    
$('#myPsw').val($('#myPsw').val() + num);
    //var x = document.getElementById("#myPsw").value;
    //document.getElementById("myPsw").innerHTML = num;
    console.log($('#myPsw').val.length);}
  i++;});
 
});
