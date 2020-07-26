// var $cont = $('.example'),
//     itemsArr = $cont.children().get();

// $cont.append(shuffle(itemsArr))

// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
//     return a;
// }

// <!-- Theme Filtering -->
function fade(group) {
    $('#gall .wrapper')
        //.not(group)
        .fadeOut()
        .promise()
        .done(function() {
            // console.log(group);
            $('#gall ' + group).fadeIn();
        });
}
$('input[name$="group1"]').click(function() {
    fade($(this).val());
});


//Modal
function modalClose() {
    // debugger;
    if (location.hash.includes("#")) {
        location.hash = '';
    }
}
//ESC
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});

var allModals = document.querySelectorAll('.modalDialog');
allModals.forEach(function(mo) {
    mo.addEventListener('click', function(e) {
        if (e.target.classList.value === "modalDialog") {
            modalClose();
        }
    });
});

// Closing about modal
document.querySelector(".modalAbout").addEventListener('click', function(e) {
    if (e.target.classList.value === "modalAbout") {
        modalClose();
    }
});



// var modal = document.querySelector('#openModal');
// modal.addEventListener('click', function(e) {
//     modalClose();
// }, false);
//Click outside

// modal.children[0].addEventListener('click', function(e) {
//     e.stopPropagation();
// }, false);

//stop video
function stopvideo() {
    var frame = document.getElementsByClassName("youtube-video");

    for (var i = 0; i < frame.length; i++) {
        frame.item(i).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}

//prevent copying
$('body').bind('copy paste cut drag drop', function(e) {
    e.preventDefault();
});



// Theme/Year Filtering
$("#allbtn").click(function() {
    $("#theme1,#theme2,#theme3,#theme4").fadeOut();
});
$("#theme1btn").click(function() {
    $("#theme1").fadeIn();
    $("#theme2,#theme3,#theme4").fadeOut()
});
$("#theme2btn").click(function() {
    $("#theme2").fadeIn();
    $("#theme1,#theme3,#theme4").fadeOut()
});
$("#theme3btn").click(function() {
    $("#theme3").fadeIn();
    $("#theme1,#theme2,#theme4").fadeOut()
});
$("#theme4btn").click(function() {
    $("#theme4").fadeIn();
    $("#theme1,#theme2,#theme3").fadeOut()
});