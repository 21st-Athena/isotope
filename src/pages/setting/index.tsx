import Header from "@/components/header";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
    <div className="w-full">
      <Header headers={[{ href: "", name: "Settings" }]} />
      <section className="w-full p-8"></section>
    </div></Layout>
  );
};

export default Home;
