import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';

interface AssignmentAddProps {
  className: any;
}

export const AssignmentAdd: FC<AssignmentAddProps> = (
  props: AssignmentAddProps
) => {
  return (
    <React.Fragment>
      <SvgIcon className={props.className}>
        <path d="M 19 3 L 14.82 3 C 14.4 1.84 13.3 1 12 1 C 10.7 1 9.6 1.84 9.18 3 L 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 Z M 16.876 13.194 L 12.876 13.194 L 12.876 17.194 L 10.876 17.194 L 10.876 13.194 L 6.876 13.194 L 6.876 11.194 L 10.876 11.194 L 10.876 7.194 L 12.876 7.194 L 12.876 11.194 L 16.876 11.194  Z M 12 3 C 12.55 3 13 3.45 13 4 C 13 4.55 12.55 5 12 5 C 11.45 5 11 4.55 11 4 C 11 3.45 11.45 3 12 3 Z" />
      </SvgIcon>
    </React.Fragment>
  );
};
