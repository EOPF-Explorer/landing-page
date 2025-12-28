// VitePress data loader for services catalog
import fs from 'fs'
import path from 'path'

export default {
  // Data will be cached and only updated when services.json changes
  watch: ['../../services.json'],
  load() {
    const servicesPath = path.resolve(__dirname, '../../services.json')
    const servicesData = fs.readFileSync(servicesPath, 'utf-8')
    return JSON.parse(servicesData)
  }
}