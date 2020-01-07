import { css } from "uebersicht"
export const command = "pmset -g batt | egrep -o '([0-9]+%).*'";
export const refreshFrequency = 60000;

export const render = event => {
  const [percentage] = String(event.output).split('; ');

  return percentage ? `B:${percentage}` : null
};

export const className = css`
  position: relative;
  font-weight: 400;
  grid-area: stats;
  display: flex;
`