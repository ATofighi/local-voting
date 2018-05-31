import React from "react";
import {Grid, Icon, Header, Segment, Message, Form} from 'semantic-ui-react'
import Option from "./Option";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {options: [""]};
    }

    handleOptionChange(key, value) {
        if (value == '') {
            delete this.state.options[key];
        } else {
            this.state.options[key] = value;
        }
        this.setState(this.state);
    }


    handle() {
        let result = [];
        for (let i in this.state.options) {
            if (this.state.options[i]) {
                result.push(this.state.options[i]);
            }
        }
        this.props.handle(result);
    }

    addOption() {
        this.state.options.push("");
        this.setState(this.state);
    }

    render() {
        if (!this.props.show) {
            return '';
        }
        return (<Segment stacked attached>
            <Form>
                {
                    this.state.options.map((option, index) => {
                        return (
                            <Option key={index} id={index} value={option} handle={this.handleOptionChange}/>
                        )
                    })
                }
                <Form.Group widths="equal">
                    <Form.Button onClick={this.addOption} color="red">Add Option</Form.Button>
                    <Form.Button color="blue" onClick={this.handle}>Next -></Form.Button>
                </Form.Group>
            </Form>
        </Segment>);
    }
}

export default Options;