function validIPAddress(queryIP: string): string {
  if (/[^\da-zA-Z:\.]/.test(queryIP))
    return 'Neither'
  const maybeIPv4 = queryIP.includes('.')
  const maybeIPv6 = queryIP.includes(':')
  if (maybeIPv4 === maybeIPv6)
    return 'Neither'
  if (maybeIPv4) {
    const parts = queryIP.split('.')
    if (parts.length !== 4)
      return 'Neither'
    for (const part of parts) {
      if (part == '0')
        continue
      const num = parseInt(part)
      // .. || .256. || .012.
      if (!num || num > 255 || `${num}` != part)
        return 'Neither'
    }
    return 'IPv4'
  } else {
    if (queryIP.includes(':::'))
      return 'Neither'
    if (queryIP.includes('::')) {
      const [leftParts, rightParts] = queryIP.split('::').map(parts => parts.split(':'))
      if ((leftParts.length && Number(leftParts[leftParts.length - 1]) === 0) ||
        (rightParts.length && Number(rightParts[0]) === 0))
        return 'Neither'
      for (const parts of [leftParts, rightParts])
        for (const part of parts)
          if (!/^[0-9a-fA-F]{1,4}$/.test(part))
            return 'Neither'
      return 'IPv6'
    } else {
      if (queryIP.startsWith(':') || queryIP.endsWith(':'))
        return 'Neither'
      const parts = queryIP.split(':')
      if (parts.length !== 8)
        return 'Neither'
      for (const part of parts)
        if (!/^[0-9a-fA-F]{1,4}$/.test(part))
          return 'Neither'
      return 'IPv6'
    }
  }
}