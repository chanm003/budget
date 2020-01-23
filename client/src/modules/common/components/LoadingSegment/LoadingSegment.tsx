import React from 'react';
import { Dimmer, Header, Loader, Segment } from 'semantic-ui-react';
import './LoadingSegment.css';

interface Props {
    isLoading: boolean;
    heading: string;
    headingActions: React.ReactNode;
}

const LoadingSegment: React.FC<Props> = props => {
    const dimmerClasses = [
        'inverted',
        props.isLoading ? 'active' : null,
    ];
    return (
        <Segment className="segment">
            <div className="heading">
                <Header as="h3" className="headerText">
                    {props.heading}
                </Header>

                <div className="actions">{props.headingActions}</div>
            </div>

            <Dimmer className={dimmerClasses.join(' ')}>
                <Loader>Loading</Loader>
            </Dimmer>
            {props.children}
        </Segment>
    );
};

export default LoadingSegment;
