import { TollBoothInterface } from 'interfaces/toll-booth';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperatorInterface {
  id?: string;
  description?: string;
  operational_hours?: string;
  location?: string;
  status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  toll_booth?: TollBoothInterface[];
  user?: UserInterface;
  _count?: {
    toll_booth?: number;
  };
}

export interface OperatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  operational_hours?: string;
  location?: string;
  status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
