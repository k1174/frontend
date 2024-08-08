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
import addAction from './actions/addAction.js';
import { action as deleteAction } from './actions/deleteAction.js'
import Edit from './pages/Edit.jsx';
import { action as editAction } from './actions/editAction.js'
import AdminPage from './pages/AdminPage.jsx';
import Calender from './pages/Calender.jsx';
import AdminJobPage from './pages/AdminJobPage.jsx';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';
import Profile from './pages/auth/Profile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';
import DownloadEmailsButton from './components/Email.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />

      <Route
        path='/admin'
        element={
          <ProtectedRoute requireAdmin>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route path='/admin/:jobId'

        element={
          <ProtectedRoute requireAdmin>
            <AdminJobPage />
          </ProtectedRoute>
        }

        loader={JobPageLoader} errorElement={<NotFound />} />

      <Route path='/eventsPage' element={<JobsPage />} />
      <Route path='/eventsPage/:jobId' element={<JobPage />} loader={JobPageLoader} errorElement={<NotFound />} />
      <Route path='/eventsPage/:jobId/edit' element={<Edit />} loader={JobPageLoader} errorElement={<NotFound />} action={editAction} />
      <Route path='/eventsPage/:jobId/delete' action={deleteAction} errorElement={<NotFound />} />
      <Route path='/addjob' element={<AddJob />} action={addAction} />
      <Route path='/Calender' element={<Calender />} />
      <Route path='/download' element={<DownloadEmailsButton />} />

      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);


function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
