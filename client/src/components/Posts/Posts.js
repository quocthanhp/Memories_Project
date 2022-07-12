import React from 'react'
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts) // return posts from combinereducer
  const classes = useStyles();
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId}/>
            </Grid>
          ))
        }
      </Grid>
    )
  );
}

export default Posts