It's with typescript, dont forget to do:

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

then

npx tsc --init

edit the tsconfig to add
"jsx" : "react"

and
npm i --save-dev @types/styled-components