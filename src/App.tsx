import React from 'react';
import DesignSystemProvider from './components/strutures/themeProvider/AppThemeProvider';
import { HashRouter as Router } from 'react-router-dom';
import { Navigation } from './components/strutures/router/Navigation';
import { SwitchNav } from './components/strutures/router/SwitchNav';
import { makeStyles } from '@talentsoft/design-system';
import './globalStyle.css';

const useStyle = makeStyles((theme) => ({
    nav: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(3)
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'inherit'
    }
}))
export const App = () => {
    const styles = useStyle();
    return (
        <DesignSystemProvider>
            <Router basename='/'>
                <div className={styles.nav}>
                    <Navigation />
                </div>
                <div className={styles.content}>
                    <SwitchNav /> 
                </div>
            </Router>
        </DesignSystemProvider>
    )
}

