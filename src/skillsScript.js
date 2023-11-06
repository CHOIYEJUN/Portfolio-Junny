
  // Main variables
  var developmentIsVisible = false;

  // 1년차가 된 날짜
  var startDate = new Date("2021-12-06");

  // 현재 날짜
  var today = new Date();

  // 두 날짜 사이의 일 수 계산
  var diffTime = today.getTime() - startDate.getTime();
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  $('#myDeveolperDays').text(diffDays);

  const birthDate = new Date(1997, 1, 8);
  let age = today.getFullYear() - birthDate.getFullYear() + 1;

  $('#yearAge').text(age);

    /*###### SKILLS SECTION ######*/

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;


