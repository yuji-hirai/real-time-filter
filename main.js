
{
	$(function () {

    searchEvent = function () {
      let inputText = $(this).val(); // 検索ボックスに入力された値
      let targetText;

      $("#list li").each(function () {
        targetText = $(this).text();

        // 検索対象となるリストに入力された文字列が存在するかどうかを判断//
        if (targetText.indexOf(inputText) !== -1) {
          $(this).removeClass("hidden");
        } else {
          $(this).addClass("hidden");
        }
      });
	};

    $("#keyword").on("input", searchEvent);
  });
}
