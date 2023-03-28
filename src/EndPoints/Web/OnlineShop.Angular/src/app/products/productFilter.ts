import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/Interfaces/IProduct';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: IProduct[], searchText: string): IProduct[] {
        if (!products) {
            return [];
        }
        if (!searchText) {
            return products;
        }
        searchText = searchText.toLowerCase();
        return products.filter(product => {
            return product.productName.toLowerCase().includes(searchText);
        });
    }
}