import Sidebar from "../components/Sidebar";

function MainPage() {
  return (
    <main className="w-full flex min-h-screen">
      <section className="min-h-full">
        <Sidebar />
      </section>
      <section></section>
    </main>
  );
}

export default MainPage;
