import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import LinearProgress from "@material-ui/core/LinearProgress"

export default ({ clickDmg }) => {
  const classes = useStyles()
  const [level, setLevel] = useState(1)
  const [hp, setHP] = useState(level * 10)
  const [maxHP, setMaxHP] = useState(level * 10)

  const doClickDamage = () => {
    setHP(hp - clickDmg)
    if (hp-clickDmg <= 0) {
      setLevel(level + 1)
      resetHP()
    }
  }

  const resetHP = () => {
    setMaxHP(level * 10)
    setHP(level * 10)
  }

  return (
    <>
      <Paper className={classes.root}>
        <Typography
          align="center"
          display="block"
          variant="button"
          gutterBottom
        >
          Level {level}: {hp}/{maxHP}
        </Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={(hp / maxHP) * 100}
        />
        <ButtonBase
          focusRipple
          className={classes.clickArea}
          onClick={doClickDamage}
        >
          <Typography variant="button">Attack!</Typography>
        </ButtonBase>
      </Paper>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  clickArea: {
    backgroundColor: `#f0f0f0`,
    height: `8em`,
    width: `100%`,
    marginTop: `2em`,
  },
}))
