import crypto from 'crypto'

export default function random(num = 16) {
  return crypto
    .randomBytes(num)
    .toString('hex')
    .substr(0, num)
}
