export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-gray-800 p-8 rounded-lg shadow-lg text-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <p className="text-sm text-gray-300 text-center">
          Interested in partnership opportunities, affiliate promotions, or have a question?
          Reach out below and I'll be in touch.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="mt-1 w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me how I can help..."
              className="mt-1 w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition shadow-sm"
          >
            Send Message
          </button>
        </form>

        <div className="text-xs text-center text-gray-500">
          or reach out directly at <a href="mailto:jorge@houseoftyche.com" className="text-yellow-400 underline">jorge@houseoftyche.com</a>
        </div>
      </div>
    </div>
  );
}