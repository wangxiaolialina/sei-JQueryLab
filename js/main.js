inputText=$('.input');


$('.btn').on('click', function(){
    const $p = $('<p>');
    var btn = $('<input/>').attr({ type: 'button', id: 'deleteButton', value:'X' });
    // $('#deleteButton').css('background-color','red');
    btn.appendTo($p);
    const $span = $('<span>');
    $span.html(inputText.val());
    $span.appendTo($p);
    $p.appendTo('.skills');
    btn.on('click',function(evt){
    $p.remove();
    })
})
