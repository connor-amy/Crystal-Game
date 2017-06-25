//Only executes code after the document loaded
$(document).ready(function(){

	//Current user score
	var score = 0;
	//Current target score
    var targetScore = Math.floor(Math.random() * 102) + 19;
	//Current wins
	var wins = 0;
	//Current losses
	var losses = 0;

	//The scores of the crystals between 1 and 12
    var crystalOneScore = Math.floor(Math.random() * 12) + 1;
    var crystalTwoScore = Math.floor(Math.random() * 12) + 1;
    var crystalThreeScore = Math.floor(Math.random() * 12) + 1;
    var crystalFourScore = Math.floor(Math.random() * 12) + 1;

	$("#targetScore").html("Target Score: " + targetScore);

	$("#crystalOne").click(function(){ 
		
		score += crystalOneScore;
		updateScore();
			
	});


	$("#crystalTwo").click(function(){ 
		
		score += crystalTwoScore;
		updateScore();

	});


	$("#crystalThree").click(function(){ 
		
		score += crystalThreeScore;
		updateScore();

	});


	$("#crystalFour").click(function(){ 
		
		score += crystalFourScore;
		updateScore();

	});



	/*Functions:*/

	//Updates the scores
	function updateScore()
	{

		if(score == targetScore)
		{
			wins += 1;
			$("#wins").html("Wins: " + wins);
			$("#winOrLose").html("You won!");
			getNewValues();
		}

		else if(score > targetScore)
		{
			losses += 1;
			$("#losses").html("Losses: " + losses);
			$("#winOrLose").html("You lost!");
			getNewValues();
		}

		else if(score < targetScore)
		{
			$("#score").html("Score: " + score);
		}


	}



	//Gets new values for the crystals, as well as a new target score
	function getNewValues()
	{
		targetScore = Math.floor(Math.random() * 101) + 19;
		score = 0;
		crystalOneScore = Math.floor(Math.random() * 11) + 1;
		crystalTwoScore = Math.floor(Math.random() * 11) + 1;
		crystalThreeScore = Math.floor(Math.random() * 11) + 1;
		crystalFourScore = Math.floor(Math.random() * 11) + 1;

		$("#targetScore").html("Target Score: " + targetScore);
		$("#score").html("Score: " + score);
	}
});