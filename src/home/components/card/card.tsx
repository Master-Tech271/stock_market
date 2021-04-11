import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import AddIcon from '@material-ui/icons/Add';
import { CardType } from '../../../type';
import { ltpStatus } from '../../../constants';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles({
    root: {
      minWidth: 150,
      maxWidth: 150
    },
    title: {
      fontSize: 14,
    },
    pos: {
        fontWeight:500,
      marginTop: 12,
    },
    media: {
        height: 40,
      },
      ltpPositive:{
          color: '#59981A',
      },
      ltpNegative:{
          color: '#F51720',
      },
      ltpText:{
        display: 'flex',
        alignItems: 'center',
    }
  });
function SimpleCard(props: CardType) {
    const classes = useStyles();
    const ltpIcon = props.ltpStatus === ltpStatus.positive ? <AddIcon/> : <RemoveIcon fontSize="small" />;
    const ltpColor = props.ltpStatus === ltpStatus.positive ? classes.ltpPositive : classes.ltpNegative;
    return (
      <Card className={classes.root}>
        <CardContent>
        <CardMedia
          className={classes.media}
          image={props.logoURL}
          title="Contemplative Reptile"
        />
          <Typography variant="body1" component="h5">
              {props.title}
          </Typography>
          <Typography className={classes.pos} variant="body2" >
            {props.price}
          </Typography>
          <Typography variant="body1" component="p" className={[ltpColor, classes.ltpText].join(' ')}>
             {ltpIcon} {props.ltpValue}({props.ltpPercentage}%)
          </Typography>
        </CardContent>
      </Card>
    );
  }

  export default SimpleCard;