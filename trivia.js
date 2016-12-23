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
    $("#"+this.name+"-score").html(this.score);
    alert("correct!!!")
  }
  $(".question").html("Question:");
  $("#frm1")[0].reset()
  if (this.name === "player1"){
    $(".racer_table").find("#"+this.current_question.points).find("."+this.current_question.category).addClass("player1-win")
  }
  else {
    $(".racer_table").find("#"+this.current_question.points).find("."+this.current_question.category).addClass("player2-win")
  }

}

  $(document).ready(function() {
    var player1 = new Player("player1");
    var player2 = new Player("player2");
    var firstclick = '';
    $(document).on('keyup', function(event) {
      if (event.which == 81) {
        event.preventDefault()
        firstclick = player1
        $("#pick").html("Player 1 pick a Question")
      }
    })

    $(document).on('keyup', function(event) {
      if (event.which == 80) {
        event.preventDefault()
        firstclick = player2
        $("#pick").html("Player 2 pick a Question")
      }
    })

    $(document).on('click', function(event) {
      lengthofarray = arr.length
      for (var i = 0; i < lengthofarray; i++){
        if (arr[i].category == $(event.target).attr("class") && arr[i].points ==  $(event.target).parent().attr("id")){
          firstclick.current_question = arr[i]
          firstclick.getQuestion();
        }
      }
    });

    $(document).on('submit', function(event) {
      event.preventDefault()
      var x = document.getElementById("frm1");
      var text = x.elements[0].value
      firstclick.checkAnswer(text);
    });

  });
