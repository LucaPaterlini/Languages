/* molto utile per andare a fare dei sottoprocessi
const spawn = require('child_process').spawn;
const ls = spawn('ls',['-lh','/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data',(data)=>{
    console.log(`stderr: ${data}`);
});

ls.on('close', (code)=>{
    console.log(`child process exited with code ${code}`);
});
   */
/*
const exec = require('child_process').exec;
exec('cat *.js bad_file | wc -l',(error, stdout, stderr) => {
   if(error){
       console.error(`exec error: ${error}`);
       return;
   }
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
}); */
/*
const fs = require('fs');
const spawn = require('child_process').spawn;
//const out = fs.openSync('./out.log','a')
const err = fs.openSync('./err.log','a');

const child = spawn('prg',[],{
   detached: true,
    stdio: ['ignore', out, err]
});

child.unref();*/
/*
const spawn = require('child_process').spawn;
const grep = spawn('grep',['ssh']);

grep.on('close',(close, signal) => {
   console.log(`child process terminated due to receipt of signal ${signal}`);
});*/
/*
grep.kill('SIGHUP');-*/
/*
'use strict';
const spawn = require('child_process').spawn;

const child = spawn('sh', ['-c',
    `node -e "setInterval(() => {
},500);"`],{
    stdio:['inherit','inherit','inherit']
});

setTimeout( () => {
    child.kill();
}, 2000);*/
/*
const spawn = require('child_process').spawn;
const grep = spawn('grep',['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();*/

const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
    console.log('PARENT got message:',m);
});

n.send({hello:"world"});