import React from "react";
import {Grid, Icon, Header, Segment, Message, Form, Select} from 'semantic-ui-react'
import Option from "./Option";

class Votes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {votes: [], currentVote: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addVote = this.addVote.bind(this);
        this.handle = this.handle.bind(this);
    }

    handleChange(e, {name, value}) {
        this.setState({currentVote: value});
    }

    addVote() {
        this.state.votes.push(this.state.currentVote);
        this.state.currentVote = '';
        this.setState(this.state);
    }

    handle() {
        this.props.handle(this.state.votes);
    }

    render() {
        if (!this.props.show) {
            return '';
        }
        return (<Segment stacked attached>
            <Form>
                <Form.Group>
                    <Form.Select options={this.props.options.map((option, index) => {
                        return {
                            key: index,
                            text: option,
                            value: index
                        };
                    })} value={this.state.currentVote} width={11}
                                 onChange={this.handleChange} placeholder='Select an option'/>
                    <Form.Button onClick={this.addVote} width={5}>
                        Add Vote
                    </Form.Button>
                </Form.Group>
                <Form.Group>
                    <Form.Button onClick={this.handle} width={16}>
                        Go to results ({this.state.votes.length} vote{(this.state.votes.length > 1 ? 's' : '')})
                    </Form.Button>
                </Form.Group>
            </Form>
        </Segment>);
    }
}

export default Votes;