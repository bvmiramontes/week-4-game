$(document).ready(function() {

	crystals = ['assets/images/crystal1.png','assets/images/crystal2.png','assets/images/crystal3.png','assets/images/crystal4.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();
// There are 4 crystals. Each crystal should have a random hidden value between 1-12
	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			 if(!found)numbers[numbers.length]=randomnumber;
			}
	//Add the assigned random values to the crystal image so that when 'clicked', crystal displays random value	
			for (i = 0; i < numbers.length; i++) {
				var imageCrystal = $('<img>');
				imageCrystal.attr('data-num', numbers[i]);
				imageCrystal.attr('src', crystals[i]);
				//imageCrystal.attr('alt', 'crystals');
				imageCrystal.addClass('crystalImage');
				$('#crystals').append(imageCrystal);
			}
	}
	//Create new game. All variables = 0, but not including wins or losses. Set the number to guess to random number
	//between 19 and 120. When the counter = number to guess then you win, if the counter is over the number to guess then you lose. 
	function newGame() {
		counter = 0;
		$('#yourScore').text(counter);
		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}
		var numberToGuess = randomIntFromInterval(19,120);
		$('.value').text(numberToGuess);
		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));   
		    $('#yourScore').text(counter);
		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      newCrystals();
		      newGame();      
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});