import { DecimalPipe, Time } from "@angular/common";

export interface IProduct {
  id: string,
  createDate: any,
  isDelete ?: boolean,
  isActive ?: boolean,
  productName: string,
  count: number,
  price: number,
  firstDescription: string,
  secondDescription?: string,
  thirdDescription?: string,
  userId?: string,
  title: string,
  groupId: string,
  subGroup?: string,
  productImage?: any,
}
