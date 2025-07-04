import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center space-y-8 py-20">
        <h1 className="text-5xl font-bold text-yellow-400">Luck Meets Strategy</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore top-tier casino promotions curated for players with purpose.
          Join the House of Tyche and discover your next advantage.
        </p>
        <Button link="/casinos">Browse Casinos</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-yellow-400">Featured Promotions</h2>
          <p className="text-gray-300 text-sm">
            Claim up to $500 at Lucky Ace Casino and spin your way into fortune.
          </p>
          <Button link="/casinos/casino1">View Promo</Button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-yellow-400">Why House of Tyche?</h2>
          <p className="text-gray-300 text-sm">
            We blend luck with logic—handpicking offers that convert and reward.
          </p>
          <Button link="/about">Learn More</Button>
        </div>
      </section>
    </Layout>
  );
}