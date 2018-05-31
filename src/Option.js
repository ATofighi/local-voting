import React from "react";
import {Grid, Icon, Header, Segment, Message, Form} from 'semantic-ui-react'

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, {name, value}) {
        this.props.handle(this.props.id, value);
    }

    render() {
        return (
            <Form.Group>
                <Form.Input name="value" placeholder='Option...' value={this.props.value} width={16}
                            onChange={this.handleChange}/>
            </Form.Group>
        );
    }
}

export default Option;