# Initial setup for creating a spinning cube

Based on https://www.youtube.com/watch?v=p4BHphMBlFA 

* Create a new repo on GitHub with a LICENSE file (to make the repo non-empty)
* cd \git
* git clone https://github.com/dominicprior/three-js-demo
* cd three-js-demo
* npm init vite@latest .
  * ignore files and continue
  * vanilla
  * typeScript
* npm i
* npm i three
* npm i @types/three --save-dev  (since we're using TypeScript)
* code .
* Delete everything in index.html and main.ts, and replace with the stuff at the end of https://threejs.org/manual/#en/creating-a-scene, but with src="/src/main.ts" instead of src="/main.js"
* Delete these files: vite.svg, typescript.svg, counter.ts, style.css
* npm run dev (from the VSCode terminal)

# Adding shaders

Load these two VS Code extensions (recommended by https://www.youtube.com/watch?v=7UvpTTEE1Hs):
* WebGL GLSL Editor
* glsl-canvas

# Peeking inside the shaders

I couldn't find any source-level debugger for GLSL, and so I resorted to visual tricks like this:
```
  if (modelViewMatrix[3][2] == -1.0) {
    gl_Position.x *= 0.5;
  }
```
It showed that a `camera.position.z` of `1.0` sets `modelViewMatrix[3][2]` to `-1.0`, like we would expect, given that GLSL matrices are in column-major order.  (In a separate test, I confirmed that the `z` coord of the `position` is set to `-1.0` by the `modelViewMatrix`).

I was surprised by the negative z, until I asked [ChatGPT](https://chatgpt.com/share/67f37b49-8000-800b-a845-25eadcf39fef).
