export default function Button({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition shadow"
    >
      {children}
    </a>
  );
}