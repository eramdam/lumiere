import { run } from 'uebersicht'

const LUMIERE_SPACES = 'SPACES'
const LUMIERE_WINDOW = 'YABAI'
const LUMIERE_DATE = 'DATE'
const LUMIERE_CPU = 'CPU'
const LUMIERE_MEM = 'MEM'
const LUMIERE_MUSIC = 'MUSIC'
const LUMIERE_BATTERY = 'BATTERY'

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
    type: LUMIERE_WINDOW, data: window.LumiereWindowTitle
  })
  dispatch({
    type: LUMIERE_SPACES, data: window.LumiereSpaces
  })
  dispatch({ type: LUMIERE_DATE, data: window.LumiereDate })
  dispatch({ type: LUMIERE_CPU, data: window.LumiereCPU })
  dispatch({ type: LUMIERE_MEM, data: window.LumiereMemoryPercentage })
  dispatch({ type: LUMIERE_MUSIC, data: window.LumiereMusic || '' })
  dispatch({ type: LUMIERE_BATTERY, data: window.LumiereBattery || '' })
}
export const refreshFrequency = 1000

export const initialState = {
  windowTitle: '',
  clock: '',
  cpu: 0,
  mem: 0,
  spaces: '',
  music: ''
}

export const render = ({ spaces, windowTitle, clock, cpu, mem, music, battery }) => {
  return <div>
    <div className="bar">
      <div className="spaces">{spaces}</div>
      <div className="music">{String(music).trim().length > 0 && `♫ ${music}`}</div>
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
        {Number.isInteger(battery) && (
          <div className="stat">
            <span className="label">B:</span>
            <span className="content">
              {battery}%
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
    case LUMIERE_WINDOW:
      return data !== windowTitle && {
        ...previousState,
        windowTitle: event.data
      } || previousState

    case LUMIERE_SPACES:
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

    case LUMIERE_MUSIC:
      return data !== music && {
        ...previousState,
        music: event.data
      } || previousState

    case LUMIERE_BATTERY:
      return data !== music && {
        ...previousState,
        battery: event.data
      } || previousState

    default:
      return previousState
  }
}