interface PrettyOptions {
  d: string
  h: string
  m: string
  s: string
}

/**
 * 美化秒级时长显示
 * @param duration
 * @param options
 * @returns
 *
 * @example
 * makeDurationPretty(121)
 * // => '2分1秒'
 */
export function makeDurationPretty(
  duration: number,
  options: PrettyOptions = {
    d: '天',
    h: '时',
    m: '分',
    s: '秒'
  }
) {
  if (duration <= 0) {
    return 0
  }
  const { d, h, m, s } = options
  const days = duration / 60 / 60 / 24
  const daysRound = Math.floor(days)
  const daysStr = `${daysRound > 0 ? `${daysRound}${d}` : ''}`
  // hours
  const hours = duration / 60 / 60 - 24 * daysRound
  const hoursRound = Math.floor(hours)
  const hoursStr = `${hoursRound > 0 ? `${hoursRound}${h}` : ''}`
  // minutes
  const minutes = duration / 60 - 24 * 60 * daysRound - 60 * hoursRound
  const minutesRound = Math.floor(minutes)
  const minutesStr = `${minutesRound > 0 ? `${minutesRound}${m}` : ''}`
  // seconds
  const seconds =
    duration -
    24 * 60 * 60 * daysRound -
    60 * 60 * hoursRound -
    60 * minutesRound
  const secondsRound = Math.floor(seconds)
  const secondsStr = `${secondsRound > 0 ? `${secondsRound}${s}` : ''}`

  const durationStr = `${daysStr}${hoursStr}${minutesStr}${secondsStr}`
  return durationStr
}
