class ShowHide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._isHidden = true;
    this.shadowRoot.innerHTML = `
    <div> 
      <button>show</button>
      <slot></slot>
     </div>
    `;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", this._toogleVisibility.bind(this));
    this.shadowRoot.querySelector("slot").style.display = "none";
    const shouldShow = this.getAttribute("default-state") === "show";
    this.slot.style.display = shouldShow ? "block" : "none";
    this.shadowRoot.querySelector("button").textContent = shouldShow ? "hide" : "show";
    this._isHidden = !shouldShow;
  }
  _toogleVisibility() {
    this._isHidden = !this._isHidden;
    this.shadowRoot.querySelector("slot").style.display = this._isHidden ? "none" : "block";
    this.shadowRoot.querySelector("button").textContent = this._isHidden ? "show" : "hide";
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click", this._toogleVisibility.bind(this));
  }
}
customElements.define("show-hide", ShowHide);
