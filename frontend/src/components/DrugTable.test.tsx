import { render, screen } from '@testing-library/react';
import DrugTable from './DrugTable';

const mockDrugs = [
  {
    id: 1,
    code: '0001',
    genericName: 'Ibuprofen',
    brandName: 'Advil',
    company: 'Pfizer',
    launchDate: '2022-01-01T00:00:00Z'
  },
  {
    id: 2,
    code: '0002',
    genericName: 'Paracetamol',
    brandName: 'Crocin',
    company: 'Sun Pharma',
    launchDate: '2023-01-01T00:00:00Z'
  }
];

test('renders filtered drugs by company', () => {
  const filteredDrugs = mockDrugs.filter(drug => drug.company === 'Pfizer');
  render(<DrugTable drugs={filteredDrugs} />);

  expect(screen.getByText(/Pfizer/i)).toBeInTheDocument();

  expect(screen.queryByText(/Sun Pharma/i)).toBeNull();
});
