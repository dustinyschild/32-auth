![DV](https://www.deltavcodeschool.com/wp-content/uploads/DeltaV.png) 32: Authentication and Authorization
======

## Submission Instructions
* fork this repository & create a new branch for your work
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

## Learning Objectives
* students will be able to manage basic and bearer auth on the client side
* students will learn to manage cookies on the client side

## Requirements
#### Configuration
#### backend
* clone [sluggram-backend](http://github.com/slugbyte/sluggram)

##### frontend
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
* `src/style/lib`
  * `_vars.scss`
* `src/style/base`
  * `_base.scss`
  * `_reset.scss`
* `src/style/layout`
  * `_header.scss`
  * `_footer.scss`
  * `_content.scss`

#### Feature Tasks
* create a simple front end for your cf-gram (or comparable) API
* create a landing page that enables a user to signup and signin
  * redirect the user to the dashboard page on signup or signin
  * store the users token in `localStorage` on signin

#### Test
* test your redux reducers
* **optional:** test your `util` methods
