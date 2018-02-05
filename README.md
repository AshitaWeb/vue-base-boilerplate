VueBase is a Boilerplate for vuejs, a quick way to create administrative systems with login and password already built with jwt

# Technologies
* Backend in nodejs
* Frontend in javascript (Vuejs template webpack)

# Support

* Uploads with authenticated routes
* Https

lets check this demo: https://vuebase.rubens.ninja

login: *admin*, password: *admin*

# SETUP
```
sudo npm install -g pm2
```
```
cd backend
cp config.js.dist config.js
npm install
pm2 start index.js --name="vuebase" --watch

cd ..
cd frontend
npm install
npm run dev

```

## Go to:

  http://localhost:9090/api/fixture/usuario/1

### this is just to create admin user, login: admin, pass: admin

## Access
  http://localhost:8080

## TODO
  * !Learn more about stores!
  * Add https to server [DONE]
  * Convert Breadcumbs to a component [DONE]
  * Learn how to create routes inside components [NEED HELP]
  * ACL to control what users can do. @thiagohagy

Any help or pull request is welcome!

:airplane:
