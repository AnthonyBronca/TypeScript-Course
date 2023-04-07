# How to Run TypeScript

TypeScript compiles into JavaScript, and then we can use node to run the output JavaScript file to compile our code into C

To compile a TypeScript File we use the command:

```
tsc <fileName.ts>
```

This will create a JavaScript file that we can then run node on.

Give it a shot! Try running:
(make sure you are in the Chapter0 directory)

```shell
tsc helloWorld.ts
```

you should now see a JS file appear in this directory with all the TypeScript converted into JavaScript (For now, the file only has JavaScript in it so nothing should change)

You can then run node on that JS file:

```shell
node hellWorld.js
```

Congrats! You just ran your first TypeScript File! Time to move into Chapter 1!
