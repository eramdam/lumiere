export const command = 'cat lumiere/.cache/window.json'

function safeJson(raw) {
  let result = '';

  try {
    result = JSON.parse(raw);
  } catch (e) {
  }

  return result
}

export const render = ({ output }) => {
  const yabai = safeJson(output)

  let { app, title } = yabai;
  title = (title || '').replace(/^\[[0-9]+\]/, '').trim()

  function computeTitle() {
    if (!app) {
      return '';
    }

    return `[${app}] ${title}`.trim();
  }

  window.LumiereWindowTitle = computeTitle()

  return null;
}

export const refreshFrequency = 500;