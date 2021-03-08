$(function() {
    for (let i = 0; i < 13; i++) {
        let i_tab_0 = $(`.${i}-tab-0`);
        let i_tab_1 = $(`.${i}-tab-1`);
        let i_content_0 = $(`.${i}-content-0`);
        let i_content_1 = $(`.${i}-content-1`);

        i_tab_0.onclick = function () {
            i_tab_0.addClass("activate");
            i_content_0.addClass("show");
            i_tab_1.removeClass("active");
            i_content_1.removeClass("show");
        };

        i_tab_1.onclick = function () {
            i_tab_1.addClass("activate");
            i_content_1.addClass("show");
            i_tab_0.removeClass("active");
            i_content_0.removeClass("show");
        };
    }
});