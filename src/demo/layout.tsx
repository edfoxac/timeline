import cls from 'classnames';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

const items = [
  { path: '/', label: 'Horizontal' },
  { path: '/vertical-basic', label: 'Vertical Basic' },
  {
    path: '/vertical-basic-nested',
    label: 'Vertical Basic Nested',
    hoverClass: 'hover:bg-blue-600',
  },
  { path: '/vertical-world-history', label: 'Vertical World History' },
  { path: '/vertical-alternating-mixed', label: 'Vertical Alternating Mixed' },
  {
    path: '/vertical-alternating-nested',
    label: 'Vertical Alternating Nested',
  },
  { path: '/vertical-alternating', label: 'Vertical Alternating' },
  { path: '/horizontal', label: 'Horizontal' },
  { path: '/horizontal-all', label: 'Horizontal All' },
  { path: '/horizontal-initial-select', label: 'Horizontal Initial Select' },
  { path: '/vertical-custom', label: 'Vertical Custom' },
  { path: '/vertical-custom-icon', label: 'Vertical Custom Icon' },
  { path: '/dynamic-load', label: 'Dynamic Load' },
  {
    path: '/timeline-without-cards',
    label: 'Timeline Without Cards (Vertical)',
  },
  {
    path: '/timeline-without-cards-horizontal',
    label: 'Timeline Without Cards (Horizontal)',
  },
];

const Layout = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={cls('text-3xl font-bold')}>
          Edgar Bonfim Júnior TIME LINE 2024
        </h2>
      <div className={styles.container}>
          <Outlet />
      </div>
    </div>
  );
};

export { Layout };
