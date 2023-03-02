import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import logoImg from "../../../assets/logo.svg";

function MainPage() {
  return (
    <main className="w-full    flex min-h-screen">
      <section className="min-h-full">
        <Sidebar />
      </section>
      <section className="bg-gray-900 flex flex-col gap-10 p-8 w-full">
        <div>
          <img src={logoImg} className="w-[200px]" />
        </div>
        <Outlet />
      </section>
    </main>
  );
}

export default MainPage;
