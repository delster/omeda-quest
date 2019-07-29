import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default ({stats}) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h6" className={classes.title} component="h2">
        Character Stats
      </Typography>
      <Paper className={classes.root}>
        <List>
          {stats.map(s=>
            <ListItem>
              <ListItemText
                primary={s.value}
                secondary={s.shortName}
              />
            </ListItem>
          )}
        </List>
      </Paper>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))