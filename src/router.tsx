import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './layouts/app-layout/layout';
import { IndexPage } from './pages/Index';
import { TestPage } from './pages/TestPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<IndexPage />} />

          <Route path="objects">
            <Route index element={<TestPage r="objects" />} />
            <Route path="create" element={<TestPage r="objects/create" />} />
            <Route path="my" element={<TestPage r="objects/my" />} />
            <Route path="new" element={<TestPage r="objects/new" />} />
            <Route
              path="exclusive"
              element={<TestPage r="objects/exclusive" />}
            />
            <Route
              path="favorites"
              element={<TestPage r="objects/favorites" />}
            />
            <Route
              path="api-errors"
              element={<TestPage r="objects/api-errors" />}
            />
            <Route
              path="all-agencies"
              element={<TestPage r="objects/all-agencies" />}
            />

            <Route
              path=":objectId"
              element={<TestPage r="objects/:objectId" />}
            />
            <Route
              path=":objectId/edit"
              element={<TestPage r="objects/:objectId/edit" />}
            />
            <Route
              path=":objectId/bids"
              element={<TestPage r="objects/:objectId/bids" />}
            />
          </Route>

          <Route path="moderation" element={<TestPage r="moderation" />} />

          <Route path="parser" element={<TestPage r="parser" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
