import crypto from 'crypto'

export default function random(num) {
  return crypto
    .randomBytes(num)
    .toString('hex')
    .substr(0, num)
}
