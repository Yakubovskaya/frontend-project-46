#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('output the version number')
  .helpOption('-h, --help', 'output usage information');

program.parse();


