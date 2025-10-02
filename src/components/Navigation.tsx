'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="The Rathik Foundation" 
                className="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate" className="donate-btn">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mobile-donate-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  )
} 