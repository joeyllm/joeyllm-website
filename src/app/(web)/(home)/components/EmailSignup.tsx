export interface EmailSignupProps {
  heading: string;
  placeholder?: string;
  buttonText?: string;
}

export default function EmailSignup({
  heading,
  placeholder = "Enter your email",
  buttonText = "Sign me up",
}: EmailSignupProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-lg max-w-2xl mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">{heading}</h2>

        <form className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            {buttonText} →
          </button>
        </form>
      </div>
    </section>
  );
}
