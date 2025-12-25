import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t-2 border-neo-border dark:border-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <Logo variant="icon" />
                    <span className="font-display font-bold text-xl">Meshwork Studio</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
                    The modern standard for distributed systems design. Built for architects who ship.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border-2 border-neo-border dark:border-white rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-icons-outlined text-gray-600 dark:text-gray-300">alternate_email</span>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-neo-border dark:border-white rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-icons-outlined text-gray-600 dark:text-gray-300">code</span>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-neo-border dark:border-white rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-icons-outlined text-gray-600 dark:text-gray-300">rss_feed</span>
                    </a>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-lg mb-4">Product</h4>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 Meshwork Studio. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-text-light dark:hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-text-light dark:hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;