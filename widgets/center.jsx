import { css } from "uebersicht"
export const command = "yabai -m query --windows --window";
export const refreshFrequency = false;

function safeJson(raw) {
  let result = '';

  try {
    result = JSON.parse(raw);
  } catch (e) {
  }

  return result
}

export const className = css`
  font-weight: 400;
  grid-area: title;
  text-align: center;
  position: relative;

  div::before {
    content: attr(data-window);
    position: fixed;
    height: var(--bar-height);
    line-height: var(--bar-height);
    top: 0;
    width: 60vw;
    left: 50%;
    transform: translateX(-50%);

    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

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

  return <div data-window={computeTitle()}></div>;
}