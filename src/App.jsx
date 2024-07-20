import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx'
import JobsPage from './pages/JobsPage.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/jobsPage' element={<JobsPage />} />
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
