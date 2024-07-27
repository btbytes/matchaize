# matchaize

Apply [Matcha](https://matcha.mizu.sh/) CSS to any page with this bookmarket.

Drag this link to your browser's bookmark bar. Click on the bookmarklet on any page where you want
to apply `matcha.css`


<h3><a href="javascript:(function () {const $$ = (selector) => document.querySelectorAll(selector);const createElement = (tagName, properties) =>Object.assign(document.createElement(tagName), properties);$$('link[rel="stylesheet"],style').forEach((el) => el.remove());$$("*").forEach((el) => (el.style = ""));const linkElm = createElement("link", {rel: "stylesheet",href: "https://matcha.mizu.sh/matcha.css",});document.head.append(linkElm,!$$('meta[name="viewport"]').length &&createElement("meta", {name: "viewport",content: "width=device-width,initial-scale=1.0",}),);})();
">Matchaize</a></h3>

You can look at the source of the bookmarklet -- [matchaize.js](matchaize.js).


Code inspired by [water.css](https://watercss.kognise.dev/)'s `waterize` bookmarklet.

Javascript encoded into bookmarklet with the help of [boop](https://boop.okat.best/).

[Reference](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)
