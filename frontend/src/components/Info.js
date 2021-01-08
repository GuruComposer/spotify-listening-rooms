import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

export default function Info(props) {
  const [page, setPage] = useState(pages.JOIN);

  function joinInfo() {
    var joinText = (
      <div>
        <p>
          Click on the 'Join A Room Button' and you will be able to type in a
          friend's room-code and join their listening room. When you are in a
          host's room the host will be able to control all room members' Spotify
          so that everyone in the room can listen to the same music at the same
          time.
        </p>
        <p>
          Room members can cast votes to skip the song or not. When a certain
          number of votes have been cast, the song will autmoatically skip!
        </p>
        <p>
          Throw a listening party where everyone can listen to the same music at
          the same time in a cool Spotify Listening Room!
        </p>
      </div>
    );

    return joinText;
  }

  function createInfo() {
    var createText = (
      <div>
        <p>
          Click on the 'Create A Room' Button to start hosting a new room where
          you control the music that is playing. Share your unique room-code
          with friends so that they can join your room. Have an awesome music
          listening party together with your friends all from the comfort of
          your own homes!
        </p>
      </div>
    );

    return createText;
  }

  useEffect(() => {
    console.log("ran");
    return () => console.log("cleanup");
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          What is Spotify Listening Rooms?
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1">
          {page === pages.JOIN ? joinInfo() : createInfo()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconButton
          onClick={() => {
            page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {page === pages.CREATE ? (
            <NavigateBeforeIcon />
          ) : (
            <NavigateNextIcon />
          )}
        </IconButton>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
