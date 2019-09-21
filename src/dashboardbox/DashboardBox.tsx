import React, { FC, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableColumn from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { DashboardBoxRow } from './dashboardboxrow/DashboardBoxRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SislIcon } from '../icons/sislIcon/SislIcon';
import { useStyles } from './DashboardBox.style';
import Typography from '@material-ui/core/Typography';
import { AccountValue } from '../customtypes';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, FlexibleWidthXYPlot} from 'react-vis';
import { background } from '@storybook/theming';

interface DashboardBoxProps {
  title: string;
  description: string;
  items: AccountValue[];
  showEditButton: boolean;
  fetching: boolean;
  resources: any[];
  resourceFinderItems: any;
  crosshairValues: any[];
  fetchResources: () => any;
}

export const DashboardBox: FC<DashboardBoxProps> = (
  props: DashboardBoxProps
) => {
  const [crosshairValue, setCrosshairValue] = useState();
  const [crosshairTime, setCrosshairTime] = useState();
  const styles = useStyles();

  const [isResourceFinderOpen, setResourceFinderOpen] = useState<boolean>(
    false
  );

  var values: any = [];

  const dataArr = props.items.map((data)=> {
    return {x: data.time , 
    y: (data.accountValue/100)}
  });

  const getDateString = (timestamp: number) => {
    const date = new Date(timestamp*1); //
    const timeStr = (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    return timeStr;
  };

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
          <TableColumn 
            style={{
              width: 200,
              textAlign:"right",
              margin:0,
              padding:0
            }}>
            <Typography
              component="h5"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {(crosshairTime !== undefined ? crosshairTime : '') + ': '}
            </Typography>
          </TableColumn>
          <TableColumn 
            style={{
              width: 200,
              textAlign:"left"
            }}>
            <Typography
              component="h5"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {(crosshairValue !== undefined ? (crosshairValue + ' €') : '')}
            </Typography>
          </TableColumn>
          {button}
        </TableRow>
      </TableBody>
    </Table>
  );

  let content;
  if (props.fetching) {
    content = (
      <div
        style={{
          textAlign:"left"
        }}>
        {title}
        <CircularProgress />
      </div>
    );
  } else {
    content = (
      <div
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent:'center'
        }}>
        {title}
        {props.items.length > 0 && (
          <FlexibleWidthXYPlot
          margin={{left:70, right:70}}
          yDomain={[dataArr[0].y-20, dataArr[dataArr.length-1].y+20]}
          height={500}>
            <VerticalGridLines />
            <HorizontalGridLines style={{stroke: '#f5f5f5', strokeWidth: 1}} />
            <XAxis tickTotal={5} tickFormat={v => `${getDateString(v)}`} />
            <YAxis title={"Platform value in " + ('eur' === props.items[0].currency ? '€' : 'dkk')} />
            <LineSeries 
              onNearestX={(value, {index}) => {
                setCrosshairTime(getDateString(dataArr[index].x))
                setCrosshairValue(dataArr[index].y)
              }}
              data={dataArr}
              style={{fill: 'none', stroke: '#4169e1', strokeWidth: 2}}
            />
          </FlexibleWidthXYPlot>
        )}
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className={styles.root}>{content}</div>
    </React.Fragment>
  );
};
