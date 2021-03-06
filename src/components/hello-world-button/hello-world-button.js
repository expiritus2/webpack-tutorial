import './hello-world-button.scss';

class HelloWorldButton {

    buttonClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        button.classList.add(this.buttonClass);
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        };
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default HelloWorldButton;