import {CliUx} from '@oclif/core'
import Command, {Server} from '../../base'

export default class Send extends Command {
  static args = [{name: 'name', description: 'set a peer\'s motd', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Send)

    if (!this.assertIsExistingPeer(args.name)) return

    const message = await CliUx.ux.prompt(`Enter a message for ${args.name}`)

    if (!message) {
      this.log('Message must not be empty!')
      return
    }

    const friendMotdId = this.motds().find(motd => motd.name === args.name).friendMotdId

    try {
      const {status} = await Server.patch(`/motds/${friendMotdId}`, {message: message})
      if (status === 200) {
        this.log(`Successfully sent motd for ${args.name}!`)
      } else {
        this.log(`Failed to send motd. Status code: ${status}`)
      }
    } catch (error) {
      this.log(`${error}`)
    }
  }
}
