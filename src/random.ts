import crypto from 'crypto'

export function random(num = 16): string {
  return crypto
    .randomBytes(num)
    .toString('hex')
    .substr(0, num)
}
