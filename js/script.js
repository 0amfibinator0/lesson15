'use strict';

const DomElement = function (selector, height, width, bg, fontSize)  {
    this.selector = selector;
    this.height = height + 'px';
    this.width = width + 'px';
    this.bg = bg;
    this.fontSize = fontSize + 'px';
    
    this.createEl = function() {
        if(this.selector[0] === '.') {
            this.element = document.createElement('div');
            this.element.classList.add(this.selector.slice(1));
        } else if(this.selector[0] === '#') {
            this.element = document.createElement('p');
            this.element.id = this.selector.slice(1);
        }
        this.element.style.height = this.height;
        this.element.style.width = this.width;
        this.element.style.background = this.bg;
        this.element.style.fontSize = this.fontSize;

        let body = document.querySelector('body');
        body.append(this.element);
    };
};

DomElement.prototype.createText = function (text) {
    this.createEl();
    this.element.textContent = text;
};

let elem = new DomElement('.block', 350, 650, 'red', 40);
elem.createText('текст');
