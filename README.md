# Node.JS project skeleton using babel

# Watch source modification

Use following command because:
- [IntelliJ(or WebStorm)'s FileWatcher](http://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/) is hard to setup.
- babel CLI cannot create sub directory.

```bash
babel src --out-dir output --watch
```