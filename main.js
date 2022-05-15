function addUsers(){
    var player_1 = document.getElementById("username_1").value;
    var player_2 = document.getElementById("username_2").value;
    
    localStorage.setItem("Player_1", player_1);
    localStorage.setItem("Player_2", player_2);

    window.location = "game_page.html"
}