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