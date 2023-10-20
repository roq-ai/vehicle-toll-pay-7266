import { JourneyInterface } from 'interfaces/journey';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  license_plate: string;
  make?: string;
  model?: string;
  color?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  journey?: JourneyInterface[];
  user?: UserInterface;
  _count?: {
    journey?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  license_plate?: string;
  make?: string;
  model?: string;
  color?: string;
  user_id?: string;
}
