import Sidebar from "../components/Sidebar";

function MainPage() {
  return (
    <main className="w-full    flex min-h-screen">
      <section className="min-h-full">
        <Sidebar />
      </section>
      <div className="bg-gray-800 w-full">teste</div>
    </main>
  );
}

export default MainPage;
