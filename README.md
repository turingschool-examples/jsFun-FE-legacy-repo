# jsFun

This repo contains practice exercises for the fundamental JavaScript concepts of prototype methods and scope. Each concept has a corresponding folder with a README that includes instructions for solving each type of problem.

## Getting Started

**Fork** this repo (do not clone), then clone your forked copy to your machine. `cd` into the directory for the project and run `npm install`.

Check out [this video](https://vimeo.com/691112332/2a9ef1221c) for a walkthrough of the set up and first test!

## Running the Tests

To run all tests for both protoype methods and scope:

`npm test`

To run the tests for just a *single* concept:

`npm run testScope` or  `npm run testPrototypes`

## Pulling Down Repo Changes

You have now cloned your forked version of JSFun to your machine. As instructors make changes to the repo (adding exercises, fixing tests, changing problems, etc.) you'll need to pull down those changes. In order to do so, we must link your copy of JSFun on your machine to the Turing github version by adding a new remote repository.

In your terminal, from within the root of your JSFun project directory, run:

`git remote add turing https://github.com/turingschool-examples/jsFun.git`

If this command was successful, you should be able to run `git remote -v` and see something like the following:

```
origin  https://github.com/yourGithubUsername/jsFun.git (fetch)
origin  https://github.com/yourGithubUsername/jsFun.git (push)
turing  https://github.com/turingschool-examples/jsFun.git (fetch)
turing  https://github.com/turingschool-examples/jsFun.git (push)
```

Now, whenever instructors tell you to pull down changes, there are two steps:

1. Make sure you commit and push any changes you have currently made
2. Run `git pull turing main`

Check out [this video](https://vimeo.com/turing/review/388550182/34823726eb) if you need help pulling down new changes!

