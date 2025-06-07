class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer = null;
    this._toolTipIcon = null;
    this._toolTipVisible = false;
    this._toolTipText = "This is a dummy tooltip text";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        p{
          position:absolute;
          background-color: black;
          z-index: 1000;
          padding: 5px;
          border-radius: 5px;
          color: white;
        }
        :host {
          border: 1px solid black;
          position: relative;
        }
        :host(.important) {
          background-color: var(--color-primary, #007bff); );
      
        }
        :host-context(p) {
          font-weight: bold;
          color: var(--color-secondary);
        }
        ::slotted(.highlight) {
          border-bottom: 1px dotted red;
        }
      </style>
      <span class="highlight">( ?)</span>
      <slot>Default value</slot>
    `;
  }
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._toolTipText = this.getAttribute("text");
    }
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    this._tooltipIcon.addEventListener("mouseleave", this._removeTooltip.bind(this));
  }

  static get observedAttributes() {
    return ["text"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "text" && oldValue !== newValue) {
      this._toolTipText = newValue;
    }
    return;
  }
  disconnectedCallback() {
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip.bind(this));
    this._tooltipIcon.removeEventListener("mouseleave", this._removeTooltip.bind(this));
  }

  _render() {
    if (this._toolTipVisible) {
      this._toolTipContainer = document.createElement("p");
      this._toolTipContainer.textContent = this._toolTipText;
      this.shadowRoot.appendChild(this._toolTipContainer);
    } else {
      if (this._toolTipContainer) {
        this.shadowRoot.removeChild(this._toolTipContainer);
        this._toolTipContainer = null;
      }
    }
  }

  _showTooltip() {
    this._toolTipVisible = true;
    this._render();
  }
  _removeTooltip() {
    this._toolTipVisible = false;
    this._render();
  }
}

customElements.define("custom-tooltip", Tooltip);
