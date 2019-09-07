import React from 'react';
import './App.css';
import {Button} from "./components/Button";

const defaultImg = 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg';

class App extends React.Component{
    constructor(props){
        super(props);

        const image1 = defaultImg;
        const image2 = 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056__340.jpg';
        const image3 = 'https://img-cdn.dnes.bg/d/images/photos/0411/0000411054-article2.jpg';

        this.state = {
            imageState: 0,
            imageList: [image1, image2, image3]
        };

        this.inputDigit = this.inputDigit.bind(this);
    }

    inputDigit(event) {
        let image = event.target.getAttribute('data-image');
        this.setState(() => ({
            imageState: image
        }));
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img
        src={this.state.imageList[this.state.imageState]}
        className="App-image"
        alt="logo"
            />
            <div>
            <Button name="Apple" imageState={this.inputDigit} imageIndex={0}/>
        <Button name="Orange" imageState={this.inputDigit} imageIndex={1}/>
        <Button name="Peach" imageState={this.inputDigit} imageIndex={2}/>
        </div>
        </header>
        </div>
    );
    }
}

export default App;
