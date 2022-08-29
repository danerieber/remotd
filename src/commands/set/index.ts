import {CliUx} from '@oclif/core'
import Command, {Config, Server} from '../../base'

export default class Set extends Command {
  static args = [{name: 'name', description: 'set a peer\'s motd', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Set)

    const motds = Config.get('motds') as any[]
    const names = motds.map(motd => motd.name) as string[]
    if (!names.includes(args.name)) {
      this.log(`The peer ${args.name} does not exist. To list your peers, use "remotd peers"`)
      return
    }

    const message = await CliUx.ux.prompt(`Enter a message for ${args.name}`)

    if (!message) {
      this.log('Message must not be empty!')
      return
    }

    const friendMotdId = motds.find(motd => motd.name === args.name).friendMotdId

    try {
      const {status} = await Server.patch(`/motds/${friendMotdId}`, {message: message})
      if (status === 200) {
        this.log(`Successfully set motd for ${args.name}!`)
      } else {
        this.log(`Failed to set motd. Status code: ${status}`)
      }
    } catch (error) {
      this.log(`${error}`)
    }
  }
}
