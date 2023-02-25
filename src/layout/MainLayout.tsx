import React, { ReactNode } from "react";
import Nav from "common/Nav";
import Header from "components/Header";
interface Props {
  children: ReactNode;
}
const MainLayout = (props: Props) => {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl max-auto py-6 sm:py-6 lg-px-8">
            {props.children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
