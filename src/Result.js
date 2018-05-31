import React from "react";
import {Grid, Icon, Header, Segment, Message, Form, Select, Progress} from 'semantic-ui-react'
import Option from "./Option";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }


    getTotal() {
        let sum = 0;
        for (let vote in this.props.votes) {
            sum += this.props.votes[vote].count;
        }
        return sum;
    }

    render() {
        if (!this.props.show) {
            return '';
        }
        return (<Segment.Group stacked attached>
            {this.props.votes.map((vote, index) => {
                return (
                    <Segment key={index}>
                        <Progress progress='value' value={vote.count} total={this.getTotal()}
                                  label={vote.name}/>
                    </Segment>
                )
            })}
        </Segment.Group>);
    }

}

export default Result;