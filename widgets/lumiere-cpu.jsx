import { run } from 'uebersicht'

export const command = () => {
  run('ESC=`printf "e"`; ps -A -o %cpu | awk \'{s+=$1} END {printf("%.2f",s/8);}\'').then(usage => {
    window.LumiereCPU = Number.isFinite(Number(usage)) ? Math.round(Number(usage)) : 0
  })
};
export const refreshFrequency = 10000;
