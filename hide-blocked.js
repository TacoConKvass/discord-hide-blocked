const style = document.createElement('style');
style.type = "text/css"
const css = `
div[class^="groupStart"]:has(div[class^="blockedSystemMessage"]) {
  height: 0px;
  margin: 0px;
  opacity: 0%;
  color: transparent;
}
`;

style.appendChild(document.createTextNode(css));

document.head.appendChild(style);
