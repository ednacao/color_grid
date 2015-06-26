var initialSize = 10;
var initialColor = "#ffffff"

$(document).ready(function() {
    load(initialSize, initialColor);
    randomColors();
});


function randomColors() {
    $(".square").click(function() {
        if (this.color == true) {
            $(this).css('background-color', initialColor); 
                this.color = false;
        }
        else {
            $(this).css('background-color', getRandomColor()); 
                this.color = true;
        }
    });
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};


function load(size) {
    var squareSize = $("#container").width() / size - 2; //-2 for borders
    //Create the size x size grid.
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            $("#container").append("<div class='square'></div>");
        } 
    $("#container").append("<div class='new_row'></div>");
    }

    $(".square").css('width', squareSize);
    $(".square").css('height', squareSize);
};



function operate(option) {
    if (option == 2) {
        clear();
        return;
    }

    else if (option == 1) {
        $("body").innerHTML;
    }

    currentOption = option;
    var size = prompt("Enter a grid size (0 < x < 128).");
    //Size given must be valid.
    if ((size > 0) && (size < 128)) {
        initialSize = size;
        clear();
    } else {
        operate(option);
    }
};

// Resets the current grid. 
function clear() {
    $(".square").css('background-color', initialColor);
};