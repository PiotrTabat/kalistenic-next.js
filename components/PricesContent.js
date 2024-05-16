import React from 'react';
import styled from 'styled-components';

const PricesSection = styled.section`
  background: var(--deep-blue);
  padding: 2rem;
  color: var(--text-light);
`;

const PriceTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  color: var(--text-light);
`;

const TableHeader = styled.th`
  background: var(--electric-orange);
  padding: 1rem;
  text-align: left;
  font-size: 1.25rem;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: var(--dark-blue);
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid var(--electric-blue);
  text-align: left;
`;

const PricesContent = () => {
    return (
        <PricesSection>
            <h2>Cennik Usług</h2>
            <PriceTable>
                <thead>
                <tr>
                    <TableHeader>Usługa</TableHeader>
                    <TableHeader>Cena</TableHeader>
                </tr>
                </thead>
                <tbody>
                <TableRow>
                    <TableCell>Indywidualny trening EMS</TableCell>
                    <TableCell>100 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Trening personalny</TableCell>
                    <TableCell>120 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Masaże</TableCell>
                    <TableCell>80 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Dodatkowe treningi z dojazdem</TableCell>
                    <TableCell>150 PLN</TableCell>
                </TableRow>
                </tbody>
            </PriceTable>
        </PricesSection>
    );
};

export default PricesContent;
