mermaidAPI.initialize({
  startOnLoad: false
});
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement("div");
  element.className += " mermaid-graph";

  function decodeHTMLEntities(str) {
    if (str && typeof str === "string") {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }

    return str;
  }

  return decodeHTMLEntities;
