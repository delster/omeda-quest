import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Ticker from "./Ticker"
import Clicker from "./Clicker"

export default () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h6" className={classes.title} component="h2">
        Combat Area
      </Typography>
      <h2>Ticker.js:</h2>
      <Ticker />
      <h2>Clicker.js:</h2>
      <Clicker clickDmg={3} />
    </>
  )
}

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))
