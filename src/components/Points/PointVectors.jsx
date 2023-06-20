import React, { memo } from "react";
import PropTypes from "prop-types";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

/**
 * Component for displaying vectors of a point
 * @param {Object} point
 * @returns {JSX.Element|null}
 * @constructor
 */
const Vectors = memo(function Vectors({ point, setRecommendationIds }) {
  if (!point.hasOwnProperty("vector")) {
    return null;
  }

  // to unify the code, we will convert the vector to an object
  // when there is only one vector in the point
  let vectors = {};
  if (Array.isArray(point.vector)) {
    vectors[""] = point.vector;
  } else {
    vectors = point.vector;
  }

  return (
    <Box pt={2}>
      {Object.keys(vectors).map((key) => {
        return (
          <Grid key={key} container spacing={2}>
            <Grid item xs={4} my={1}>
              {key === "" ?
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  display={"inline"}
                  mr={1}
                >
                  Default vector
                </Typography>
                :
                <>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    display={"inline"}
                    mr={1}
                  >
                    Name:
                  </Typography>
                  <Chip
                    label={key}
                    size="small"
                    variant="outlined"
                  />
                </>
              }
            </Grid>

            <Grid item xs={4} my={1}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                display={"inline"}
                mr={1}
              >
                Length:
              </Typography>
              <Chip
                label={vectors[key].length}
                variant="outlined"
                size="small"/>
            </Grid>
            <Grid item xs={4} my={1} display={"flex"}>
              <Box sx={{ flexGrow: 1 }}/>

              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  setRecommendationIds([point.id],
                    key === "" ? null : key);
                }}
              >
                Find Similar
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
});

Vectors.propTypes = {
  point: PropTypes.object.isRequired,
  setRecommendationIds: PropTypes.func.isRequired,
};

export default Vectors;