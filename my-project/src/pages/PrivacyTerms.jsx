export default function PrivacyTerms() {
    return (
      <div className="pt-20 bg-slate-50 min-h-screen">
  
        {/* ================= HEADER ================= */}
  
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Privacy Policy & Terms
            </h1>
            <p className="text-white/90">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>
  
        {/* ================= CONTENT ================= */}
  
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 space-y-12 text-slate-700 leading-relaxed">
  
            {/* Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Privacy Policy
              </h2>
  
              <p className="mb-4">
                We value your privacy. When you enroll or contact us,
                we may collect your name, phone number, and related details
                to provide program information and support.
              </p>
  
              <p className="mb-4">
                Your information will never be sold or shared with third parties.
                It is only used for communication regarding the
                Interview Mastery Program.
              </p>
  
              <p>
                If you have any concerns regarding your data,
                you may contact us at: <strong>8888704897</strong>
              </p>
            </div>
  
            {/* Terms & Conditions */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Terms & Conditions
              </h2>
  
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  The Interview Mastery Program is designed for skill improvement.
                  Results may vary depending on individual effort.
                </li>
                <li>
                  Mock interviews are simulations and do not guarantee job placement.
                </li>
                <li>
                  Fees once paid are non-refundable unless stated otherwise.
                </li>
                <li>
                  Program structure may be updated to improve quality.
                </li>
                <li>
                  By enrolling, you agree to participate respectfully
                  and follow program guidelines.
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Contact Information
              </h2>
  
              <p>
                For any questions regarding this Privacy Policy or Terms,
                please contact us at:
              </p>
  
              <p className="mt-2 font-semibold text-indigo-600">
                📞 8888704897
              </p>
            </div>
  
          </div>
        </section>
  
      </div>
    );
  }
  