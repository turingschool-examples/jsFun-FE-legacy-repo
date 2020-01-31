# jsFun

This repo contains practice exercises for fundamental JavaScript concepts including scope, prototype methods, and context. Each concept has a corresponding folder with a README that includes instructions for solving each type of problem.

## Getting Started

**Fork** this repo (do not clone), then clone your forked copy to your machine. `cd` into the directory for the project and run `npm install`.

Check out [this video](https://vimeo.com/turing/review/388545928/baac6f5a2d) if you need help!

## Running the Tests

To run all tests for all three concepts:

`npm test`

To run the tests for just a *single* concept:

`npm run testContext` or  `npm run testScope` or  `npm run testPrototypes`


## Submission Expectations

The cohort will be split up into JS Fun teams. Each team will pick a name, and be collectively responsible for doing a certain number of JS Fun exercises each week.

You'll be expected to push up your completed JS Fun exercises **every Thursday by 6pm** for submission. Instructors will check the amounts each student has done, and update team counts every Friday morning. The team with the most JS Fun exercises completed by week five will get to pick a breakfast or party-snack for the class, which the instructors will bring in during week 6.

In the event of a tie, the winning team will be decided by a live coding showdown on Friday of Week 5.

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
2. Run `git pull turing master`

Check out [this video](https://vimeo.com/turing/review/388550182/34823726eb) if you need help!

