$(document).ready(function () {
  //取得課程id
  let urlParams = new URLSearchParams(window.location.search);
  var courseID = parseInt(urlParams.get("id"));

  $.ajax({
    type: "get",
    url: "json/course.json",
    dataType: "json",
    success: function (data) {
      //生成實驗內容詳細
      $(".loading").css("display", "none");
      data[courseID].details.map((course, index) => {
        var card = `
          <div class="coursebg_${course.courseclass}">
            <div class="container course-container">
              <div class="row">
                <!-- diagram & filmlink -->
                <div class="col-lg-4 col-md-12 col-sm-12 align-items-center">
                  <div class="diagrambox" target="_blank">
                    <div class="diagrambox_imgbox">
                      <img src="./${course.workImg}">
                    </div>
                  </div>
                </div>
                <!-- detail area -->
                <div class="col-lg-8 col-md-12 col-sm-12 mt-lg-0 mt-md-4 mb-lg-0 mb-md-5 mb-sm-5 mb-xs-5 mb-5">
                  <div class="title-layout">
                    <div class="arrow1"></div>
                    <h1 class="title">${course.fulltitle}</h1>
                  <div class="arrow2"></div>
                </div>
                  <div class="row" style="justify-content: center;">
                    <div class="col-lg-12 col-lg-offset-2">
                      <div class="course-content">
                        <div>
                          <strong>作品簡介：</strong><br/><p>&emsp;&emsp;${
                            course.purpose
                          }</p>
                        </div>
                        ${
                          course.awards != ""
                            ? `<div>
                          <strong>得獎項目：</strong>${course.awards}
                        </div>`
                            : ``
                        }
                        ${
                          course.tools != undefined
                            ? courseID == 2 ? `
                            <div>
                              <strong>使用元件：</strong>${course.tools}
                            </div>`:`
                            <div>
                              <strong>使用技術：</strong>${course.tools}
                            </div>`
                            : ``
                        }
                        <div>
                        ${
                          (course.workurl != "" && course.workurl != undefined) || (course.filmurl != "" && course.filmurl != undefined)?
                          `<strong>相關連結：</strong>`:``
                        }
                        ${
                          course.workurl != "" && course.workurl != undefined
                            ? `
                          <a href="${course.workurl}" target="_blank" rel="noreferrer noopenner"><span>作品連結</span></a>&emsp;
                        `
                            : ``
                        }
                        ${
                          course.filmurl != "" && course.filmurl != undefined
                            ? `
                          <a href="${course.filmurl}" target="_blank" rel="noreferrer noopenner"><span>影片連結</span></a>
                        `
                            : ``
                        }
                        </div>
                        ${
                          course.members != ""
                            ? `<div>
                          <strong>成員分工：</strong>
                        </div><div id="member${courseID}-${index}"><div>`
                            : ``
                        }
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
        $(".detail").append(card);
        if (index < data[courseID].details.length - 1) {
          $(".detail").append(
            `<div class="line-layout">
            <div class="container">
              <div class="row">
                <div class="line col-12"></div>
              </div>
            </div>
          </div>`
          );
        }
        if (course.members.length != 0) {
          course.members.map((member) => {
            const memCard = `<div class="memberList-layout"><div class="memberList"></div><div class="course-content--member">${member.name} | ${member.work}</div></div>`;
            $(`#member${courseID}-${index}`).append(memCard);
          });
        }
      });
    },
    error: function () {
      alert("請求實驗內容失敗");
    },
  });
});
