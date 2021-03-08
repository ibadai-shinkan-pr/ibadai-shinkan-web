$(function () {
    $.ajaxSetup({cache: false});
    if (isMobile) {
        for (let i = 0; i < 13; i++) {
            $(`#circle${("000"+i).slice(-3)}`).load(`circles/circle${("000"+i).slice(-3)}-sp.html`);
        }
    } else {
        for (let i = 0; i < 13; i++) {
            $(`#circle${("000"+i).slice(-3)}`).load(`circles/circle${("000"+i).slice(-3)}.html`);
        }
    }
});