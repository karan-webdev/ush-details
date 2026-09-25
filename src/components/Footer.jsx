import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import logo from '/logo.png'

const services = [
  'Deluxe detail',
  'Paint enhancement',
  'Ceramic coating',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 2rem' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            
            {/* ONLY LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 'auto',
                  height: '120px',
                  objectFit: 'contain',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1.5rem',
              }}
            >
              Premium mobile car detailing across Brisbane. Interior, exterior and ceramic coating, done at your door.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/p/Ushdetails-61584457852394/' },
                { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ush.details/' },
                { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@ush.details' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#1673d2'
                    e.currentTarget.style.color = '#1673d2'
                    e.currentTarget.style.background = 'rgba(22, 115, 210, 0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '-0.015em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Services
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map(s => (
                <a
                  key={s}
                  href="#services"
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1673d2')}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '-0.015em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Contact
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Phone, text: '0424 171 357', href: 'tel:0424171357' },
                { icon: Mail, text: 'usherton1235@outlook.com', href: 'mailto:usherton1235@outlook.com' },
                { icon: Globe, text: 'ushdetails.com.au', href: 'https://ushdetails.com.au' },
                { icon: MapPin, text: 'Brisbane, Queensland', href: 'https://www.google.com/maps/place/Brisbane+QLD' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    lineHeight: 1.5,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')
                  }
                >
                  <Icon size={15} color="#1673d2" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © {new Date().getFullYear()} Ush Details. All rights reserved.
          </div>

          
        </div>
      </div>
    </footer>
  )
}