import { useEffect, useState } from 'react';
import { Drug, fetchDrugs, fetchCompanies } from '../api/drugService';
import DrugTable from '../components/DrugTable';
import CompanyFilter from '../components/CompanyFilter';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  TablePagination,
} from '@mui/material';

export default function DrugDashboard() {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, []);

  useEffect(() => {
    fetchDrugs(selectedCompany, page, rowsPerPage).then((res) => {
      setDrugs(res.data);
      setTotal(res.total);
    });
  }, [selectedCompany, page, rowsPerPage]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Drug Database
      </Typography>

      <Box sx={{ mb: 3 }}>
        <CompanyFilter
          companies={companies}
          selectedCompany={selectedCompany}
          onChange={setSelectedCompany}
        />
      </Box>

      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <DrugTable drugs={drugs} />
        <Divider />
        <Box display="flex" justifyContent="flex-end" px={2} py={1}>
          <TablePagination
            component="div"
            count={total}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Box>
      </Paper>
    </Container>
  );
}
