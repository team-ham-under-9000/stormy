export function createElements(elementClassName) {
  const newElement = document.createElement("div");
  newElement.className = elementClassName;
  return newElement;
}

export function clearResults(container) {
  container.innerHTML = "";
}
