import Command from '../../base'

export default class Peers extends Command {
  async run(): Promise<void> {
    const names = this.names()
    if (names) {
      this.log(names.map(name => `- ${name}`).join('\n'))
    } else {
      this.log('No peers found.')
    }
  }
}
