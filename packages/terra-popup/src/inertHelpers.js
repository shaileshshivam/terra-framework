/**
 * This helper updates the root dom element to update the overlay count used to manage  multiple layers
 * of inert requesting components. If the inert count is zero, it adds the inert attribute to the root dom
 * element. Additionally, it shifts the focus to the disclosing content for screen readers and keyboard navigation.
 *
 * @param {HTMLElement} popupElement - the reference to the popup that is being opened.
 * @param {string} rootSelector - the root-level attribute to apply inert to.
 */
function showPopupDomUpdates(popupElement, rootSelector) {
  const mainDocumentElement = document.querySelector(rootSelector);
  if (mainDocumentElement) {
    const dataOverlayCount = +mainDocumentElement.getAttribute('data-terra-popup-count');

    if (dataOverlayCount < 1) {
      mainDocumentElement.setAttribute('inert', 'true');
    }

    mainDocumentElement.setAttribute('data-terra-popup-count', `${dataOverlayCount + 1}`);

    // Handle focus shift for VoiceOver on iOS
    if ('ontouchstart' in window) {
      popupElement.querySelector('[data-terra-popup-begin]').focus();
    } else {
      // Shift focus to popup dialog
      popupElement.focus();
    }
  }
}

/**
 * This helper updates the root dom element to reduce a overlay count used to manage multiple layers of inert
 * requesting components. If the inert count is one, it removes inert from the root dom element. Additionally, it
 * shifts the focus back to the previously focused element for screen readers and keyboard navigation.
 *
 * @param {HTMLElement} popupTriggerElement - reference to the element that requested that the abstract popup open.
 * @param {string} rootSelector - the root-level attribute to remove inert from.
 */
function hidePopupDomUpdates(popupTriggerElement, rootSelector) {
  const mainDocumentElement = document.querySelector(rootSelector);

  if (mainDocumentElement) {
    const dataOverlayCount = +mainDocumentElement.getAttribute('data-terra-popup-count');

    if (dataOverlayCount === 1) {
      mainDocumentElement.removeAttribute('data-terra-popup-count');
      mainDocumentElement.removeAttribute('inert');
    } else if (dataOverlayCount > 1) {
      mainDocumentElement.setAttribute('data-terra-popup-count', `${dataOverlayCount - 1}`);
    }
  }

  // Allows inert processing to finish or focus will not shift back
  setTimeout(() => {
    if (popupTriggerElement && popupTriggerElement.focus) {
      // Shift focus back to element that was last focused prior to opening the popup
      popupTriggerElement.focus();
    } else {
      // In some cases on IE, when the focus cannot be restored on the element (SVG element, for instance)
      // that was last focused prior to opening the popup, place the focus on the HTML body element to repro
      // the behavior noticed on other major browsers.
      document.querySelector('body').focus();
    }
  }, 0);
}

export { showPopupDomUpdates, hidePopupDomUpdates };
