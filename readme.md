# CodeUp Gutenberg demo
This repo uses [Create Guten Block](https://github.com/ahmadawais/create-guten-block) and was put together as a demo for the June 2020 online session of [CodeUp Manchester](https://codeupmanchester.github.io/)

### To do
- InnerBlocks https://developer.wordpress.org/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/
- example using 'block loading screen', as used in core *Latest Posts* block, amongst others

### Resources
[Block Editor Handbook](https://developer.wordpress.org/block-editor/)  
[Block Attributes](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/)  
[Gutenberg core blocks on GitHub](https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src)

https://getwithgutenberg.com/

CSS Tricks series  
*code is slightly out of date at time of writing ... for example need to use wp.blockEditor instead of wp.editor*  
[CSS Tricks Learning Gutenberg](https://css-tricks.com/learning-gutenberg-1-series-intro/)

[Redux in Gutenberg](https://developer.wordpress.org/block-editor/packages/packages-data/#comparison-with-redux)  

React hooks in Gutenberg -  
[Fantastic hooks and where to use them](https://unfoldingneurons.com/2019/fantastic-hooks-and-where-to-use-them)  
[Using withSelect for WordPress Block Components](https://wpdev.life/using-withselect-for-wordpress-block-components/)

Dashicons (for block icons)  
https://developer.wordpress.org/resource/dashicons/

## Create Guten Block usage
>You can find the most recent version of this guide at [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
