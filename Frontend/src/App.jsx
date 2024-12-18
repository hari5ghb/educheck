import Home from "./components/Body";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from "./Layouts/RootLayout";
import LoginLayout from "./Layouts/LoginLayout";
import InstructorLayout from "./Layouts/InstructorLayout";
import AdminLayout from "./Layouts/AdminLayout";
import AdminHome from "./components/AdminHome";
import DisplayInstructors from "./components/ShowInstructor";
import BigCalendarWithTimings from "./components/Calendar";
import AddStudent from "./components/AddStudents";
import AddInstructor from "./components/AddInstructor";
import StudentList from "./components/ShowStudent";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/instructordash" element={<InstructorLayout />} />
        <Route path="/admindash" element={<AdminLayout />}> 
          <Route index element={<AdminHome />} />
          <Route path="addstudents" element={<AddStudent />} />
          <Route path="students" element={<StudentList />}/>
          <Route path="instructor" element={<DisplayInstructors />} />
          <Route path="addinstructor" element={<AddInstructor />} />
          <Route path="classes" element={<BigCalendarWithTimings />} />
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;