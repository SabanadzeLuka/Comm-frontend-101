$(document).ready(function() {
    $("button").click(function() {
       alert("The paragraph was clicked.");
    })

    $("p").css(
        {
            'font-size' : '20px',
            'color' : 'red',
            'background' : 'yellow'
         }
    );
})