import Link from "next/link";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

const CrossIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
  </svg>
);

export default function Home() {
  return (
    <div className="antialiased bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-gray-900">FrankSign</Link>
              <div className="hidden md:flex gap-6">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Priser</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">Kontakt</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://app.franksign.io" className="text-gray-700 hover:text-gray-900 font-medium">Log ind</Link>
              <Link href="https://app.franksign.io/register" className="inline-flex items-center px-5 py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-sm">
                Prøv gratis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-6">
                EU eIDAS kvalificeret
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Elektronisk signatur <span className="text-gray-900">lavet til Europa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Send dokumenter til underskrift på få sekunder. Sikker, juridisk bindende og GDPR-compliant.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border-2 border-green-200 rounded-lg mb-8">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <div className="text-2xl font-bold text-gray-900">e-signatur for en femmer</div>
                  <div className="text-sm text-gray-600">100% forbrugsafregning - Ingen binding - Intet abonnement</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.franksign.io/register" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
                  Kom i gang gratis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
                <Link href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-gray-900 hover:bg-gray-50 transition">
                  Se demo
                </Link>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span>Ingen kreditkort påkrævet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span>Fuld adgang i 14 dage</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Kontrakt.pdf</div>
                      <div className="text-sm text-gray-500">Klar til signering</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">Anders Jensen - Signeret</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-yellow-400"></div>
                      <span className="text-sm text-gray-700">Maria Nielsen - Afventer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">eIDAS Kvalificeret</h3>
              <p className="text-sm text-gray-500">EU-godkendt signatur</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-3">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">GDPR Compliant</h3>
              <p className="text-sm text-gray-500">Data hostet i EU</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Dansk Platform</h3>
              <p className="text-sm text-gray-500">Udviklet i Danmark</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Juridisk Bindende</h3>
              <p className="text-sm text-gray-500">Gyldig i hele EU</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Kundelogoer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Betroet af +100 danske virksomheder</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
            <div className="text-xl font-bold text-gray-400">Kunde 1</div>
            <div className="text-xl font-bold text-gray-400">Kunde 2</div>
            <div className="text-xl font-bold text-gray-400">Kunde 3</div>
            <div className="text-xl font-bold text-gray-400">Kunde 4</div>
            <div className="text-xl font-bold text-gray-400">Kunde 5</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alt du behøver for at signere elektronisk</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simpelt, sikkert og juridisk bindende.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lynhurtigt</h3>
              <p className="text-gray-600">Send dokumenter til underskrift på under 60 sekunder.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Sikkert</h3>
              <p className="text-gray-600">EU eIDAS kvalificeret. ISO 27001 certificeret. GDPR-compliant.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gennemsigtig Pris</h3>
              <p className="text-gray-600">Ingen skjulte gebyrer. Simpel per-dokument pris.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sådan virker det</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tre simple trin til en underskrevet kontrakt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload dokument</h3>
              <p className="text-gray-600">Upload dit PDF, Word eller andet dokument direkte fra din computer.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tilføj underskrivere</h3>
              <p className="text-gray-600">Indtast e-mail adresser på dem der skal underskrive dokumentet.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modtag signaturer</h3>
              <p className="text-gray-600">Underskriverne modtager et link og kan signere med ét klik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alt hvad du har brug for</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En komplet platform til digital signering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MitID Integration</h3>
              <p className="text-sm text-gray-600">Underskrivere kan validere deres identitet med MitID for ekstra sikkerhed.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">REST API</h3>
              <p className="text-sm text-gray-600">Integrer FrankSign direkte i dine systemer med vores dokumenterede API.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Whitelabel</h3>
              <p className="text-sm text-gray-600">Tilpas med dit eget logo og farver for en professionel oplevelse.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Underskriftsrækkefølge</h3>
              <p className="text-sm text-gray-600">Definer hvem der skal underskrive hvornår med sekventiel signering.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kontaktbog</h3>
              <p className="text-sm text-gray-600">Gem dine hyppige underskrivere og send dokumenter med ét klik.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Skabeloner</h3>
              <p className="text-sm text-gray-600">Opret skabeloner til dokumenter du sender ofte og spar tid.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tilpassede E-mails</h3>
              <p className="text-sm text-gray-600">Tilpas e-mail beskeder og påmindelser til dine underskrivere.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Påmindelser</h3>
              <p className="text-sm text-gray-600">Automatiske påmindelser til underskrivere der mangler at signere.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dokumentarkiv</h3>
              <p className="text-sm text-gray-600">Alle signerede dokumenter gemmes sikkert og kan tilgås når som helst.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Comparison */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hvorfor vælge FrankSign?</h2>
            <p className="text-xl text-gray-600">Den mest overkommelige e-signatur løsning</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900"></th>
                  <th className="text-center py-4 px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-bold">
                      FrankSign
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="font-bold text-gray-700 text-lg">Penneo</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="font-bold text-gray-700 text-lg">DocuSign</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="font-bold text-gray-700 text-lg">PandaDoc</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="font-bold text-gray-700 text-lg">Adobe Sign</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-white">
                  <td className="py-5 px-6 font-bold text-gray-900 text-lg">Pris pr. dokument</td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">5 kr</div>
                    <div className="text-sm text-gray-600">Ingen binding</div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-xl font-semibold text-gray-600 mb-1">Fra 20 kr</div>
                    <div className="text-sm text-gray-500">+ månedlig abonnement</div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-xl font-semibold text-gray-600 mb-1">Fra 25 kr</div>
                    <div className="text-sm text-gray-500">+ månedlig abonnement</div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-xl font-semibold text-gray-600 mb-1">Fra 30 kr</div>
                    <div className="text-sm text-gray-500">+ månedlig abonnement</div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-xl font-semibold text-gray-600 mb-1">Fra 35 kr</div>
                    <div className="text-sm text-gray-500">+ månedlig abonnement</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">EU eIDAS kvalificeret</td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-white">
                  <td className="py-4 px-6 text-gray-700">Ingen binding</td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">GDPR compliant</td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-white">
                  <td className="py-4 px-6 text-gray-700">Dansk support</td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckIcon className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CrossIcon className="w-6 h-6 text-gray-300 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enkel prissætning</h2>
          <p className="text-xl text-gray-600 mb-12">Start gratis - betal kun for hvad du bruger</p>

          <div className="bg-gray-50 rounded-2xl p-12 border-2 border-gray-200">
            <div className="mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">5 kr</div>
              <div className="text-xl text-gray-600">pr. signatur</div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg mb-8">
              <CheckIcon className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-semibold">Første signatur gratis</span>
            </div>

            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ingen binding eller abonnement</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">100% forbrugsafregning</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">EU eIDAS kvalificeret signatur</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">GDPR compliant og sikker</span>
              </div>
            </div>

            <Link href="https://app.franksign.io/register" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg">
              Kom i gang gratis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfekt til alle brancher</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FrankSign bruges af virksomheder i hele Danmark
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ejendomsmæglere</h3>
              <p className="text-sm text-gray-600">Købsaftaler, salgsopstillinger og formidlingsaftaler</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advokater</h3>
              <p className="text-sm text-gray-600">Kontrakter, fuldmagter og juridiske dokumenter</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revisorer</h3>
              <p className="text-sm text-gray-600">Årsrapporter, erklæringer og regnskaber</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Virksomheder</h3>
              <p className="text-sm text-gray-600">Ansættelseskontrakter, NDA&apos;er og samarbejdsaftaler</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ofte stillede spørgsmål</h2>
            <p className="text-xl text-gray-600">Alt hvad du behøver at vide om FrankSign</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Er elektroniske signaturer juridisk bindende?</h3>
              <p className="text-gray-600">Ja, elektroniske signaturer er fuldt juridisk bindende i Danmark og hele EU ifølge eIDAS-forordningen. FrankSign overholder alle krav til avancerede elektroniske signaturer.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hvordan sikrer I mine dokumenter?</h3>
              <p className="text-gray-600">Alle dokumenter krypteres med AES-256 og gemmes sikkert på servere i EU. Vi er GDPR-compliant og følger de strengeste sikkerhedsstandarder.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kan jeg bruge MitID til signering?</h3>
              <p className="text-gray-600">Ja, underskrivere kan vælge at validere deres identitet med MitID for ekstra sikkerhed. Dette er valgfrit og kan aktiveres per dokument.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hvad koster det?</h3>
              <p className="text-gray-600">FrankSign koster kun 5 kr. pr. signatur. Ingen binding, ingen månedlig abonnement - du betaler kun for det du bruger. Din første signatur er gratis.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hvordan kommer jeg i gang?</h3>
              <p className="text-gray-600">Opret en gratis konto på få sekunder. Upload dit første dokument, tilføj underskrivere og send. Det tager under 2 minutter at sende dit første dokument til signering.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kan jeg integrere FrankSign med mine systemer?</h3>
              <p className="text-gray-600">Ja, vi tilbyder en fuldt dokumenteret REST API, så du kan integrere FrankSign direkte i dine eksisterende systemer og automatisere dine signeringsprocesser.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hvor længe gemmes mine dokumenter?</h3>
              <p className="text-gray-600">Alle signerede dokumenter gemmes sikkert i din konto og kan tilgås når som helst. Du kan også downloade dokumenterne til din egen arkivering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Klar til at komme i gang?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start din gratis 14-dages prøveperiode i dag.
          </p>
          <Link href="https://app.franksign.io/register" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg">
            Start gratis prøveperiode
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">FrankSign</div>
              <p className="text-sm text-gray-400">Elektronisk signatur lavet til Europa. Simpelt, sikkert og overkommeligt.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Priser</Link></li>
                <li><Link href="#" className="hover:text-white transition">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Virksomhed</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Om os</Link></li>
                <li><Link href="#" className="hover:text-white transition">Kontakt</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Juridisk</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Privatlivspolitik</Link></li>
                <li><Link href="#" className="hover:text-white transition">Handelsbetingelser</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookie-politik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; 2025 FrankSign.io. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">CVR: DK-XXXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
