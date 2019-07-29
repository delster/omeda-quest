import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Stats from "./Stats"
import Combat from "./combat/Combat"

export default () => {
  const [currencyA, setCurrencyA] = useState(0)
  const [stats, setStats] = useState(testStats)

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={5} lg={2}>
          <Stats stats={stats} />
        </Grid>
        <Grid item xs>
          <Combat />
        </Grid>
      </Grid>
    </Container>
  )
}

const testStats = [
  { name: "Click Damage", shortName: "clickDmg", value: 1 },
  { name: "Click Value", shortName: "clickVal", value: 1 },
  { name: "HP", shortName: "HP", value: 0 },
  { name: "Max HP", shortName: "MaxHP", value: 0 },
  { name: "Strength", shortName: "STR", value: 0 },
  { name: "Dexterity", shortName: "DEX", value: 0 },
  { name: "Constitution", shortName: "CON", value: 0 },
  { name: "Intelligence", shortName: "INT", value: 0 },
  { name: "Wisdom", shortName: "WIS", value: 0 },
  { name: "Charisma", shortName: "CHA", value: 0 },
]
