#!/usr/bin/env node

import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('output the version number')
  .helpOption('-h, --help', 'output usage information')

program.parse();


