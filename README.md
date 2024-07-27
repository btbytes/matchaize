# matchaize

Apply [Matcha](https://matcha.mizu.sh/) CSS to any page with this bookmarket.

Drag this link to your browser's bookmark bar. Click on the bookmarklet on any page where you want
to apply `matcha.css`


<h3><a href="javascript:(function%20()%20%7Bconst%20%24%24%20%3D%20(selector)%20%3D%3E%20document.querySelectorAll(selector)%3Bconst%20createElement%20%3D%20(tagName%2C%20properties)%20%3D%3EObject.assign(document.createElement(tagName)%2C%20properties)%3B%24%24('link%5Brel%3D%22stylesheet%22%5D%2Cstyle').forEach((el)%20%3D%3E%20el.remove())%3B%24%24(%22*%22).forEach((el)%20%3D%3E%20(el.style%20%3D%20%22%22))%3Bconst%20linkElm%20%3D%20createElement(%22link%22%2C%20%7Brel%3A%20%22stylesheet%22%2Chref%3A%20%22https%3A%2F%2Fmatcha.mizu.sh%2Fmatcha.css%22%2C%7D)%3Bdocument.head.append(linkElm%2C!%24%24('meta%5Bname%3D%22viewport%22%5D').length%20%26%26createElement(%22meta%22%2C%20%7Bname%3A%20%22viewport%22%2Ccontent%3A%20%22width%3Ddevice-width%2Cinitial-scale%3D1.0%22%2C%7D)%2C)%3B%7D)()%3B">Matchaize</a></h3>

You can look at the source of the bookmarklet -- [matchaize.js](matchaize.js).


Code inspired by [water.css](https://watercss.kognise.dev/)'s `waterize` bookmarklet.

Javascript encoded into bookmarklet with the help of [boop](https://boop.okat.best/).

[Reference](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)
