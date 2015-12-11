/**
 * Created on: 11/12/15
 *     Author: Bobby Lin
 */

function searchTitle() {
    var keyword = document.getElementById('searchBox').value.toLowerCase();
    var list = document.getElementById("result");
    list.innerHTML="";
    for(var i = 0; i<data.length; i++) {
        if(data[i].title.toLowerCase().search(keyword) != -1) {
            var textnode = document.createTextNode(data[i].title);
            var node = document.createElement("LI");
            node.appendChild(textnode);
            list.appendChild(node);
        }
    }
}
