import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx"
import { observer } from "mobx-react"
import Message from "./components/message"

@observer
class App extends React.Component<{}, {}> {

    handleInputChange = (event: {target: {value: string}}) => {
        console.log(event.target.value)
        this.myText = event.target.value
    }

    @observable myText = 'mytext'
    render() {
        return (
            <div>
                <Message
                    message="hello 8080" 
                    text="world" 
                />
                <div>{this.myText}</div>
                <input type="text" value={this.myText} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));