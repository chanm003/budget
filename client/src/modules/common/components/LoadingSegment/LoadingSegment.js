import React from "react";
import { Dimmer, Header, Loader, Segment, Grid } from "semantic-ui-react";

export default props => {
  const dimmerClasses = ["inverted", props.isLoading ? "active" : null];
  return (
    <Segment>
      <Grid>
        <Grid.Column floated="left" width={5}>
          <Header as="h3">{props.heading}</Header>
        </Grid.Column>
        <Grid.Column floated="right" width={5} textAlign="right">
          {props.headingActions}
        </Grid.Column>
      </Grid>

      <Dimmer className={dimmerClasses.join(" ")}>
        <Loader>Loading</Loader>
      </Dimmer>
      {props.children}
    </Segment>
  );
};
