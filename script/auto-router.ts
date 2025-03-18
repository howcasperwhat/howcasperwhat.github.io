import fs from 'fs'
import { basename, dirname, extname } from 'path'
import type { RouteRecordRaw } from "vue-router"

interface FileInfo {
  basename: string
  ext: string
}
interface DirectoryInfo {
  name: string
  children?: (DirectoryInfo | FileInfo)[]
}
interface ScanOptions {
  excludeDirs?: string[]
  excludeFiles?: string[]
  excludes?: string[]
}

function scanDirectory(path: string, options?: ScanOptions): DirectoryInfo {
  const entries = fs.readdirSync(path, { withFileTypes: true })
  const directories = entries.filter(e => e.isDirectory() &&
    !options?.excludeDirs?.includes(e.name) &&
    !options?.excludes?.includes(e.name))
  const files = entries.filter(e => e.isFile() &&
    !options?.excludeFiles?.includes(basename(e.name)) &&
    !options?.excludes?.includes(basename(e.name)))

  const result: DirectoryInfo = {
    name: basename(path),
    children: [
      ...directories.map(d => scanDirectory(`${path}/${d.name}`, options)),
      ...files.map(f => ({ basename: basename(f.name), ext: extname(f.name) }))
    ]
  }

  return result
}

const EXCLUDE_DIRS = ['components', 'logics', 'stores', 'types']
const EXCLUDES = ['.DS_Store']
fs.writeFileSync(
  'nesting.json',
  JSON.stringify(
    scanDirectory(
      'src/pages',
      {
        excludes: EXCLUDES,
        excludeDirs: EXCLUDE_DIRS
      }), null, 2
  )
)
