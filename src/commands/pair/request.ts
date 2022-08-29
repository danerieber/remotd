import Command, {Config, Server} from '../../base'
import {CliUx} from '@oclif/core'

export default class Request extends Command {
  async run(): Promise<void> {
    const name = await CliUx.ux.prompt('Name your new peer')

    if (!name) {
      this.log('Name cannot be empty.')
      return
    }

    const motds = Config.get('motds') as any[]
    const names = motds.map(motd => motd.name) as string[]
    if (names.includes(name)) {
      this.log(`A peer with the name ${name} already exists`)
      return
    }

    try {
      const {data, status} = await Server.get('/pair')
      if (status === 200) {
        const {phrase, myMotdId, friendMotdId} = data
        motds.push({
          name: name,
          myMotdId: myMotdId,
          friendMotdId: friendMotdId,
        })
        Config.set('motds', motds)

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
