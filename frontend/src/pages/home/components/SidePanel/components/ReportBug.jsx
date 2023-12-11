import React from 'react';
import NavLink from './components/NavLink';

const ReportBug = () => {
  return (
    <NavLink
      as="a"
      href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
      target="_blank"
    >
      Prijavi bag
    </NavLink>
  );
};

export default ReportBug;
