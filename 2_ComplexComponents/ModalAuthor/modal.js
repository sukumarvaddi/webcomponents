class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        @keyframes slideIn {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }


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
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 10vh;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding-bottom: 0;
      }
        :host([open]) #modal {
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

      ::slotted([slot="title"]) {
        font-size: 1.5rem;
        font-weight: 700;
        color: #222;
        margin-bottom: 16px;
        margin-top: 0;
        text-align: center;
      }

      ::slotted([slot="content"]) {
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
        transition: background 0.2s;
      }
      </style>
      <div id="backDrop">
      <div id="modal">
        <slot name="title">Default Title</slot>
        <slot name="content"> </slot>
        <footer class="footer">
        <button id="close-btn">Close</button>
        </footer>
      </div>
      </div>
    `;
    const slots = this.shadowRoot.querySelectorAll("slot");
    slots.forEach((slot) => {
      slot.addEventListener("slotchange", () => {
        const assignedNodes = slot.assignedNodes({ flatten: true });

        if (assignedNodes.length > 0) {
          assignedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "") {
              node.remove();
            }
          });
        }
        console.log(assignedNodes);
      });
    });
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
    if (name === "open") {
      if (this.hasAttribute("open")) {
        this.shadowRoot.querySelector("#backDrop").style.display = "block";
        const event = new Event("modal-opened", {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
      } else {
        this.shadowRoot.querySelector("#backDrop").style.display = "none";
        const event = new Event("modal-closed", {
          bubbles: true, // The event should bubble up to parent elements
          composed: true, // The event should bubble up and cross the shadow DOM boundary
        });
        this.dispatchEvent(event);
      }
    }
  }

  _closeModal() {
    this.removeAttribute("open");
  }
  open() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open");
  }

  toggle() {
    if (this.hasAttribute("open")) {
      this.removeAttribute("open");
    } else {
      this.setAttribute("open", "");
    }
  }
}

customElements.define("my-modal", Modal);
