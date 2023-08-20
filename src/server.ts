import Koa from "koa"
import koaBody from "koa-body";
import ProductsContoller from "./controllers/products";



class Server {
    start(port:number){

  const app = new Koa();
  app.use(koaBody());
  app.use(ProductsContoller.routes());

  return app.listen(port,() => {console.log("Started server on port: "+port)});
   

   }
}


export default new Server();