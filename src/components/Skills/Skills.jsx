import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import cx from 'classnames';
import styles from './Skills.module.css';

const Skills = () => {
    return (
            <div className={styles.container}>
            <h1 className={styles.h1}>Skills and Experience 🎓</h1>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.developer)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" gutterBottom style={{fontSize: '30px', fontFamily: 'Garamond', fontWeight: 'bold'}}>Front-End Web Developer</Typography>
                        <Typography variant="body2" style={{fontSize: '20px', fontFamily: 'Garamond', fontWeight: '600', color: '#54849b'}}>HTML <br/> CSS <br/> JavaScript <br/> ReactJS</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.designer)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" gutterBottom style={{fontSize: '30px', fontFamily: 'Garamond', fontWeight: 'bold'}}>Designer</Typography>
                        <Typography variant="body2" style={{fontSize: '20px', fontFamily: 'Garamond', fontWeight: '600', color: '#54849b'}}>Photoshop</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.other)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" gutterBottom style={{fontSize: '30px', fontFamily: 'Garamond', fontWeight: 'bold'}}>Other Languages I'm Learning</Typography>
                        <Typography variant="body2" style={{fontSize: '20px',fontFamily: 'Garamond', fontWeight: '600', color: '#54849b'}}>Python</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Skills;