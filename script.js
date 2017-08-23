$(function(){

    // Read questions from text file
    function getQuestions(){
        $.get('questions.txt', function(data){
            var questions = data.split('\n');

            $.each(questions, function(i, question){
                if (question != ''){
                    $('#questions').append('<p class="questions__question">' + question + '</p>');
                }
            });
            setUpQuestions();
        });
    }

    //shuffleChildren (taken from https://css-tricks.com/snippets/jquery/shuffle-children/)
    $.fn.shuffleChildren = function(){
      $.each(this.get(), function(index, el){
          var $el = $(el);
          var $find = $el.children();

          $find.sort(function() {
              return 0.5 - Math.random();
          });

          $el.empty();
          $find.appendTo($el);
      });
    };

    // setup questions
    function setUpQuestions(){
      $("#questions").css('width', ($('.questions__question').length * 100) + '%');
      $("#questions").shuffleChildren();
    }

    // Switch to next question
    function go(direction){
      if (direction == 'next' && current < $('.questions__question').length - 1){
        current = current + 1;
      }
      if (direction == 'prev' && current > 0){
        current = current - 1;
      }
      $("#questions").css('left', '-' + current * $(window).width() + 'px');
    }


    $('.controls__next').click(function(){go('next');});
    $('.controls__prev').click(function(){go('prev');});

    $(window).on("swiperight", function(){go('next');});
    $(window).on("swipeleft", function(){go('prev');});

    // Key Bindings (arrow keys)
    $(document).keydown(function(e) {
        switch(e.which) {
            // left
            case 37: go('prev');
            break;

            // right
            case 39: go('next');
            break;

            default: return;
        }
        e.preventDefault();
    });

    var current = 0;
    getQuestions();
});
