import { JourneyInterface } from 'interfaces/journey';
import { UserInterface } from 'interfaces/user';
import { TollBoothInterface } from 'interfaces/toll-booth';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  payment_date?: any;
  payment_method?: string;
  user_id: string;
  toll_booth_id: string;
  created_at?: any;
  updated_at?: any;
  journey?: JourneyInterface[];
  user?: UserInterface;
  toll_booth?: TollBoothInterface;
  _count?: {
    journey?: number;
  };
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  user_id?: string;
  toll_booth_id?: string;
}
