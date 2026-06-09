import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { CommonTableWrapper } from './Table.styles';

export type TableColumn = {
  label: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
};

interface ICommonTableProps {
  columns: TableColumn[];
  children: React.ReactNode;
}

const CommonTable: React.FC<ICommonTableProps> = ({ columns, children }) => {
  return (
    <CommonTableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index} width={col.width} align={col.align || 'left'}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </CommonTableWrapper>
  );
};

export default CommonTable;
