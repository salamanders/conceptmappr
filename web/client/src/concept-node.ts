// Import the LitElement base class and html helper function

import {css, html, LitElement, customElement, property}  from 'lit-element' // 'https://unpkg.com/lit-element@2.x/lit-element.js?module'

// Extend the LitElement base class
class ConceptNode extends LitElement {

    subject:string = 'Hello World';
    id:string = 'abc';
    x:number = 10;
    y:number = 10;
    private clickHandler: any;

    static styles = css`
    :host {
      display: flex;
      user-select: none;
      touch-action: none;
      cursor: move;
      border: 1px solid #000;
      box-sizing: border-box;
      background-color: #ccc;
      height: 50px;
      width: 200px;
      position: absolute;
      
      text-align: center;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

    static get properties() {
        return {
            'subject': { type: String, reflect: true },
            'id': { type: String, reflect: true },
            'x': { type: Number, reflect: true },
            'y': { type: Number, reflect: true }
        };
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render() {
        return html`<div id="{id}" class="concept" draggable="true" @click="${this.clickHandler}" style="left:${this.x}px"
>${this.subject}</div>`;
    }
}

// Register the new element with the browser.
customElements.define('concept-node', ConceptNode);