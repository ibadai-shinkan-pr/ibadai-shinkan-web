if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') === -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    document.write('<link rel="stylesheet" type="text/css" href="assets/css/main-sp.css">');
} else {
    document.write('<link rel="stylesheet" type="text/css" href="assets/css/main2.css">');
}