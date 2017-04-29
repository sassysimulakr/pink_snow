$(window).on("load", () => {
  $('#who').on('click', () => {
    $('#whoText').toggleClass('hid');
  })
  $('#what').on('click', () => {
    $('#whatText').toggleClass('hid');
  })
  $('#vision').on('click', () => {
    $('#visionText').toggleClass('hid');
  })
});
