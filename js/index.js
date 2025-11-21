$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "json/course.json",
    dataType: "json",
    success: function (data) {
      //生成課程
      $(".load-2").css("display", "none");
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
      alert("作品集獲取失敗");
    },
  });
  $.ajax({
    type: "get",
    url: "json/writings.json",
    dataType: "json",
    success: function (data) {
      //生成著作
      $(".load-1").css("display", "none");
      data.map((writing) => {
        var card = `
          <div class="articleContent"><div class="articleList"></div><p> ${
            writing.link !== ""
              ? `<a href=${writing.link} target="_blank"
          }>${
            writing.lang == "ch"
              ? `${writing.author}（${writing.year}）。${writing.title}。<i>${writing.publishing}</i>。</a>`
              : `${writing.author}(${writing.year}).${writing.title}.<i>${writing.publishing}</i>。</a>`
          }`
              : writing.lang == "ch"
              ? `${writing.author}（${writing.year}）。${writing.title}。<i>${writing.publishing}</i>。`
              : `${writing.author}(${writing.year}).${writing.title}.<i>${writing.publishing}</i>。`
          }
          `;
        $(".writingsList").append(card);
      });
    },
    error: function () {
      alert("著作獲取失敗");
    },
  });
});
