import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "../layouts/Header";
import Loader from "../components/Loader";

const SpellList = lazy(() => import("../features/SpellList/SpellLists"));
const IndividualSpell = lazy(
  () => import("../features/SpellList/IndividualSpell")
);
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const FavoriteList = lazy(
  () => import("../features/FavoriteLists/FavoriteList")
);

const AppRoute = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/spell" />} />
          <Route path="/spell" element={<SpellList />} />
          <Route path="/spell/:name" element={<IndividualSpell />} />
          <Route path="/spell/favorite-list" element={<FavoriteList />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoute;
