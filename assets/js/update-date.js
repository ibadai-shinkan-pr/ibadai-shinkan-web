const modified = new Date(document.lastModified);
const year = modified.getFullYear();
const month = modified.getMonth() + 1;
const date = modified.getDate();
const hour = modified.getHours();
const minutes = modified.getMinutes();
if (minutes < 10) {
    document.write("最終更新：" + year + "年" + month + "月" + date + "日" + hour + ":0" + minutes);
} else {
    document.write("最終更新：" + year + "年" + month + "月" + date + "日" + hour + ":" + minutes);
}