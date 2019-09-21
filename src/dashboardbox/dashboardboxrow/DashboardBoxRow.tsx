import React, { FC } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { SislIcon } from '../../icons/sislIcon/SislIcon';
import { AccountValue } from '../../customtypes';

interface DashboardBoxRowProps {
  accountValue: AccountValue;
}

export const DashboardBoxRow: FC<DashboardBoxRowProps> = (
  props: DashboardBoxRowProps
) => {
  let actions: any;
  if (false) {
    actions = (
      <TableCell align="right">
        <IconButton aria-label="Rediger">
          <SislIcon muiIcon={EditIcon} />
        </IconButton>
      </TableCell>
    );
  } else if (false) {
    actions = (
      <TableCell align="right">
        <IconButton aria-label="Slet">
          <SislIcon muiIcon={DeleteIcon} />
        </IconButton>
      </TableCell>
    );
  } else {
    actions = <TableCell align="right"></TableCell>;
  }

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{props.accountValue.accountValue}</TableCell>
        {actions}
      </TableRow>
    </React.Fragment>
  );
};
