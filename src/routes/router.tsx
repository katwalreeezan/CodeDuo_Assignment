import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "../layouts/Header";
const SpellList = lazy(() => import("../features/SpellList/SpellLists"));
const IndividualSpell = lazy(
  () => import("../features/SpellList/IndividualSpell")
);
const PageNotFound = lazy(() => import("../components/PageNotFound"));

const Loader = () => {
  return <div>Loading</div>;
};
const AppRoute = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/spell" />} />
          <Route path="/spell" element={<SpellList />} />
          <Route path="/spell/:name" element={<IndividualSpell />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoute;
