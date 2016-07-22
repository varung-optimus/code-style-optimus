PATH="$PATH:/c/Program Files/nodejs/node"
__dirname=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
__filename="${0##*/}"

grunt_linting_runner="
var grunt = require('grunt');

grunt.tasks(['optimus-code-style']);
"

node -e "$grunt_linting_runner"
