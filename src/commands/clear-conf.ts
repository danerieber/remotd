import Command, {Config, Server} from '../base'
import {CliUx} from '@oclif/core'

export default class ClearConf extends Command {
  async run(): Promise<void> {
    const confirmed = await CliUx.ux.confirm('Are you sure you want to clear you config? (y/n)')
    if (confirmed) {
      Config.clear()
      Server.defaults.baseURL = ''
      Server.defaults.headers.common.UserKey = ''
      this.log('Config has been cleared.')
    }
  }
}
