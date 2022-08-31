import {CliUx} from '@oclif/core'
import Command, {Server} from '../../base'

export default class Pair extends Command {
  async run(): Promise<void> {
    this.log('To pair with your friend, you need to enter the 5-word pairing phrase they sent you (separate words with either spaces or dashes).\nIf you want to pair with a friend and they have not given you a phrase, request a phrase and send one to them by using "remotd pair request".\n')
    const name = await CliUx.ux.prompt('Name your new peer')

    if (!this.assertIsNewPeer(name)) return

    const phrase = await CliUx.ux.prompt('Enter your pairing phrase here')

    if (!phrase) {
      this.log('Pairing phrase cannot be empty.')
      return
    }

    try {
      const {status, data} = await Server.post('/pair', {phrase: phrase})
      if (status === 200) {
        const {myMotdId, friendMotdId} = data
        this.pushMotd(name, myMotdId, friendMotdId)

        this.log('Pairing successful!')
      } else {
        this.log(`Pairing failed. Status code: ${status}`)
      }
    } catch (error) {
      this.log(`${error}`)
    }
  }
}
