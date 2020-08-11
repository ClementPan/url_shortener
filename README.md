# URL SHORTENER
## A simple URL shortener created with express.js, bootstrap and MongoDB as the database.
## Exercise for combining simple UI with MongoDB and routes restfully established.

### Try it out here.
[Url Shortener](https://mysterious-harbor-25170.herokuapp.com/)

#### App images
![Index](/images/index.png)
![Successfully shortened](/images/success.png)

## Prerequisites
### 1. Node.js
#### Download Node.js:
[Node.js](https://github.com/coreybutler/nvm-windows/releases)
#### Chech if download is completed through terminal:
`nvm version`
## 
## Installation
### 1. Clone project through Terminal： 
`git clone https://github.com/ClementPan/url_shortener.git`
### 2. get into project directory through Terminal:
`cd url_shortener`
### 3. Download and install npm packages through Terminal:
`npm i express express-handlbars method-override body-parser mongoose nodemon`
## 
## How to use
#### 1. go to chrome:
`http://localhost:3000/`

## PS.
### To create a ID for each user url input in order to create documents at MongoDb and to call it later, I wrote generateID.js
![generateID](/images/generateID.png)
## 

### To prevent creating duplicate ID, I wrote a function to use inside router
![idCheck](/images/idCheck.png)
## 

### To prevent 
#### 1. undefined user input,
#### 2. user keydown at output.hbs causing error,
### and to copy the shortened url to clipboard, I wrote functions inside public/javascripts/index.js,
![indexJS](/images/indexJS.png)

