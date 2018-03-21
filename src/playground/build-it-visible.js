
class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility state</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>This is the content visible</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



//Old Example:


// const appRoot = document.getElementById('app');
//
// let visible = false;
// let buttonText = 'Show Details'
//
// const stateDetails = (e) => {
//     visible = !visible;
//     render();
// }
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility state</h1>
//             <button onClick={stateDetails}>{visible ? 'Hide Details' : 'Show Details'}</button>
//             {visible && <p>This is the content visible</p>}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// render();
