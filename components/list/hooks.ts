'use client';
import { ListItem } from '@/types';
import { ListSectionProps } from './index';
import React from 'react';

export const ListContext = React.createContext<ListSectionProps<any> | null>(null);
export const useListContext = <T>() => {
  const context = React.useContext(ListContext);
  if (!context) {
    throw new Error('useListContext must be used within a ListSection');
  }
  return context as ListSectionProps<T>;
};

export const ListItemContext = React.createContext<ListItem<any> | null>(null);
export const useListItemContext = <T>() => {
  const context = React.useContext(ListItemContext);
  if (!context) {
    throw new Error('useListItemContext must be used within a ListItem');
  }
  return context as ListItem<T>;
};
