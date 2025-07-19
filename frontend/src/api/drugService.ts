import { get } from './networking';

export interface Drug {
  id: number;
  code: string;
  genericName: string;
  brandName: string;
  company: string;
  launchDate: string;
}

export const fetchDrugs = async (company?: string, page = 1, limit = 10) => {
    const params: any = { page, limit };
    if (company) params.company = company;
    return get<{ data: Drug[]; total: number; page: number; limit: number }>('/drugs', params);
  };

export const fetchCompanies = async (): Promise<string[]> => {
  return get<string[]>('/companies');
};
