import React, { useState } from 'react';
import { Stack, IStackStyles } from 'office-ui-fabric-react';

import { SideBar } from '../SideBar/SideBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import HeaderNav from '../HeaderNav/HeaderNav';

const containerStackStyles: IStackStyles = {
    root: {
        minHeight: '800px',
    },
};

const contentStackStyles: IStackStyles = {
    root: {
        minHeight: '400px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
        boxSizing: 'border-box',
    },
};

const AppLayout: React.FC = props => {
    const [navVisible, setNavVisible] = useState(true);

    return (
        <ScrollToTop>
            <Stack verticalFill styles={containerStackStyles}>
                <HeaderNav
                    onWaffleClicked={() =>
                        setNavVisible(prevState => !prevState)
                    }
                />

                <Stack horizontal verticalFill>
                    {navVisible && <SideBar />}
                    <Stack
                        grow
                        verticalFill
                        styles={contentStackStyles}
                    >
                        {props.children}
                    </Stack>
                </Stack>
            </Stack>
        </ScrollToTop>
    );
};

export default AppLayout;
