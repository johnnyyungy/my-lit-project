import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

class TestComponent extends LitElement {
  render() {
    return html`<p>Hello, World!</p>`;
  }
}

customElements.define('test-component', TestComponent);