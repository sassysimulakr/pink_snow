function dataWord() {

  $("[data-words]").attr("data-words", function(i, d) {
    var $self = $(this),
      $words = d.split("|"),
      tot = $words.length,
      c = 0;

    for (var i = 0; i < tot; i++) $self.append($('<span/>', {
      text: $words[i]
    }));

    $words = $self.find("span").hide();

    (function loop() {
      $self.animate({
        width: $words.eq(c).width()
      });
      $words.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
      c = ++c % tot;
    }());

  });

}

$(window).on("load", dataWord);
