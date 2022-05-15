var player_1_username = localStorage.getItem("Player_1");
var player_2_username = localStorage.getItem("Player_2");
document.getElementById("player_1_label").innerHTML = player_1_username + " : ";
document.getElementById("player_2_label").innerHTML = player_2_username + " : ";

var score_1 = 0;
var score_2 = 0;
document.getElementById("score_1").innerHTML = score_1;
document.getElementById("score_2").innerHTML = score_2;

function Send(){
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    answer = parseInt(number_1) * parseInt(number_2);

    question = "<h4>" + number_1 + "X" + number_2 + "<h4>";
    answer_input = "<br> <label> Answer: </label> <span> <input id = 'answer_input' type = 'number' class = 'form-control' placeholder = 'Enter your answer'></input> </span>";
    check_button = "<br> <button id = 'check_button' class = 'btn btn-success'> Check </button>";

    row = question + answer_input + check_button;

    document.getElementById("output_division").innerHTML = row;

    document.getElementById("number_1").innerHTML = " ";
    document.getElementById("number_2").innerHTML = " ";
}