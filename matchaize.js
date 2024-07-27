(function () {
  const $$ = (selector) => document.querySelectorAll(selector);
  const createElement = (tagName, properties) =>
    Object.assign(document.createElement(tagName), properties);
  $$('link[rel="stylesheet"],style').forEach((el) => el.remove());
  $$("*").forEach((el) => (el.style = ""));
  const linkElm = createElement("link", {
    rel: "stylesheet",
    href: "https://matcha.mizu.sh/matcha.css",
  });
  document.head.append(
    linkElm,
    !$$('meta[name="viewport"]').length &&
      createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      }),
  );
})();
