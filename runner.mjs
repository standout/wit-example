import { test } from './output/app.mjs';
import { Context } from './interface/host.mjs';

const context = new Context();

const rawJSON = test(context);
const json = JSON.parse(rawJSON);

console.log(json);
