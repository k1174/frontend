import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobPage from './pages/JobPage.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound.jsx';
import { loader as JobPageLoader } from './loader.js';
import AddJob from './pages/AddJob.jsx';
import { action as editAction } from './pages/AddJob.jsx';
import {action as deleteAction} from './pages/delete.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/jobsPage' element={<JobsPage />} />
      <Route path='/jobsPage/:jobId' element={<JobPage />} loader={JobPageLoader} errorElement={<NotFound />}/>
      <Route path='/jobsPage/:jobId/delete' action={deleteAction}  errorElement={<NotFound />}/>
      <Route path='/addjob' element={<AddJob />} action={editAction} />
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
