$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "json/course.json",
    dataType: "json",
    success: function (data) {
      //生成課程
      $('.loading').css('display','none');
      data.map((course) => {
        var card = `
          <div class="mt-4 col-md-4 col-sm-6 course_cell">
            <a href="detail.html?id=${course._id}" class="course__link">        
              <div class="course_title ${course.colorclass}">
                <strong>${course.title}</strong>${course.entitle}
              </div>
              <div class="course_logicdiagram">
                <i class="fa-solid ${course.icon}"></i>
              </div>
            </a>
          </div>`;
        $(".course_layout").append(card);
      });
    },
    error: function () {
      alert("課程獲取失敗");
    },
  });
});
