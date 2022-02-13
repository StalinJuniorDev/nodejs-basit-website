const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = './public/'
  switch(req.url){
    case '/':
    path += 'index.html'
  }
 
  fs.readFile(path, (err,data)=>{
    if (err) {
       console.log(err);
       res.end()
    }else{
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, ()=>{
  console.log('Server açık la')
})