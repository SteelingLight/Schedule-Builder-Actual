var setTasks = [];


// establishes the date on screen taken from moment.js
$("#currentDay").html(moment().format("dddd MMMM, Do"));

//on page start function to see the local array stored
let thisPage = function() {
    
    setTasks = JSON.parse(localStorage.getItem('toDo'));
    console.log(setTasks); 

};

//Sets the color coding per time of day as to whether the time has passed
$('.tasks').each(function() {

    currentHour = moment().format("HH");

    if ($(this).parent().attr("id") === currentHour) {
        $(this).addClass("present");
    }
    else if ($(this).parent().attr("id") < moment().format("HH")) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }

});


//save button to append items to the localstorage and array
$('.btn').on('click', function() {
    var setHour = $(this).parent().attr("id");
    var setTask = $(this).parent().children('.tasks').text();
    if (setTasks.includes(setHour)){
        var remover = (setTasks.indexOf(setHour));
        setTasks.splice(remover, 2, setHour, setTask);
        console.log(setTasks);
    }
    else {
        setTasks.push(setHour, setTask)
        console.log(setTasks);
    }

    localStorage.setItem('toDo', JSON.stringify(setTasks));
    
})

thisPage();