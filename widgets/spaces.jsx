import { css } from "uebersicht"

export const command = 'yabai -m query --spaces';
export const refreshFrequency = 2000;

function safeJson(raw) {
  let result = '';

  try {
    result = JSON.parse(raw);
  } catch (e) {
  }

  return result
}


export const render = ({ output }) => {
  const spaces = safeJson(output);

  if (!spaces) {
    return null
  }

  const currentSpace = spaces.find(space => space.focused);

  if (!currentSpace) {
    return null;
  }

  const result = Array.from(spaces).map(space => {
    if (space.index === currentSpace.index) {
      return `[${space.index}]`
    }

    return space.index
  }).join(' ');

  return result;
}
export const className = css`
  grid-area: spaces;
  position: relative;
`