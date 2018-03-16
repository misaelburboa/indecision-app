const appRoot = document.getElementById('app');

let visible = false;
let buttonText = 'Show Details'

const toggleDetails = (e) => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <p>This is the content visible</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
