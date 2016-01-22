/**	
	Author: Cody Snelling 
	Created: Jan. 7th, 2016
	Updated: Jan. 7th, 2016   
**/

var amountCorrect = 0;
var amountWriting = 0;
var score;

function chkQuiz();
{
	for(i = 1; i <2; i++)
	{
		var choices = document.getElementsByName("q" + i);
		for(j = 0; j < choices.length; j++)
		{
			var selection = choices[j];
			
			if(selection.value == "correct" && selection.checked) 
			{
				window.alert("Good job!");	
			}
			else if(selection.value == "wrong" && selection.checked)
			{
				window.alert("That was incorrect.");
			}
		}
	}
}	