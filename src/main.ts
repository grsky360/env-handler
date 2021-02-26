import * as fs from 'fs'
import * as YAML from 'yaml'
import * as shell from 'shelljs'
import { program, CommandOptions, Option } from "commander"
import GistLoader from "./loader/Gist"

program.version('0.0.1', '-v, --version')

program.command('bind')
    // .arguments('')
    .option('--fetch-newest', 'fetch newest binding source')
    .addOption(new Option('<type>').choices(['a', 'b']))
// program.addCommand(program.createCommand('bind <type> [options...]')
//     .option()

    // .option('bind <bindType>', 'bind repository')

program.parse(process.argv);

// const options = program.opts();
// console.log(JSON.stringify(options))
// let data = YAML.parse(fs.readFileSync('./docker-compose.yml', 'utf-8'))
//
// data.services.db.ports = [ '3306:3306', ...(data.services.db.ports||[]) ]
//
// console.log(JSON.stringify(data, null, 4))
//
// console.log(YAML.stringify(data))
//
// shell.echo('a')
