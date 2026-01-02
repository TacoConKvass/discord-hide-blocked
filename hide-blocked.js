const style = document.createElement('style');
style.type = "text/css"
const css = `
[class*="groupStart"]:has([class*="blockedSystemMessage"]) {
  display: none;
}
`;

style.appendChild(document.createTextNode(css));

document.head.appendChild(style);
