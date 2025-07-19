import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from '@mui/material';
  import { Drug } from '../api/drugService';
  import { format } from 'date-fns';
  
  interface Props {
    drugs: Drug[];
  }
  
  export default function DrugTable({ drugs }: Props) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><strong>Id</strong></TableCell>
              <TableCell><strong>Code</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Launch Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drugs.map((drug, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{drug.code}</TableCell>
                <TableCell>
                  {drug.genericName} ({drug.brandName})
                </TableCell>
                <TableCell>{drug.company}</TableCell>
                <TableCell>
                  {format(new Date(drug.launchDate), 'dd/MM/yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  