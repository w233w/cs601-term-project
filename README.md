# cs601-term-project

## Author
[Yang Ye](https://github.com/w233w)

## Deployed Git Pages
https://w233w.github.io/cs601-term-project/

> Go branch "github-pages" under this repo to view source file.

## Back-end spring-boot server & database
https://github.com/w233w/spring-boot-backend-for-project
> Deployed on Microsoft Azure, check more detail on README.md

## To start serve at localhost: 8080
```console
 npm run serve
```
if port 8080 is used, try:
```console
 npm run serve -- -- port PORT_NUMBER
```

## To just build project
```console
 npm run build
```

## To on-click update github pages
> I believe you have to log in my git account to run this script.
```console
sh updatePage.sh
```

# Project details

## Description
This project is built by Vue3. Content is about myself.

## Technology used
* HTML
* CSS
* Json
* Javascript
* Vue3
* Springboot
* MySQL
* Shell scripting

Nothing to say with HTML, CSS. Just regular usage used on Vue compoments.

Json as data used to store resume information.

Most of Javascript code is used on Vue. And Vue built the project.

Springboot is used as Backend server application recieve POST request. It also connect to a MySQL server so I can ciollect data. This part is belongs to extra credit.

Shell scripting is used to on-click update github pages.

## Quick inspect of code by grading rubric
Nothing to say about Design/Layout/Text. They are just visual things.

For navigation. I believe my menu bar is clean and clear to use. Menu bar will also highlight the current router to let you know where you are (by setting 'a.router-link-exact-active')

For images. both image has alter, width, height. The image in gallary has border as halos. There are no large image file so no thumbnail needed.

For machanics, everything working fine on chrome, firefox and edge.

For HTML, CSS, Javascript, Vue, DOM. Nothing special here. I used a lots of different HTML tags, different CSS selector, Custom VUE compoments by access DOM.

Validation is applied on form, only people follow the rule they can submit the form. However my website can run with Javascript disabled since the whole project is built by Vue.

Extra credit: I deploy the data base and back-end application on Microsoft Azure. For more detail, please check back-end git repo, you can find link above.

# Deprecated version
> Personal archive purpose, don't grade it. It is not a part of term project.

https://github.com/w233w/MET-CS601-Term-Project