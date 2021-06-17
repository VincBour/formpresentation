import React from 'react';
import DesignSystemProvider from './themeProvider/AppThemeProvider';
import { HashRouter as Router } from 'react-router-dom';
import { Navigation } from './components/router/Navigation';
import { SwitchNav } from './components/router/SwitchNav';
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
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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

