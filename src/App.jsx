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
import addAction  from './actions/addAction.js';
import {action as deleteAction} from './actions/deleteAction.js'
import Edit from './pages/Edit.jsx';
import {action as editAction} from './actions/editAction.js'
import AdminPage from './pages/AdminPage.jsx';
import Calender from './pages/Calender.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/admin/:jobId' element={<JobPage />} loader={JobPageLoader} errorElement={<NotFound />} />

      <Route path='/eventsPage' element={<JobsPage />} />
      <Route path='/eventsPage/:jobId' element={<JobPage />} loader={JobPageLoader} errorElement={<NotFound />}/>
      <Route path='/eventsPage/:jobId/edit' element={<Edit />} loader={JobPageLoader} errorElement={<NotFound />} action={editAction}/>
      <Route path='/eventsPage/:jobId/delete' action={deleteAction}  errorElement={<NotFound />}/>
      <Route path='/addjob' element={<AddJob />} action={addAction} />
      <Route path='/Calender' element={<Calender />}  />

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
