import Conf from 'conf'
import axios from 'axios'
import {Command} from '@oclif/core'
import * as crypto from 'node:crypto'

const schema = {
  serverUrl: {
    type: 'string',
    default: '',
  },
  userKey: {
    type: 'string',
    default: '',
  },
  motds: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        myMotdId: {
          type: 'string',
        },
        friendMotdId: {
          type: 'string',
        },
      },
    },
    default: [],
  },
} as const

export const Config = new Conf({schema})

export const Server = axios.create({
  baseURL: Config.get('serverUrl') as string,
  headers: {UserKey: Config.get('userKey') as string},
})

export default abstract class extends Command {
  genNewUserKey(): void {
    Config.set('userKey', crypto.randomBytes(48).toString('base64'))
  }

  async init(): Promise<void> {
    const userKey = Config.get('userKey') as string
    if (!userKey) {
      this.genNewUserKey()
    } else if (userKey.length !== 64 || Buffer.from(userKey, 'base64').byteLength !== 48) {
      this.log('[WARNING] Your user key is of an unsupported format. To generate a new one, use "remotd new-user"')
    }
  }
}
