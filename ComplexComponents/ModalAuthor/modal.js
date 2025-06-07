class Modal extends HTMLElement {
  constructor() {
    super();
    this._isModalOpen = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        #backDrop {
          display: none;
          position: fixed ;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 100%;
        }

        #modal {
          width: 80%;
          max-width: 500px;
          padding: 16px;
          border-radius: 20px;
          background: white;
          margin: 5% auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding-bottom: 0;
        }

        ::slotted(form) {
         display: flex;
          flex-direction: column;
          gap: 16px;
          background: #f9f9f9;
          padding: 24px 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
          max-width: 350px;
          margin: 0 auto;
        }
       
        .footer{
        margin-top: 16px;
          text-align: right;
          padding: 8px;
          background: #f1f1f1;
          margin-left: -16px;
          margin-right: -16px;
        }
        .footer button {
         background: tomato;
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 5px ;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;}

      </style>
      <div id="backDrop">
        <div id="modal">
          <slot></slot>
          <footer class="footer">
            <button id="close-btn">Close</button>
          </footer>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#close-btn").addEventListener("click", this._closeModal.bind(this));
    // Prevent clicks inside modal from closing it
    this.shadowRoot.querySelector("#modal").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this.shadowRoot.querySelector("#backDrop").addEventListener("click", () => {
      this._closeModal();
    });
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "open" && newValue === "") {
      this._isModalOpen = true;
      this.shadowRoot.querySelector("#backDrop").style.display = "block";
    } else {
      this._isModalOpen = false;
      this.shadowRoot.querySelector("#backDrop").style.display = "none";
    }
  }

  _closeModal() {
    this.removeAttribute("open");
  }
}

customElements.define("my-modal", Modal);
