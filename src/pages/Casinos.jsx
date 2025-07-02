import { Link } from "react-router-dom";

function Casinos() {
  return (
    <div className="p-6 text-white space-y-4">
      <h2 className="text-3xl font-bold mb-4">Featured Casinos</h2>
      <ul className="space-y-2">
        <li><Link to="/casinos/casino1" className="text-yellow-400 hover:underline">Lucky Ace Casino</Link></li>
        <li><Link to="/casinos/casino2" className="text-yellow-400 hover:underline">Spin Royale</Link></li>
        <li><Link to="/casinos/casino3" className="text-yellow-400 hover:underline">Jackpot Jungle</Link></li>
        <li><Link to="/casinos/casino4" className="text-yellow-400 hover:underline">Tyche's Fortune</Link></li>
      </ul>
    </div>
  );
}

export default Casinos;