lets check this demo: http://vuebase.rubens.ninja

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
  * Add https to server
  * Convert Breadcumbs to a component
  * Add NProgress component to requests
  * !Learn more about stores!
  * Learn how to create routes inside components

Any help or pull request is welcome!

:airplane: 
