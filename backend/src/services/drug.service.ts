import MySQLDatabase from '../db/mysql.connection';
import { Drug } from '../models/drug.model';
import { RowDataPacket } from 'mysql2';

class DrugService {
  private db = MySQLDatabase.getInstance();

  public async getPaginatedDrugs(company?: string, offset = 0, limit = 10): Promise<[Drug[], number]> {
    let baseQuery = 'SELECT * FROM drugs';
    let countQuery = 'SELECT COUNT(*) as total FROM drugs';
    const params: any[] = [];
  
    if (company) {
      baseQuery += ' WHERE company = ?';
      countQuery += ' WHERE company = ?';
      params.push(company);
    }
  
    baseQuery += ' ORDER BY launchDate DESC LIMIT ? OFFSET ?';
    const paginatedParams = [...params, limit, offset];
  
    const [drugRows] = await this.db.query(baseQuery, paginatedParams);
    const [countRows] = await this.db.query(countQuery, params);
  
    const drugs = drugRows as Drug[];
    const total = (countRows as any[])[0]?.total || 0;
  
    return [drugs, total];
  }
  

  public async getAllCompanies(): Promise<string[]> {
    const [rows] = await this.db.query<(RowDataPacket & { company: string })[]>(
      'SELECT DISTINCT company FROM drugs ORDER BY company ASC'
    );
    return rows.map(row => row.company);
  }
}

export default new DrugService();
