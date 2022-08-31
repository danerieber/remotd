import Command, {Server} from '../../base'
import {CliUx} from '@oclif/core'

export default class Request extends Command {
  async run(): Promise<void> {
    const name = await CliUx.ux.prompt('Name your new peer')

    if (!this.assertIsNewPeer(name)) {
      return
    }

    try {
      const {data, status} = await Server.get('/pair')
      if (status === 200) {
        const {phrase, myMotdId, friendMotdId} = data
        this.pushMotd(name, myMotdId, friendMotdId)

        this.log('Pairing requested! Your pairing phrase is\n')
        this.log(`\t${phrase}`)
      } else {
        this.log(`Pairing unsuccessful. Status code: ${status}`)
      }
    } catch (error) {
      this.log(`${error}`)
    }
  }
}
