import {getW} from "@/server/w";

const w = getW();
console.log('got w')

export function getO() {
    return 'path:' + w();
}