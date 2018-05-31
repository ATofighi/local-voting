import React from "react";
import {Grid, Icon, Header, Segment, Message, Form} from 'semantic-ui-react'

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {options: []};
    }

    handleChange(e, {name, value}) {
        this.setState({[name]: value})
    }


    handle() {
        this.props.handle(this.state.subject);
    }

    render() {
        if(!this.props.show) {
            return '';
        }
        return (<Segment stacked attached>
            <Form onSubmit={this.handle}>
                <Form.Group>
                    <Form.Input name="subject" placeholder='Please Enter a subject' width={13}
                                onChange={this.handleChange}/>
                    <Form.Button width={3}>Go...</Form.Button>
                </Form.Group>
            </Form>
        </Segment>);
    }
}

export default Options;