import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import './LoadingSegment.css';
import { Panel } from '../Panel/Panel';

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
        <Panel header={props.heading}>
            <div className="heading">
                <div className="headerTex"></div>
                <div className="actions">{props.headingActions}</div>
            </div>
            <Dimmer className={dimmerClasses.join(' ')}>
                <Loader>Loading</Loader>
            </Dimmer>
            {props.children}
        </Panel>
    );
};

export default LoadingSegment;
