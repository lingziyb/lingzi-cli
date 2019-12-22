#!/usr/bin/env node
const commander = require('commander');

commander
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('init', 'generate a new project from a template')

commander.parse(process.argv);