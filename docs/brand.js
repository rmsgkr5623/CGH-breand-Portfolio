console.clear();

function TypingEffect1__init() {
  $('.typing-effect-1').each(function(index, el) {
    const $el = $(el);
    
    const text = $el.attr('data-text');
    const inter = parseInt($el.attr('data-inter'));
    const inter2 = parseInt($el.attr('data-inter2'));
    $el.find(' > div').empty();
    const textBits = text.split('');
    
    const $div = $el.find(' > div');
    
    textBits.forEach((char) => {
      $div.append('<span style="display:none;">' + char + '</span>');
    })
    
    const $span = $div.find(' > span');
    
    $el.data('typing-effect-1__index', 0);
    $el.data('typing-effect-1__inter', inter);
    $el.data('typing-effect-1__inter2', inter2);
    $el.data('typing-effect-1__$div', $div);
    $el.data('typing-effect-1__$span', $span);
    TypingEffect1__show($el, textBits);
  });
}

function TypingEffect1__show($el, textBits) {
  const index = $el.data('typing-effect-1__index');
  const inter = $el.data('typing-effect-1__inter');
  const inter2 = $el.data('typing-effect-1__inter2');
  const $div = $el.data('typing-effect-1__$div');
  const $span = $el.data('typing-effect-1__$span');
  
  setTimeout(function() {
    $span[index].style.display = 'inline';
    
    if ( $span.length == index + 1 ) {
      setTimeout(function() {
        TypingEffect1__hide($el, textBits);
      }, inter2);
      return;
    }
    
    $el.data('typing-effect-1__index', index + 1);
    
    TypingEffect1__show($el, textBits);
  }, inter);
}

function TypingEffect1__hide($el, textBits) {
  const index = $el.data('typing-effect-1__index');
  const inter = $el.data('typing-effect-1__inter');
  const inter2 = $el.data('typing-effect-1__inter2');
  const $div = $el.data('typing-effect-1__$div');
  const $span = $el.data('typing-effect-1__$span');
  
  setTimeout(function() {
    $span[index].style.display = 'none';
    
    if ( index == 0 ) {
      setTimeout(function() {
        TypingEffect1__show($el, textBits);
      }, inter2);
      return;
    }
    
    $el.data('typing-effect-1__index', index - 1);
    
    TypingEffect1__hide($el, textBits);
  }, inter);
}


setTimeout(function() {
  TypingEffect1__init();
}, 2800);




