import { VehicleInterface } from 'interfaces/vehicle';
import { TollBoothInterface } from 'interfaces/toll-booth';
import { PaymentInterface } from 'interfaces/payment';
import { GetQueryInterface } from 'interfaces';

export interface JourneyInterface {
  id?: string;
  start_time?: any;
  end_time?: any;
  vehicle_id: string;
  toll_booth_id: string;
  payment_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  toll_booth?: TollBoothInterface;
  payment?: PaymentInterface;
  _count?: {};
}

export interface JourneyGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  toll_booth_id?: string;
  payment_id?: string;
}
