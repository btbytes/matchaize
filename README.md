# matchaize

Apply [Matcha](https://matcha.mizu.sh/) CSS to any page with this bookmarket.

Drag this link to your browser's bookmark bar. Click on the bookmarklet on any page where you want
to apply `matcha.css`


**[matchaize](javascript%3A%20(function%20()%20%7B%0A%20%20%2F%2F%20matcha.css%20Bookmarklet%0A%20%20%2F%2F%20---------------------%0A%0A%20%20const%20%24%24%20%3D%20(selector)%20%3D%3E%20document.querySelectorAll(selector)%3B%0A%20%20const%20createElement%20%3D%20(tagName%2C%20properties)%20%3D%3E%0A%20%20%20%20Object.assign(document.createElement(tagName)%2C%20properties)%3B%0A%0A%20%20%2F%2F%20Remove%20all%20CSS%20stylesheets%2C%20external%20and%20internal%0A%20%20%24%24('link%5Brel%3D%22stylesheet%22%5D%2Cstyle').forEach((el)%20%3D%3E%20el.remove())%3B%0A%0A%20%20%2F%2F%20Remove%20all%20inline%20styles%0A%20%20%24%24(%22*%22).forEach((el)%20%3D%3E%20(el.style%20%3D%20%22%22))%3B%0A%0A%20%20const%20linkElm%20%3D%20createElement(%22link%22%2C%20%7B%0A%20%20%20%20rel%3A%20%22stylesheet%22%2C%0A%20%20%20%20href%3A%20%22https%3A%2F%2Fmatcha.mizu.sh%2Fmatcha.css%22%2C%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Add%20water.css%20and%20responsive%20viewport%20(if%20necessary)%0A%20%20document.head.append(%0A%20%20%20%20linkElm%2C%0A%20%20%20%20!%24%24('meta%5Bname%3D%22viewport%22%5D').length%20%26%26%0A%20%20%20%20%20%20createElement(%22meta%22%2C%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%22viewport%22%2C%0A%20%20%20%20%20%20%20%20content%3A%20%22width%3Ddevice-width%2Cinitial-scale%3D1.0%22%2C%0A%20%20%20%20%20%20%7D)%2C%0A%20%20)%3B%0A%7D)()%3B%0A)**


You can look at the source of the bookmarklet -- [matchaize.js](matchaize.js).


Code inspired by [water.css](https://watercss.kognise.dev/)'s `waterize` bookmarklet.

Javascript encoded into bookmarklet with the help of [boop](https://boop.okat.best/).
