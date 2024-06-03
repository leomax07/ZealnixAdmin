export interface InventoryStockType {
  id: string;
  name: string;
  drugId: string;
  batchId: string;
  branchId: string;
  email: string;
  phone: string;
  category: string;
  patientName: string;
  date: string;
  bookedVia: string;
  status: string;
  manufacturer: string;
  inStock: number;
  unitPrice: number;
  soldLast30Days: number;
  stock: number;
  totalAmount: number;
  quantity: number;
  sold: number;
  pincodes: string;
  noOfOrders: number;
  riderId: string;
  address: string;
}


export interface pharmacyStoreStateType {
  inventoryStockList: InventoryStockType[];
  loading: boolean;
  error: string;
}

export interface CreateDrugPayload {
  drugId: string;
  name: string;
  manufacturer: string;
  category: string;
  price: string;
}

export interface EditDrugPayload {
  id: string;
  drugId: string;
  name: string;
  manufacturer: string;
  category: string;
  price: string;
}
