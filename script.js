// get UI elements
let wrapper = $('.wrapper');
let discountValue = $('#discount').text('20%');
let minValue = $('#minSpent').text('£52.00');
let promo = $('#promoCode').text('20FORU');
let input = $('.emailInput');
let message = $('#userMessage');
let closeButton = $('#closeButton')
let currentTime = new Date();

$(document).ready(function() {
// // set cookies & hide if page has been visited already
  if((Cookies.get('discount')) ) {
    $('.modal').hide()
  } else {
    Cookies.set('discount','true',{expires:365}),
    $(".modal").fadeIn(500)
  }

closeButton.on('click',function(){
  wrapper.fadeOut(500)
})

$(document).mouseup(function(e) {
    let container = $(".modal");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});


console.log(currentTime)


let twoMin = currentTime.setMinutes(currentTime.getMinutes()+1);

$("#timer")
  .countdown(twoMin, function(event) {
    $(this).text(
      event.strftime('%M:%S')
    )
  }).on('finish.countdown', function() {
    $('.wrapper').hide();
  });

// send form & dissaper after 2s
input.keypress(function(event) {
    if ( event.keyCode == 13 ) {
          event.preventDefault();
          $('.modalContent').hide()
          $('.userMessage').fadeIn(1000)
        setTimeout(() => {
          $('.modal').hide()
        }, 2000);
    }
  })
// stop timer if typing
input.change(function(){
  if (input.val()){
    $('#timer').countdown('pause')
    console.log('bello')
  }

})
// in order to work on mobile devices
window.setInterval(function(){
  if (input.val()!== ""){
    $('#timer').countdown('pause')
  } else {
    $('#timer').countdown('resume')
  }
},1000)
})

// let price = $("[data-atb-price]")[0].dataset.atbPrice;
// let newValue = price
