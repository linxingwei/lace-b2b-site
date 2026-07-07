import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata = { title: "Premium Lace", description: "B2B Lace Supplier" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 w-full z-50 bg-white border-b h-16 flex items-center px-4 justify-between">
          <div className="font-bold">LACE PREMIER</div>
        </nav>
        {children}
        <WhatsAppButton phone="8613352991594" message="Hi, I'm interested in lace!" />
      </body>
    </html>
  );
}
