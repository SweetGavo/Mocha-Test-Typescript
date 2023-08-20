import ProductsService from '../../src/services/products';
import {expect} from 'chai';
import 'mocha';


describe('ProductsService',()=>{

    it('should return all products successfully', () =>{
        const expectedResultLength = 3;

        const result = ProductsService.getAll();

        expect(result.products.length).to.be.equal(expectedResultLength)
    });
})