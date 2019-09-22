import React, { FC, useState, useEffect } from 'react';
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
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, FlexibleWidthXYPlot, Crosshair} from 'react-vis';
import { background } from '@storybook/theming';
import 'react-vis/dist/style.css'

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
  const [crosshair, setCrosshair] = useState();
  const styles = useStyles();

  const [isResourceFinderOpen, setResourceFinderOpen] = useState<boolean>(
    false
  );

  const dataArr = props.items.map((data)=> {
    return {x: data.time , 
    y: (data.accountValue/100),
    account: data.accountId,
    color: 'green'}
  });

  const getDateString = (timestamp: number) => {
    const date = new Date(timestamp*1); //
    const timeStr = (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    return timeStr;
  };

  useEffect(() => {
    if(dataArr !== undefined && dataArr[dataArr.length-1] !== undefined) {
      setCrosshair(dataArr[dataArr.length-1]);
    }
  }, [props.items]);

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
          onMouseLeave={(event) => {
            setCrosshair(dataArr[dataArr.length-1]);
          }}
          margin={{left:70, right:70}}
          yDomain={[dataArr[0].y-20, dataArr[dataArr.length-1].y+20]}
          height={500}>
            <HorizontalGridLines style={{stroke: '#f5f5f5', strokeWidth: 1}} />
            <XAxis tickTotal={5} tickFormat={v => `${getDateString(v)}`} />
            <YAxis hideLine={true} title={"Platform value in " + ('eur' === props.items[0].currency ? '€' : 'dkk')} />
            <LineSeries 
              onNearestX={(value, {index}) => {
                setCrosshair(dataArr[index]);
              }}
              data={dataArr}
              style={{fill: 'none', stroke: '#4169e1', strokeWidth: 2}}
            />
            <Crosshair 
              values={[crosshair]}
              titleFormat={(d: any[]) => ({title: 'Date', value: getDateString(d[0].x)})}
            itemsFormat={(d: any[]) => [{title: <span><div style={{width: 10, height: 10, background: d[0].color, display: 'inline-block', marginRight: 5}}/>{'Mintos'}</span>, value: <div style={{display: 'inline-block'}}>{d[0].y}</div>}]} />
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
