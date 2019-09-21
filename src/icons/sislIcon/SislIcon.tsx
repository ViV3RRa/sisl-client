import React, { FC, ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { theme } from '../../theme';

interface SislIconProps {
  muiIcon: ComponentType<SvgIconProps>;
  color?: string;
}

export const SislIcon: FC<SislIconProps> = (props: SislIconProps) => {
  const styles = {
    color: props.color ? props.color : theme.palette.warmGrey.main
  };
  const Icon: ComponentType<SvgIconProps> = props.muiIcon;
  return <Icon style={styles} />;
};
