import React from 'react';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { Stack, IStackStyles } from 'office-ui-fabric-react';

type Props = {
    header: string;
};

const contentStackStyles: IStackStyles = {
    root: {
        minHeight: '400px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px',
        boxSizing: 'border-box',
    },
};

export const Panel: React.FC<Props> = props => (
    <div style={{ boxShadow: Depths.depth8 }}>
        <Stack
            styles={contentStackStyles}
            tokens={{ childrenGap: 10 }}
        >
            <Stack.Item>
                <h3 style={{ fontSize: FontSizes.size24 }}>
                    {props.header}
                </h3>
            </Stack.Item>
            <Stack.Item>{props.children}</Stack.Item>
        </Stack>
    </div>
);
