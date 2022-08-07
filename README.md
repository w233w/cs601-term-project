# cs601-term-project

## Author
[Yang Ye](https://github.com/w233w)

## Deployed Git Pages
https://w233w.github.io/cs601-term-project/

> Go to branch "github-pages" under this repo to view the source file.

## Back-end spring-boot server & database
https://github.com/w233w/spring-boot-backend-for-project
> Deployed on Microsoft Azure, check more detail on README.md

# Geting start

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

## To one-click update Github pages
> I believe you have to log in to my git account to run this script.
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

Nothing to say with HTML, or CSS. Just regular usage used on Vue components.

JSON as data used to store resume information.

Most of the Javascript code is used on Vue. And Vue built the project.

Springboot is used as a Backend server application to receive POST requests. It also connects to a MySQL server so I can collect data. This part belongs to extra credit.

Shell scripting is used to on-click update Github pages.

## Some details about code by grading rubric
Nothing to say about Design/Layout/Text. They are just visual things.

For navigation. I believe my menu bar is clean and clear to use. [Menubar](https://github.com/w233w/cs601-term-project/blob/master/src/components/Menubar.vue) will also highlight the current router to let you know where you are (by setting 'a.router-link-exact-active')

For images. both images have alter, width, and height. The image in the [gallary](https://github.com/w233w/cs601-term-project/blob/master/src/components/ImageGallary.vue) has borders as halos. There is no large image file so no thumbnail is needed.

For mechanics, everything working fine on chrome, firefox, and edge.

For HTML, CSS, Javascript, Vue, and DOM. Nothing special here. I used a lot of different HTML tags, different CSS selectors, and Custom VUE components by accessing DOM.

Validation is applied on the [form](https://github.com/w233w/cs601-term-project/blob/master/src/components/Myform.vue), only people who follow the rule can submit the form. However, my website can't run with Javascript disabled since the whole project is built by Vue.

Extra credit: I deploy the database and back-end application on Microsoft Azure. For more detail, please check the back-end git repo, you can find the link above.

# Deprecated version
> Personal archive purpose, don't grade it. It is not a part of the term project.

https://github.com/w233w/MET-CS601-Term-Project