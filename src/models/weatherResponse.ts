export interface Current {
  last_updated_epoch?: number;
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: Condition;
  cloud: number;
}

export interface Condition {
  text: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id?: string;
  localtime_epoch?: number;
  localtime?: string;
}