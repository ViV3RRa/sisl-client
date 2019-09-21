import React, { FC, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableColumn from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { DashboardBoxRow } from './dashboardboxrow/DashboardBoxRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
//import { ResourceFinder } from '../resourcefinder/ResourceFinder';
import { SislIcon } from '../icons/sislIcon/SislIcon';
import { useStyles } from './DashboardBox.style';
import Typography from '@material-ui/core/Typography';
import { AccountValue } from '../customtypes';

interface DashboardBoxProps {
  title: string;
  description: string;
  items: AccountValue[];
  showEditButton: boolean;
  fetching: boolean;
  resources: any[];
  resourceFinderItems: any;
  fetchResources: () => any;
}

export const DashboardBox: FC<DashboardBoxProps> = (
  props: DashboardBoxProps
) => {
  const styles = useStyles();

  const [isResourceFinderOpen, setResourceFinderOpen] = useState<boolean>(
    false
  );

  const showResourceFinder = () => {
    props.fetchResources();
    setResourceFinderOpen(true);
  };
  let button;
  if (props.showEditButton && !props.fetching) {
    button = (
      <TableColumn align="right">
        <IconButton aria-label="Rediger" onClick={showResourceFinder}>
          <SislIcon muiIcon={EditIcon} />
        </IconButton>
      </TableColumn>
    );
  }

  let title = (
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableColumn>
            <Typography
              component="h2"
              variant="h6"
              color="secondary"
              gutterBottom
            >
              {props.title}
            </Typography>
          </TableColumn>
          {button}
        </TableRow>
      </TableBody>
    </Table>
  );

  let table;
  if (props.fetching) {
    table = (
      <div>
        {title}
        <CircularProgress />
      </div>
    );
  } else {
    table = (
      <div>
        {title}
        <Table size="small">
          <TableBody>
            {props.items.map((value: AccountValue, i: number) => {
              return <DashboardBoxRow accountValue={value} key={i} />;
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className={styles.root}>{table}</div>
    </React.Fragment>
  );
};
