class LinkConfirm extends HTMLAnchorElement {
  constructor() {
    super();
    this._confirmMessage = "Are you sure you want to navigate to this link?";
  }
  connectedCallback() {
    if (this.hasAttribute("confirm-message")) {
      this._confirmMessage = this.getAttribute("confirm-message");
    }
    this.addEventListener("click", this._handleClick.bind(this));
  }
  _handleClick(event) {
    if (!confirm(this._confirmMessage)) {
      event.preventDefault();
    }
  }
}
customElements.define("link-confirm", LinkConfirm, { extends: "a" });
