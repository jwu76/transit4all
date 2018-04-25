
$("document").ready(function() {

    var one = document.getElementById("one");
    $(one).on("click", function(){
        var x = document.getElementById("added").value ="$1";
    });
    
    var one = document.getElementById("five");
    $(five).on("click", function(){
        var x = document.getElementById("added").value ="$5";
    });

    var one = document.getElementById("ten");
    $(ten).on("click", function(){
        var x = document.getElementById("added").value ="$10";
    });

    var one = document.getElementById("twenty");
    $(twenty).on("click", function(){
        var x = document.getElementById("added").value ="$20";
    });


    // var two = document.getElementById("two");
    // $(two).on("click", function(){
    //     var x = document.getElementById("added").value +="2";
    // });
    //
    // var three = document.getElementById("three");
    // $(three).on("click", function(){
    //     var x = document.getElementById("added").value +="3";
    // });
    //
    // var four = document.getElementById("four");
    // $(four).on("click", function(){
    //     var x = document.getElementById("added").value +="4";
    // });
    //
    // var five = document.getElementById("five");
    // $(five).on("click", function(){
    //     var x = document.getElementById("added").value +="5";
    // });
    //
    // var six = document.getElementById("six");
    // $(six).on("click", function(){
    //     var x = document.getElementById("added").value +="6";
    // });
    //
    // var seven = document.getElementById("seven");
    // $(seven).on("click", function(){
    //     var x = document.getElementById("added").value +="7";
    // });
    //
    // var eight = document.getElementById("eight");
    // $(eight).on("click", function(){
    //     var x = document.getElementById("added").value +="8";
    // });
    //
    // var nine = document.getElementById("nine");
    // $(nine).on("click", function(){
    //     var x = document.getElementById("added").value +="9";
    // });
    //
    // var zero = document.getElementById("zero");
    // $(zero).on("click", function(){
    //     var x = document.getElementById("added").value +="0";
    // });
    //
    // var dot = document.getElementById("dot");
    // $(dot).on("click", function(){
    //     var x = document.getElementById("added").value +=".";
    // });
    //
    // var cancel = document.getElementById("clr");
    // $(cancel).on("click", function(){
    //     var x = document.getElementById("added").value ="$";
    // });

//number pad functions
    var i = 0;
$('.keys').on('click', 'li', function() {
  if(i<4){
    var num = $(this).data('number')

$('#myPsw').val($('#myPsw').val() + num);
    console.log($('#myPsw').val.length);}
  i++;});

var addToCard = document.getElementById("doneAdding");
$(addToCard).on('click', function(){
  var total= document.getElementById("total");
  total.value = "$";
  var current = document.getElementById("currentInput");
  var currentValue = current.value;
  var currentValue2 = currentValue.substring(1);
  var currentFloat = parseFloat(currentValue2);
  var adding = document.getElementById("added");
  var addingValue = adding.value;
  var addingValue2 = addingValue.substring(1);
  var addingFloat = parseFloat(addingValue2);
  var totalAmount = currentFloat + addingFloat;
  var totalAmountFixed = totalAmount.toFixed(2);
  console.log(totalAmountFixed);
  total.value += totalAmountFixed;
});


});
