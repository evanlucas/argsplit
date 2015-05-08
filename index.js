module.exports = function(str) {
  if (!str) return []
  var out = []
    , quoteChar = ''
    , current = ''

  str = str.replace(/[\s]{2}/g, ' ')
  for (var i=0, len=str.length; i<len; i++) {
    var c = str[i]
    if (c === ' ') {
      if (quoteChar) {
        current += c
      } else {
        if (current) {
          out.push(current)
          current = ''
        }
      }
    } else if (c === '"') {
      if (quoteChar && quoteChar === c) {
        current += c
        out.push(current)
        quoteChar = ''
        current = ''
      } else {
        current += c
        quoteChar = c
      }
    } else if (c === "'") {
      if (quoteChar && quoteChar === c) {
        current += c
        out.push(current)
        quoteChar = ''
        current = ''
      } else {
        current +=
        quoteChar = c
      }
    } else {
      current += c
    }
  }
  if (current)
    out.push(current)

  return out
}
