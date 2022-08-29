import Command, {Config, Server} from '../../base'

export default class Get extends Command {
  static args = [{name: 'name', description: 'get your motd from a specific peer', required: false, default: ''}]

  async run(): Promise<void> {
    const {args} = await this.parse(Get)

    const motds = Config.get('motds') as any[]

    if (args.name) {
      const names = motds.map(motd => motd.name) as string[]
      if (!names.includes(args.name)) {
        this.log(`The peer ${args.name} does not exist. To list your peers, use "remotd peers"`)
        return
      }

      const myMotdId = motds.find(motd => motd.name === args.name).myMotdId
      try {
        const {data} = await Server.get(`/motds/${myMotdId}`)
        this.log(`${args.name}: ${data.message}`)
      } catch (error) {
        this.log(`${error}`)
      }

      return
    }

    try {
      const {data} = await Server.get('/motds')
      if (data) {
        for (const motd of data) {
          const name = motds.find(m => m.myMotdId === motd._id).name
          if (name) {
            this.log(`${name}: ${motd.message}`)
          }
        }
      } else {
        this.log('No motds found. Pair with some friends using "remotd pair"!')
      }
    } catch (error) {
      this.log(`${error}`)
    }
  }
}
