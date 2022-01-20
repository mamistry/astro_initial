import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import MediaCard from "./MediaCard";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    //backgroundColor: '#424242'
  },
  media: {
    height: 140,
  },
});

const MultiCarousel = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props && props.clips.length > 0) setLoading(false);
  }, [props.clips]);

  const responsive = {
    desktop: {
      breakpoint: { max: 30000, min: 0 },
      items: 3,
      slidesToSlide: 1
    },
  };

  const carouselSkeleton = (index: number) => {
    const fakeClip = {
      thumbnail: null,
      title: null,
      headline: null
    };
    return (
      <div key={index}>
        <MediaCard data={fakeClip} />
      </div>
    )
  }

  const carouselContainerStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

  const skeletonCard = () => (
    <Card className={classes.root}>
      <CardActionArea>
        <Skeleton variant="rect" width={210} height={118} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Skeleton />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

if (loading) {
  return (
    <Carousel
      containerClass="carousel-container"
      itemClass="carousel-item"
      responsive={responsive}
      ssr={true}
      >
      {skeletonCard()}
      {skeletonCard()}
      {skeletonCard()}
      {skeletonCard()}
      {skeletonCard()}
      {skeletonCard()}
    </Carousel>
  )
}

return (
  <Carousel
  containerClass="carousel-container"
  itemClass="carousel-item"
  responsive={responsive}
  ssr={true}
  >
    {props.clips.map((clip, index) => (
        <div key={index}>
          <MediaCard data={clip} />
        </div>
      ))}
  </Carousel>
)

};

export default MultiCarousel
