import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function MediaCard(props) {
  //const { data } = props;

  if (props === undefined) {
    return (
      <div>loading...</div>
    )
  }
  return (
    <Card className={'media-card'}>
      <CardActionArea>
        <CardMedia
          className={'media'}
          image={props.data.thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
