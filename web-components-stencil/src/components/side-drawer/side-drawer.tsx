import { Component, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() private activeTab: string = 'links';
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  constructor() {
    this.closeSideDrawer = this.closeSideDrawer.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  closeSideDrawer() {
    this.open = false;
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  @Method()
  toggle() {
    this.open = !this.open;
  }

  render() {
    const content =
      this.activeTab === 'links' ? (
        <slot></slot>
      ) : (
        <div class="contact-info">
          <ul>
            <li>Email: svaddi@paychex.com </li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      );

    return (
      <div class="backdrop" onClick={this.closeSideDrawer}>
        <aside onClick={event => event.stopPropagation()}>
          <header>
            <h1>{this.title}</h1>
          </header>
          <main>
            <section id="tabs">
              <button
                class={this.activeTab === 'links' ? 'active' : ''}
                onClick={event => {
                  // event.stopPropagation();
                  this.setActiveTab('links');
                }}
              >
                Links
              </button>
              <button
                class={this.activeTab === 'contact' ? 'active' : ''}
                onClick={event => {
                  // event.stopPropagation();
                  this.setActiveTab('contact');
                }}
              >
                Contact Information
              </button>
            </section>
            {content}
          </main>
        </aside>
      </div>
    );
  }
}
