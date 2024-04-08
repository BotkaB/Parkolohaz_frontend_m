import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuthContext from "../contexts/AuthContext";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav";
const LayoutAdmin = () => {
  const { logout } = useAuthContext();
  return (
    <>
      <main>
        <Header
          bal={"admin/profil"}
          balOldali={"Profilom"}
          jobb={""}
          jobbOldali={"Kijelentkezés"}
          jobbIkon={"bi bi-box-arrow-left"}
          balIkon={"bi bi-person-lines-fill"}
          jobbEsemeny={logout}
        />
        <AdminNav />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
export default LayoutAdmin;
