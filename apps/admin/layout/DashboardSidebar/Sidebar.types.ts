import React from 'react';

export type TSubmenuItem = {
  name: string;
  route: string;
};

export type TNavItem = {
  name: string;
  route?: string;
  icon: React.ReactNode;
  submenu?: TSubmenuItem[];
};
