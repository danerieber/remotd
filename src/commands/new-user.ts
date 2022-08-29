import Command from '../base'
import {CliUx} from '@oclif/core'

export default class NewUser extends Command {
  async run(): Promise<void> {
    const confirmed = await CliUx.ux.confirm('Are you sure? This will remove all existing motds. (y/n)')
    if (confirmed) {
      this.genNewUserKey()
    }
  }
}
