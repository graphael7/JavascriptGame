var Player = function(name) {
    this.name = name;
    this.score = 0;
    this.winner = false;
  };

Player.prototype.getQuestion = function(question) {
    $(".question").html("How old are you?");

  // this.position += 1;
  // if (this.position < 20){
  //   updatePlayerPosition(this.name, this.position);
  // }
  // if (this.position === 19) {
  //   this.winner = true;
  //   // var winningResult = alert("player is the winner!");
  //   var winner = this.name;
  //   setTimeout(function(){alert(winner + " is the winner!");}, 250);
  //   setTimeout(function(){location.reload();}, 500);
  // }

};

Player.prototype.checkAnswer = function(answer) {
    $(".question").html("Question: ");
    
  //
  // this.position += 1;
  // if (this.position < 20){
  //   updatePlayerPosition(this.name, this.position);
  // }
  // if (this.position === 19) {
  //   this.winner = true;
  //   // var winningResult = alert("player is the winner!");
  //   var winner = this.name;
  //   setTimeout(function(){alert(winner + " is the winner!");}, 250);
  //   setTimeout(function(){location.reload();}, 500);
  // }

};



var updatePlayerPosition = function(question) {
  $("#"+player+"_strip").find(".active").removeClass("active");
  $("#"+player+"_strip td:eq("+position+")").attr("class", "active");
}
//   var updatePlayerPosition = function(player, position) {
//     $("#"+player+"_strip").find(".active").removeClass("active");
//     $("#"+player+"_strip td:eq("+position+")").attr("class", "active");
//   };
//
//   Player.prototype.movePlayer = function() {
//     this.position += 1;
//     if (this.position < 20){
//       updatePlayerPosition(this.name, this.position);
//     }
//     if (this.position === 19) {
//       this.winner = true;
//       // var winningResult = alert("player is the winner!");
//       var winner = this.name;
//       setTimeout(function(){alert(winner + " is the winner!");}, 250);
//       setTimeout(function(){location.reload();}, 500);
//     }
//
//   };
// on click of a space on the board i need to get the row clicked and send
// to a function that will ask the user the question and take an answer
// after taking the answer it will check if the answer is correct
// after it checks if the answer is correct it will add score
// if player is correct he will be asked to pick another question if not
// it will ask the second player to pick a question
//
// until no more questions remain. until counter == 30

$(document).ready(function() {

  var player1 = new Player("player1");
  // var player2 = new Player("player2");
    $(document).on('click', function(event) {
      player1.getQuestion($(event.target).attr("id"));

      //  var code = event.keyCode || event.which;
      //  if (code === 81){
      //    player1.movePlayer();
      //  }
      //  if (code === 80){
      //    player2.movePlayer();
      //  }
    });
});


function myFunction() {
var x = document.getElementById("frm1");
var text = "";
var i;
for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("player1-score").innerHTML = text;
player1.checkAnswer(text);
}
