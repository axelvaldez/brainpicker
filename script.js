$(function(){

    // Read questions from text file
    function getQuestions(){
        var questions = new Array;

        $.get('questions.txt', function(data){
            questions = data.split('\n');

            $.each(questions, function(i, question){
                if (question != ''){
                    $('#questions').append('<p>' + question + '</p>');
                }
            });
        });
    }

    // Switch to next question
    function next(){
        $('#questions p:first-child').appendTo('#questions');
    }

    // Switch to previous question
    function prev(){
        $('#questions p:last-child').prependTo('#questions');
    }

    $('.next').click(next);
    $('.prev').click(prev);

    $(document).swiperight(next);
    $(document).swipeleft(prev);

    // Key Bindings (arrow keys)
    $(document).keydown(function(e) {
        switch(e.which) {
            // left
            case 37: prev();
            break;

            // up
            case 38: prev();
            break;

            // right
            case 39: next();
            break;

            // down
            case 40: next();
            break;

            default: return;
        }
        e.preventDefault();
    });

    getQuestions();
});
