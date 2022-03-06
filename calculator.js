
$(document).ready(function(){


	//NUMBERS

	$(".number").click(function(){

		$("#input").val($("#input").val()+$(this).text());
	})
	
	// DELETE ALL
	$("#c_delete").click(function(){
		$("#input").val(" ");
	})


	//DELETE
	$("#delete").click(function(){

		var tex=$("#input").val();
		$("#input").val(tex.substring(0, tex.length - 1));
	})


	// PERCENT
	$("#percent").click(function(){

		$("#input").val($("#input").val()*0.01);
		
	})

	//DİVİDE
	$("#divison").click(function(){
		
		$("#input").val($("#input").val()+"/")
		
	})


	//MULTIPLE

	$("#multip").click(function(){
		
		$("#input").val($("#input").val()+"*")
		
	})

	
	//SUBSTRING

	$("#subs").click(function(){
		
		$("#input").val($("#input").val()+"-")
		
	})


	//ADDDITION

	$("#plus").click(function(){
		
		$("#input").val($("#input").val()+"+")
			
	})



	//EQUAL

	$("#equal").click(function(){

		var x=$("#input").val();

		$("#answer").append("="+eval(x).toFixed(2)+'<br />');
		$("#input").val("")
		$("#answer").scrollTop(75)

	})


	//COMMA

	$("#comma").click(function(){
		
		$("#input").val($("#input").val()+".")
			
	})


	//EXPAND

	$("#expand").click(function(){
		
		$(".dis").toggle(500);

		$("#input").toggleClass('wide');

		$("#answer").toggleClass('wide2');
		
		$("#calculator_div").toggleClass('wide3');
	});



	//EXPONENTIATON

	$("#exponentiation").click(function(){
		
		$("#input").val($("#input").val()+"**")
			
	})

	
	//SQUARE ROOT

	$("#sqrt").click(function(){
		
		$("#input").val(Math.sqrt($("#input").val()).toFixed(2));
			
	})


	//ONE OVER

	$("#one_div").click(function(){
		
		$("#input").val("1/"+$("#input").val())
			
	})
	

	//PI
	$("#pi").click(function(){
		
	
		$("#input").val(($("#input").val())*Math.PI.toFixed(3));
				
			
	})


	//LOGARITHM
	$("#log").click(function(){
		
	
		$("#input").val(Math.log10(($("#input").val())).toFixed(1));
				
			
	})


	
});

