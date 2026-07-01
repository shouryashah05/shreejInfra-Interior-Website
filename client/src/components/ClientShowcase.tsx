import { useState, type CSSProperties } from 'react';

interface Client {
  id: number;
  name: string;
  logoPath: string;
}

const logoBasePath = '/client-logos';

const clientLogos: Client[] = [
  { id: 1, name: 'Birlasoft', logoPath: `${logoBasePath}/Birlasoft_Official_Logo%203.png` },
  { id: 2, name: 'Infosys', logoPath: `${logoBasePath}/Infosys-Logo%203.png` },
  {
    id: 3,
    name: 'Cummins',
    logoPath:
      `${logoBasePath}/cummins-logo-editorial-illustrative-white-background-cummins-logo-editorial-illustrative-white-background-eps-download-208329229-Photoroom.png`,
  },
  { id: 4, name: 'Finolex Pipes', logoPath: `${logoBasePath}/finolex-pipes-logo-png_seeklogo-305074-Photoroom.png` },
  { id: 5, name: 'The BNK Group', logoPath: `${logoBasePath}/Group.png` },
  { id: 6, name: 'Client 6', logoPath: `${logoBasePath}/25080526%203.png` },
  { id: 7, name: 'Client 7', logoPath: `${logoBasePath}/download-Photoroom%20(4).png` },
  { id: 8, name: 'Client 8', logoPath: `${logoBasePath}/download-Photoroom%20(5).png` },
  { id: 9, name: 'Client 9', logoPath: `${logoBasePath}/download-Photoroom%20(6).png` },
  { id: 10, name: 'Client 10', logoPath: `${logoBasePath}/download-Photoroom%20(7).png` },
  { id: 11, name: 'Client 11', logoPath: `${logoBasePath}/download-Photoroom%20(8).png` },
  { id: 12, name: 'Client 12', logoPath: `${logoBasePath}/download-Photoroom%20(9).png` },
  { id: 13, name: 'Client 13', logoPath: `${logoBasePath}/download-Photoroom%20(10).png` },
  { id: 14, name: 'Client 14', logoPath: `${logoBasePath}/download-Photoroom%20(11).png` },
  { id: 15, name: 'Client 15', logoPath: `${logoBasePath}/download-Photoroom%20(12).png` },
  { id: 16, name: 'Client 16', logoPath: `${logoBasePath}/download-Photoroom%20(13).png` },
  { id: 17, name: 'Client 17', logoPath: `${logoBasePath}/download-Photoroom%20(14).png` },
  { id: 18, name: 'Client 18', logoPath: `${logoBasePath}/download-Photoroom%20(15).png` },
  { id: 19, name: 'Client 19', logoPath: `${logoBasePath}/download-Photoroom%20(16).png` },
];

const logoRows = [0, 1, 2].map((rowIndex) => clientLogos.filter((_, index) => index % 3 === rowIndex));

export default function ClientShowcase() {
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({});

  const handleLogoError = (id: number) => {
    setLogoErrors((prev) => ({ ...prev, [id]: true }));
  };

  const renderLogoRow = (rowItems: Client[], direction: 'left' | 'right', duration: string) => {
    const duplicatedItems = [...rowItems, ...rowItems];
    
    return (
      <div 
        className="relative w-full overflow-hidden py-3 hover-pause"
        style={{ '--marquee-duration': duration } as CSSProperties}
      >
        <div
          className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {duplicatedItems.map((client, idx) => {
            const hasError = logoErrors[client.id];
            return (
              <div
                key={`${client.id}-${idx}`}
                className="mx-3 flex h-20 w-44 shrink-0 items-center justify-center border border-border bg-light-gray px-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                {!hasError ? (
                  <img
                    src={client.logoPath}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    onError={() => handleLogoError(client.id)}
                  />
                ) : (
                  <span className="font-serif text-xs tracking-wider text-navy/60 font-medium uppercase wrap-break-word px-1">
                    {client.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="client-showcase" className="py-20 bg-white border-t border-border overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-sm font-light text-navy/70 tracking-widest uppercase mb-2">
            TRUSTED PARTNERS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-navy tracking-wide">
            Companies We Have Worked With
          </h3>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 3-Row Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden flex flex-col gap-2">
          {/* Edge overlays to fade logos at borders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Left */}
          {renderLogoRow(logoRows[0], 'left', '36s')}

          {/* Row 2 - Right */}
          {renderLogoRow(logoRows[1], 'right', '32s')}

          {/* Row 3 - Left */}
          {renderLogoRow(logoRows[2], 'left', '38s')}
        </div>
      </div>
    </section>
  );
}

