export const ScrollToAnchor = (event) => {
  const {
    currentTarget: {
      dataset: { replaceState, anchor }
    }
  } = event;
  event.preventDefault();
  ScrollToElement(anchor);
  historyReplaceState(anchor, replaceState);
};

export const ScrollToElement = (anchor) => {
  const element = document.querySelector(anchor);
  element.scrollIntoView({ behavior: "smooth" });
  historyReplaceState(anchor, false);
  activatedItemNavigation(anchor);
};

export const historyReplaceState = (anchor, state) => {
  const { history, location: { origin } } = window;
  const url = state ? origin + anchor : origin;
  history.replaceState({}, anchor, url);
};

export const activatedItemNavigation = (anchor) => {
  const item = document.querySelector(`a[href='${anchor}']`);
  if (!item) return;
  const items = document.querySelectorAll('a[data-anchor]');

  for (let item of items) item.classList.remove('active');

  item.classList.add('active');
};
