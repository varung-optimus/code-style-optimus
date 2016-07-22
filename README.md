#Optimus Code Style

##Overview

This document explains how optimus code style package can be applied to projects that use javascript and stylesheets. The package aims to carry out static code analysis on the code and also attach a Github process that does not allow any commits to happen if the code does not satisfy coding style conventions.

#Code style and linting

Grunt is used as a task runner in conjunction with gruntify-eslint that runs grunt-eslint inside grunt. grunt-eslint is a Grunt helper for the ESLint linter. Refer Appendix A for ESLint rules 

For sass-lint, we are making use of grunt-sass-lint which is a grunt plugin for the sass-lint.  Refer Appendix B for SASSLint rules.

#Githooks
We have used Git hooks on precommit process to validate that the code is verified by the Optimus Code Style. If there are any issues found in the code, then the code is not allowed to be committed.


#More Details
Refer https://docs.google.com/document/d/1F7XBiYC_FOdg45ZDltBKRHuQjj6ijQnJDHfIxFWZbBc/
