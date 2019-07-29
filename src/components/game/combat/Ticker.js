import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import LinearProgress from "@material-ui/core/LinearProgress"

export default () => {
  const classes = useStyles()
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const progress = () => {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, 100)
      })
    }

    const timer = setInterval(progress, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="button" display="block" gutterBottom>
          Physical
        </Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={completed}
        />
        <br />
        <Typography variant="button" display="block" gutterBottom>
          Magical
        </Typography>
        <LinearProgress variant="determinate" value={completed} />
      </Paper>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))
