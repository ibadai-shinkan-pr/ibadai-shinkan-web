document.write("<table><tr>");
const tableIndex = ["サークル名", "屋内企画場所", "屋外企画場所", "ステージ企画場所"];
const url = "http://localhost:63342/ibadai-shinkan-web/assets/json/group.json";
tableIndex.forEach(it => document.write("<th>" + it + "</th>"));
document.write("</tr>");
$.getJSON(url, (data) => {
    data.forEach(element => {
        document.write("<tr>");
        for (var key in element) {
            document.write("<td>" + element[key] + "</td>");
        }
        document.write("</tr>");
    });
});
document.write("</table>");

