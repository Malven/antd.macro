
import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'reactive.macro',
  plugin,
  babelOptions: {
    parserOpts: {
    },
  },
  fixtures: join(__dirname, 'fixtures'),
});
