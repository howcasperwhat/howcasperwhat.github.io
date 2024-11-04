const r=`function validIPAddress(queryIP: string): string {\r
  if (/[^\\da-zA-Z:\\.]/.test(queryIP))\r
    return 'Neither'\r
  const maybeIPv4 = queryIP.includes('.')\r
  const maybeIPv6 = queryIP.includes(':')\r
  if (maybeIPv4 === maybeIPv6)\r
    return 'Neither'\r
  if (maybeIPv4) {\r
    const parts = queryIP.split('.')\r
    if (parts.length !== 4)\r
      return 'Neither'\r
    for (const part of parts) {\r
      if (part == '0')\r
        continue\r
      const num = parseInt(part)\r
      // .. || .256. || .012.\r
      if (!num || num > 255 || \`\${num}\` != part)\r
        return 'Neither'\r
    }\r
    return 'IPv4'\r
  } else {\r
    if (queryIP.includes(':::'))\r
      return 'Neither'\r
    if (queryIP.includes('::')) {\r
      const [leftParts, rightParts] = queryIP.split('::').map(parts => parts.split(':'))\r
      if ((leftParts.length && Number(leftParts[leftParts.length - 1]) === 0) ||\r
        (rightParts.length && Number(rightParts[0]) === 0))\r
        return 'Neither'\r
      for (const parts of [leftParts, rightParts])\r
        for (const part of parts)\r
          if (!/^[0-9a-fA-F]{1,4}$/.test(part))\r
            return 'Neither'\r
      return 'IPv6'\r
    } else {\r
      if (queryIP.startsWith(':') || queryIP.endsWith(':'))\r
        return 'Neither'\r
      const parts = queryIP.split(':')\r
      if (parts.length !== 8)\r
        return 'Neither'\r
      for (const part of parts)\r
        if (!/^[0-9a-fA-F]{1,4}$/.test(part))\r
          return 'Neither'\r
      return 'IPv6'\r
    }\r
  }\r
}`;export{r as default};
