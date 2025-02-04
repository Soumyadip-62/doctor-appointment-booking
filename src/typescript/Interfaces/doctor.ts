export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    clinic_address: string;
    experience: number;
    appointment_fees: number;
    contact: string;
    image?: string | null;
  }