export class Selector {
    private element: Element | NodeListOf<Element>;
    constructor() {}

    public getElements(elementSelector: string): Element | NodeListOf<Element> {
        if (elementSelector.startsWith('#')) {
            this.element = document.querySelector(elementSelector);
        } else {
            this.element = document.querySelectorAll(elementSelector);
            this.element = this.getObjectForSingle(this.element);
        }
        return this.element;
    }

    private getObjectForSingle(elements: NodeListOf<Element> | Element): NodeListOf<Element> | Element {
        if (Array.isArray(elements) && elements.length === 1) {
            return elements[0];
        }

        return elements;
    }
}
