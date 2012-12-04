Angulartest
-----------

This is sample application using AngularJS + yeoman + testacular.
I want to end 2 end test and this application can running it.
If you want to run sample, you should run follow commands.

```
$ git clone https://github.com/pochi/angulartest.git
$ cd angulartest/
$ node scripts/web-server.js 
Http Server running at http://localhost:8000/
$ testacular start testacular-e2e.conf.js 
info: Web server started at http://localhost:9876/
...
$ testacular run testacular-e2e.conf.js 
Chrome 23.0: Executed 1 of 1 SUCCESS (0.569 secs / 0.28 secs)
```
