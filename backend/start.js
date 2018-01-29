let os = require('os');
let cp = require('child_process');

class Server {
    constructor () {
        process.title = 'node  master';
        this.fork();
    }

    fork (id) {
        let cpus = os.cpus().length;

        for (let i = 0; i < cpus; i++) {
            cp.fork('./index', { env: { id: i } });
        }
    }
}

new Server();
