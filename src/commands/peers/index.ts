import Command, {Config} from '../../base'

export default class Peers extends Command {
  async run(): Promise<void> {
    const names = ((Config.get('motds') as any[]).map(motd => motd.name)) as string[]
    if (names) {
      this.log(names.map(name => `- ${name}`).join('\n'))
    } else {
      this.log('No peers found.')
    }
  }
}
