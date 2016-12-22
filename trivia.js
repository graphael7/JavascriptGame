var Player = function(name) {
    this.name = name;
    this.score = 0;
    this.winner = false;
    this.current_question = "";
  };

Player.prototype.getQuestion = function() {
    $(".question").html(this.current_question.question);

};

Player.prototype.checkAnswer = function(answer) {
  if(this.current_question.answer == answer){
    this.score += this.current_question.points
      $("#player1-score").html(this.score);

  }
  $(".question").html("Question:");
  $("#frm1")[0].reset()

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
//   };
// on click of a space on the board i need to get the row clicked and send
// to a function that will ask the user the question and take an answer
// after taking the answer it will check if the answer is correct
// after it checks if the answer is correct it will add score
// if player is correct he will be asked to pick another question if not
// it will ask the second player to pick a question
//
// until no more questions remain. until counter == 30
for (var x= 0; x <2;x++){
  $(document).ready(function() {
    var player1 = new Player("player1");
    // var player2 = new Player("player2");

    $(document).on('click', function(event) {

      lengthofarray = arr.length
      for (var i = 0; i < lengthofarray; i++){
        if (arr[i].category == $(event.target).attr("class") && arr[i].points ==  $(event.target).parent().attr("id")){
          player1.current_question = arr[i]
          player1.getQuestion();
        }
      }
    });
    $(document).on('submit', function(event) {
      event.preventDefault()
      var x = document.getElementById("frm1");
      var text = x.elements[0].value
      player1.checkAnswer(text);
    });

  });
}
