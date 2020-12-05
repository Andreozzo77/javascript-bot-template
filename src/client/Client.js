const { Client, Collection } = require('discord.js');
const { registerEvents, registerCommands } = require('../struct/registries/Registries.js');

class client extends Client {
  constructor(config) {
    super({
      /* Discord.js Client Options */
      disableMentions: 'everyone',
    });

    this.token = config.token;

    this.events = new Collection();

    this.commands = new Collection();
  }

  start() {
    super.login(this.token);
    registerEvents(this);
    registerCommands(this);
  }
}

module.exports = client;