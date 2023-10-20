import { JourneyInterface } from 'interfaces/journey';
import { PaymentInterface } from 'interfaces/payment';
import { OperatorInterface } from 'interfaces/operator';
import { GetQueryInterface } from 'interfaces';

export interface TollBoothInterface {
  id?: string;
  location: string;
  operator_id: string;
  status?: string;
  toll_amount?: number;
  operational_hours?: string;
  created_at?: any;
  updated_at?: any;
  journey?: JourneyInterface[];
  payment?: PaymentInterface[];
  operator?: OperatorInterface;
  _count?: {
    journey?: number;
    payment?: number;
  };
}

export interface TollBoothGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  operator_id?: string;
  status?: string;
  operational_hours?: string;
}
