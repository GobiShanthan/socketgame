

import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";


export default function Root() {



  return (
    <>
      <>
        <Menu />
      </>
      <main>
        <Outlet />
      </main>
    </>
  );
}
