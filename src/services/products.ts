import {v4 as uuidv4} from 'uuid';

class PorductsService {
  getAll(){
    const products = this._getFromFakeProductsRepository();

    return {responseId:uuidv4(), products};
  }

  _getFromFakeProductsRepository() {

    return[{
        id:1,
        name:'products-1',
        price:25.5
    },
    {
        id:2,
        name:'products-2',
        price:12.5
    },
    {
        id:3,
        name:'products-3',
        price:30
    },

]
  }

}

export default new PorductsService();