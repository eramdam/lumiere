import { css } from "uebersicht"
export const command = `date +'%a %d/%-m · %I:%M'`
export const refreshFrequency = 2000;
export const render = ({ output }) => {
  return output
}

export const className = css`
  font-weight: 400;
  position: relative;
  grid-area: clock;
`