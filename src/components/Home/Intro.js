import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    introContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#2368E0'
    },
    introInnerContainer: {
        display: 'flex',
        width: '80%',
        margin: '4% auto',
        alignContent: 'space-evenly',
        justifyContent: 'space-evenly',    
    },
    headingContainer: {
        color: '#f73707',
        fontWeight: '800',
        letterSpacing: '0.2rem',
        textDecoration: 'underline',

        [theme.breakpoints.down('sm')]: {
            fontSize: '36px',
        },
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        
    },
    button: {
        backgroundColor: '#FFC000',
        color: '#FFF',
        width : '30%',
        borderRadius: '15px',
        fontSize: '32px',
        fontWeight: '700',
        margin : '5% 0 0 0',

        "&:hover" : {
            backgroundColor: '#18b603'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '26px',
            width: '42%'
        },
    }
}));

let Intro = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.introContainer}>
            <Grid container>
                <Grid item container className={classes.introInnerContainer}>
                    <Typography variant='h3' className={classes.headingContainer}>
                        JD POLYBAG ARTWORK & PRINTOUT
                    </Typography>
                    <Grid item container className={classes.buttonContainer}>
                        <Button 
                            variant='text'
                            className={classes.button}
                            component={Link} 
                            to='/artworkMaker'
                            onClick={() => {props.onButtonHandle('handleArtworkMakerButton()')}}
                        >   
                            ARTWORK MAKER
                        </Button>
                        <Button 
                            variant='text' 
                            className={classes.button}
                            component={Link} 
                            to='/jdPrint'
                            onClick={() => {props.onButtonHandle('handleJdPrintButton()')}}
                        >
                            JD PRINT
                        </Button>
                    </Grid>    
                </Grid>
            </Grid>
        </div>
    )
}

export default Intro;