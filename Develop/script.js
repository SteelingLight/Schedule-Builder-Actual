var setTasks = [];
localStorage.setItem('toDo', JSON.stringify(setTasks));

$("#currentDay").html(moment().format("dddd MMMM, Do"));


let thisPage = function() {
    
    setTasks = JSON.parse(localStorage.getItem('toDo'));
    localStorage.removeItem('toDo');
    console.log(setTasks);
};

$('.tasks').each(function() {

    currentHour = moment().format("HH");

    if ($(this).attr("id") === currentHour) {
        $(this).addClass("present");
    }
    else if ($(this).attr("id") < moment().format("HH")) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }

});

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
    
})

thisPage();