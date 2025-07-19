import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Paper,
  } from '@mui/material';
  
  interface Props {
    companies: string[];
    selectedCompany: string;
    onChange: (value: string) => void;
  }
  
  export default function CompanyFilter({
    companies,
    selectedCompany,
    onChange,
  }: Props) {
    return (
      <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Filter by Company</InputLabel>
          <Select
            value={selectedCompany}
            label="Filter by Company"
            onChange={(e) => onChange(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {companies.map((company) => (
              <MenuItem key={company} value={company}>
                {company}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    );
  }
  