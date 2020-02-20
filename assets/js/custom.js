var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 5,
    currValue, rafID;

// set min/max value
inputRange.min = -100;
inputRange.max = maxValue;

// listen for unlock
function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);
    
    // set to desired value
    currValue = +this.value;
}

function unlockEndHandler() {
    
    // // store current value
    // currValue = +this.value;
    
    // // determine if we have reached success or not
    // if(currValue >= maxValue) {
    //     successHandler();
    // }
    // else {
    //     rafID = window.requestAnimationFrame(animateHandler);
    // }
}

// handle range animation
function animateHandler() {

    // calculate gradient transition
    var transX = currValue - maxValue;
    
    // update input range
    inputRange.value = currValue;

    //Change slide thumb color on mouse up
    if (currValue < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (currValue < 40) {
        inputRange.classList.remove('purple');
    }
    if (currValue < 60) {
        inputRange.classList.remove('pink');
    }
    
    // determine if we need to continue
    if(currValue > -1) {
      window.requestAnimationFrame(animateHandler);   
    }
    
    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
  alert('Unlocked');
};

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);

// move gradient
inputRange.addEventListener('input', function() {
    //Change slide thumb color on way up
    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});

let val = $('input.range').val();
$("#catImage2").css("filter", `blur(${-(val / 20) + 2 }px)`);
$("#vDom").css("background-color", `rgba(0,0,0,${(val/ 300) })`)

$('input.range').on("input", function(){
    let val = $(this).val();

    $("#catImage2").css("filter", `blur(${-(val / 20) + 2 }px)`);
    $("#vDom").css("background-color", `rgba(0,0,0,${(val/ 300) })`)
})

$(window).on("resize", function(){
    $('#vDom').css('width',$('#catImage2').css('width'))
    $('#vDom').css('height',$('#catImage2').css('height'))
    $('#vDom').css('top',$('#catImage2').css('top'))
    $('#vDom').css('left',$('#catImage2').css('left'))
})


$('#vDom').css('width',$('#catImage2').css('width'))
$('#vDom').css('height',$('#catImage2').css('height'))
$('#vDom').css('top',$('#catImage2').css('top'))
$('#vDom').css('left',$('#catImage2').css('left'))



// let timer;

// function checkVisible(elm) {
//     return 1;
//   }
// $(window).on('scroll', function(){ 
    
//     if(checkVisible($("#vDom"))){
//         clearTimeout( timer ); 
//         timer = setTimeout(function(){
//             console.log("SDF")
//             let val = $('input.range').val() * 1 >= 100 ? -100 : $('input.range').val() *1 + 25 >= 100 ? 100 : $('input.range').val() *1 + 25;
//             // $("#catImage2").animate({ filter : `blur(${-(val / 20) + 2 }px)`});
//             // $("#vDom").animate({ backgroundColor : `rgba(0,0,0,${(val/ 300) })`});
//             $("input.range").animate({value: val}, 250);
//             $("#catImage2").css("filter", `blur(${-(val / 20) + 2 }px)`);
//             $("#vDom").css("background-color", `rgba(0,0,0,${(val/ 300) })`)
            
            
//         }, 250);
//     }
    
// });




// $(document).scroll(function () {
//     var scrollTop = $(document).scrollTop();
//     if (scrollTop < currentScrollTop) {
//         if (!previousScrollDir) {
//           console.log('scrolled up');
//           $("input.range").animate({value: $('input.range').val() - 10});
//           previousScrollDir = true;
//         }
//     } else {
//         if (previousScrollDir) {
//           console.log('scrolled down');
//           $("input.range").animate({value: $('input.range').val() + 10});
//           previousScrollDir = false;
//         }
//     }
//     currentScrollTop = scrollTop;
// });

AOS.init();