$(document).foundation({
  reveal: {
    animation: 'fadeAndPop',
    animation_speed: 200,
    close_on_background_click: true,
    close_on_esc: true,
    dismiss_modal_class: 'close-reveal-modal',
    bg_class: 'reveal-modal-bg',
    open: function () { console.log('fired from settings'); },
    opened: function () { },
    close: function () { },
    closed: function () { },
    bg: $('.reveal-modal-bg'),
    css: {
      open: {
        'opacity': 0,
        'visibility': 'visible',
        'display': 'block'
      },
      close: {
        'opacity': 1,
        'visibility': 'hidden',
        'display': 'none'
      }
    }
  }
});
