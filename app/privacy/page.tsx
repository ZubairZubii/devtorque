import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you submit our contact form, we collect your name, email address, company name (optional), and message. We may also collect standard server logs including IP addresses and browser information for security purposes.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information solely to respond to your enquiry, send relevant communications about our services, and improve our website. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
  },
  {
    title: "3. Email Communications",
    body: "By submitting our contact form, you consent to receiving email responses from DevTorque. You may unsubscribe from any non-transactional emails at any time by replying with 'Unsubscribe' or clicking the unsubscribe link.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Your data is stored securely using industry-standard encryption. We use Namecheap Private Email (mail.privateemail.com) for contact form submissions. We retain contact data for up to 24 months or until you request deletion.",
  },
  {
    title: "5. Cookies & Analytics",
    body: "Our website uses Vercel Analytics, which is anonymised and does not track personally identifiable information. No advertising cookies are used. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, email support@devtorque.co with the subject line 'Data Request'.",
  },
  {
    title: "7. Terms of Service",
    body: "By engaging DevTorque for services, you agree that all project work is subject to a separate written service agreement. DevTorque retains the right to display completed work in our portfolio unless explicitly agreed otherwise in writing.",
  },
  {
    title: "8. Limitation of Liability",
    body: "DevTorque provides services on an 'as-is' basis. While we strive for excellence in every project, we are not liable for indirect, incidental, or consequential damages beyond the scope agreed in the written project contract.",
  },
  {
    title: "9. Contact",
    body: "For any privacy or legal enquiries, contact us at support@devtorque.co or use the contact form on our website. We aim to respond within 2 business days.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(0,50,140,0.10),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-3xl relative">
        <Link href="/" className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 text-sm mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="mb-10">
          <span className="inline-block text-[#4d9fff] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border border-[#4d9fff]/20 bg-[#4d9fff]/6">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy & Terms</h1>
          <p className="text-white/35 text-sm">Last updated: May 2026 · DevTorque · devtorque.co</p>
        </div>

        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(13,18,40,0.7) 0%, rgba(7,9,26,0.8) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h2 className="text-sm font-bold text-white mb-2.5">{s.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl text-center" style={{ border: "1px solid rgba(77,159,255,0.15)", background: "rgba(77,159,255,0.04)" }}>
          <p className="text-white/45 text-sm">
            Questions? Email{" "}
            <a href="mailto:support@devtorque.co" className="text-[#4d9fff] hover:text-[#38bdf8] transition-colors">
              support@devtorque.co
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
