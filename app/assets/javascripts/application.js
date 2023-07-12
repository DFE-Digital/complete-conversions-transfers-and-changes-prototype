//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 

window.GOVUKPrototypeKit.documentReady(() => {
  // v0-25+ Highlight header nav item if nav text equals XXXX and page title also includes XXXX
  const pageTitle = document.title;
  const elements = document.querySelectorAll("[class*='header__navigation-link']");

  elements.forEach((element) => {
    const elementText = element.textContent.trim();
    if (elementText && pageTitle.includes(elementText)) {
      element.setAttribute("aria-current", "page");
    }
  });

});