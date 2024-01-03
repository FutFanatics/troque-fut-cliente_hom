export interface Produto {
  selectedId?:number | string;
  product_id?: number | string; 
  key?:string;
  name?: string;
  variant_value?: string;
  price?: number;
  img?: string;
  url?: string;
  quantity?: number;
  shipment_date?:string;
  selectedProduct?: {
    tipoReembolso?: string;
    motivoDevolucao?: string;
    quantidade?: number | "";
    subDevolucao?: string;
    obsDev?:string;
    key?:string;
  };
  BankRembolso?: {
    pixData: {
      tipoPix?:string,
      chavePix?: string,
    },
    bankData:{
      bank?:string;
      cpfcnpj?:string;
      agency?:string;
      accont?:string;
      
    }
  }
  orderId?: string;
  shipping?:string;
}


  export interface Devolution {
    id: string;
    created_at?: string;
    imgs?: React.ReactNode;
    url?: string;
    result?:string;
    }

    interface Product {
      quant: number;
      name:string;
      price: string;
      image:string;
      refundType: string;
      reasonSub: string;
      reasonMain: string;
      obs: string;
      variant: string;
    }
    
    interface HistoryItem {
      title: string;
      date: string;
      fileIcon: string;
      status: string;
    }
    
    interface Status {
      title: string;
      status: string;
      msg: string;
      color: string;
    }
    
    interface LDN {
      status: boolean;
      url: string;
    }
    
    export interface DataFollow {
      id: number;
      order_id: number;
      method_shipment: string | null;
      dateCreatedReturn: string;
      customer: {
        fullname: string;
        fone: string;
        cellphone: string;
        cep: string;
        state: string;
        city: string;
        neigh_borhood: string;
        street: string;
        number: string;
        complement?: string;
      };
      products: Product[];
      history: HistoryItem[];
      status: Status;
      coupon: string;
      ldn: LDN;
    }
    
    