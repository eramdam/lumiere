export const command = 'yabai -m query --spaces'

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

  window.LumiereSpaces = Array.from(spaces).map(space => {
    if (space.index === currentSpace.index) {
      return `[${space.index}]`
    }

    return space.index
  }).join(' ')
}

export const refreshFrequency = 1000;