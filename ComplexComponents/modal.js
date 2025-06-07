class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        display: none;
        position: relative;
        margin-left:auto;
        margin-right:auto;
        background: white;
        padding: 16px;
        border-radius: 20px;
        width: 80%;
        max-width: 500px;
        z-index: 1000;
      }
      :host([open]) {
        display: block;
      }
      </style>
      <div id="modal-content">
      <slot></slot>
      <button id="close-btn">Close</button>
      </div>
    `;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("#close-btn").addEventListener("click", this._closeModal.bind(this));
    // Prevent clicks inside modal from closing it
    this.shadowRoot.getElementById("modal-content").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this._updateVisibility && this._updateVisibility();
  }
  _closeModal() {
    this.removeAttribute("open");
  }
}

customElements.define("my-modal", Modal);
