export interface Reservation {
  id: number; 
  status: string;
  start_time: string;
  Trottinette?: number;  
  trottinette?: number;  
  client: number;
  end_time?: string;
  total_cost: number;
  trottinette_details?: { model: string; QR_code: string; };
  client_details?: { nom: string; prenom: string; id:number };
}