oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g remotd
$ remotd COMMAND
running command...
$ remotd (--version)
remotd/0.0.0 darwin-arm64 node-v16.16.0
$ remotd --help [COMMAND]
USAGE
  $ remotd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`remotd hello PERSON`](#remotd-hello-person)
* [`remotd hello world`](#remotd-hello-world)
* [`remotd help [COMMAND]`](#remotd-help-command)
* [`remotd plugins`](#remotd-plugins)
* [`remotd plugins:install PLUGIN...`](#remotd-pluginsinstall-plugin)
* [`remotd plugins:inspect PLUGIN...`](#remotd-pluginsinspect-plugin)
* [`remotd plugins:install PLUGIN...`](#remotd-pluginsinstall-plugin-1)
* [`remotd plugins:link PLUGIN`](#remotd-pluginslink-plugin)
* [`remotd plugins:uninstall PLUGIN...`](#remotd-pluginsuninstall-plugin)
* [`remotd plugins:uninstall PLUGIN...`](#remotd-pluginsuninstall-plugin-1)
* [`remotd plugins:uninstall PLUGIN...`](#remotd-pluginsuninstall-plugin-2)
* [`remotd plugins update`](#remotd-plugins-update)

## `remotd hello PERSON`

Say hello

```
USAGE
  $ remotd hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/danerieber/remotd/blob/v0.0.0/dist/commands/hello/index.ts)_

## `remotd hello world`

Say hello world

```
USAGE
  $ remotd hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `remotd help [COMMAND]`

Display help for remotd.

```
USAGE
  $ remotd help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for remotd.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `remotd plugins`

List installed plugins.

```
USAGE
  $ remotd plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ remotd plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `remotd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ remotd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ remotd plugins add

EXAMPLES
  $ remotd plugins:install myplugin 

  $ remotd plugins:install https://github.com/someuser/someplugin

  $ remotd plugins:install someuser/someplugin
```

## `remotd plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ remotd plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ remotd plugins:inspect myplugin
```

## `remotd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ remotd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ remotd plugins add

EXAMPLES
  $ remotd plugins:install myplugin 

  $ remotd plugins:install https://github.com/someuser/someplugin

  $ remotd plugins:install someuser/someplugin
```

## `remotd plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ remotd plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ remotd plugins:link myplugin
```

## `remotd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ remotd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ remotd plugins unlink
  $ remotd plugins remove
```

## `remotd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ remotd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ remotd plugins unlink
  $ remotd plugins remove
```

## `remotd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ remotd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ remotd plugins unlink
  $ remotd plugins remove
```

## `remotd plugins update`

Update installed plugins.

```
USAGE
  $ remotd plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
