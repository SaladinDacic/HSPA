import { IPropertyBase } from './IPropertyBase';

export class Property implements IPropertyBase{
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  BHK: number;
  FType: string;
  Price: number;
  BuiltArea: number;
  CarpetArea?: number;
  Address: string;
  Address2?: string;
  City: string;
  FloorNo?: string;
  TotalFloor: string;
  RTM: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: string;
  Gated?: string;
  Maintenance?: string;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: Number;
}
