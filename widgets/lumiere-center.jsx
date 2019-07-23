import { run } from 'uebersicht'

const SPACES = 'SPACES'
const WINDOW_TITLE = 'YABAI'
const LUMIERE_DATE = 'DATE'
const LUMIERE_CPU = 'CPU'
const LUMIERE_MEM = 'MEM'
const MUSIC = 'MUSIC'

function safeJson(raw) {
  let result = '';

  try {
    result = JSON.parse(raw);
  } catch (e) {
  }

  return result
}

const sampleNames = ['window']

export const command = (dispatch) => {
  dispatch({
    type: WINDOW_TITLE, data: window.LumiereWindowTitle
  })
  dispatch({
    type: SPACES, data: window.LumiereSpaces
  })
  dispatch({ type: LUMIERE_DATE, data: window.LumiereDate })
  dispatch({ type: LUMIERE_CPU, data: window.LumiereCPU })
  dispatch({ type: LUMIERE_MEM, data: window.LumiereMemoryPercentage })
  dispatch({ type: MUSIC, data: window.LumiereMusic || '' })
}
export const refreshFrequency = 200

export const initialState = {
  windowTitle: '',
  clock: '',
  cpu: 0,
  mem: 0,
  spaces: '',
  music: ''
}

export const render = ({ spaces, windowTitle, clock, cpu, mem, music }) => {
  return <div>
    <div className="bar">
      <div className="spaces">{spaces}</div>
      <div className="music">{String(music).length > 0 && `♫ ${music}`}</div>
      <div className="title">
        <div className="title-content">
          {windowTitle}
        </div>
      </div>
      <div className="clock">{clock}</div>
      <div className="stats">
        {cpu && (
          <div className="stat">
            <span className="label">C:</span>
            <span className="content">
              {cpu}%
          </span>
          </div>
        )}
        {mem && (
          <div className="stat">
            <span className="label">M:</span>
            <span className="content">
              {mem}%
          </span>
          </div>
        )}
      </div>
    </div>
  </div>
}

export const updateState = (event, previousState) => {
  const { type, data } = event
  const { windowTitle, clock, cpu, spaces, mem, music } = previousState

  switch (type) {
    case WINDOW_TITLE:
      return data !== windowTitle && {
        ...previousState,
        windowTitle: event.data
      } || previousState

    case SPACES:
      return data !== spaces && {
        ...previousState,
        spaces: event.data
      } || previousState

    case LUMIERE_DATE:
      return data !== clock && {
        ...previousState,
        clock: event.data
      } || previousState

    case LUMIERE_CPU:
      return data !== cpu && {
        ...previousState,
        cpu: event.data
      } || previousState

    case LUMIERE_MEM:
      return data !== mem && {
        ...previousState,
        mem: event.data
      } || previousState

    case MUSIC:
      return data !== music && {
        ...previousState,
        music: event.data
      } || previousState

    default:
      return previousState
  }
}