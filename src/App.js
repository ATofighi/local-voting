import React from "react";
import {Grid, Icon, Header, Segment, Message, Form} from 'semantic-ui-react'
import "./App.scss";
import ChooseName from "./ChooseName.js";
import Options from "./Options";
import Votes from "./Votes";
import Result from "./Result";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "Step 1: Write an Title", stepNumber: 1, options: [], votes: []};

        this.toStep2 = this.toStep2.bind(this);
        this.toStep3 = this.toStep3.bind(this);
        this.toStep4 = this.toStep4.bind(this);
    }

    toStep2(subject) {
        this.setState({title: 'Step 2: Create Options for "' + subject + '"', stepNumber: 2});
    }


    toStep3(options) {
        this.setState({title: 'Step 3: Voting', options: options, stepNumber: 3});
    }

    toStep4(votes) {
        let theVotes = [];
        for (let index in this.state.options) {
            theVotes[index] = {
                'name': this.state.options[index],
                'count': 0
            };
        }
        for (let vote in votes) {
            theVotes[votes[vote]].count++;
        }
        console.log(theVotes);
        this.setState({'title': 'Step 4: Result! ', 'votes': theVotes, 'stepNumber': 4})
    }

    render() {
        return (

            <Grid verticalAlign="middle" textAlign="center" className={'board'}>
                <Grid.Column className={'boardColumn'}>
                    <Header as="h2">
                        Local Voting System
                    </Header>
                    <Header as="h3" attached="top">
                        {this.state.title}
                    </Header>
                    <ChooseName handle={this.toStep2} show={this.state.stepNumber == 1}/>
                    <Options handle={this.toStep3} show={this.state.stepNumber == 2}/>
                    <Votes options={this.state.options} handle={this.toStep4} show={this.state.stepNumber == 3}/>
                    <Result votes={this.state.votes} show={this.state.stepNumber == 4}/>
                    <Message>
                        Design with <Icon name="heart" color="red" fitted/> by <a href="https://alireza.atofighi.ir"
                                                                                  target="_blank">AliReza Tofighi</a>
                    </Message>
                </Grid.Column>
            </Grid>

        );
    }
}

export default App;