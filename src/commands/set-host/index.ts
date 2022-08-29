import Command, {Config, Server} from '../../base'

export default class SetHost extends Command {
  static args = [{name: 'url', description: 'url of remotd server host', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(SetHost)

    const oldUrl = Server.defaults.baseURL
    Server.defaults.baseURL = args.url

    try {
      const {data} = await Server.get('/ping')
      if (data === 'pong') {
        Config.set('serverUrl', args.url)
        this.log('Successfully connected to server!')
        return
      }
    } catch (error) {
      this.log(`${error}`)
    }

    Server.defaults.baseURL = oldUrl
    this.log('Could not connect to server. No changes saved.')
  }
}
