import { run } from 'uebersicht'

const PAGE_SIZE = 4096

function physicalMemory(raw) {
  let res = raw
  res = res.trim().split(' ')[1]
  return parseInt(res)
}

function parseVmStats(raw) {
  let mappings = {
    'Anonymous pages': 'app',
    'Pages wired down': 'wired',
    'Pages active': 'active',
    'Pages inactive': 'inactive',
    'Pages occupied by compressor': 'compressed'
  }

  let ret = {}
  let res = raw
  let lines = res.split('\n')
  lines = lines.filter(x => x !== '')

  lines.forEach(x => {
    let parts = x.split(':')
    let key = parts[0]
    let val = parts[1].replace('.', '').trim()
    if (mappings[key]) {
      let k = mappings[key]
      ret[k] = val * PAGE_SIZE
    }
  })
  return ret
}

export const command = () => {
  run('sysctl hw.memsize').then(total => {
    run('/usr/bin/vm_stat').then((stats) => {
      const active = parseVmStats(stats).active || 0;
      const parsedTotal = physicalMemory(total);

      window.LumiereMemoryPercentage = Math.round((100 * active) / parsedTotal);
    }).catch(console.log)
  }).catch(console.log)
};
export const refreshFrequency = 20000;
