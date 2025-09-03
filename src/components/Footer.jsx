import React from 'react'
import footerLogo from '../assets/footer-logo.svg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className="space-y-6 mr-14">
            <div className="flex items-center space-x-2">
                <img src={footerLogo} alt="footer" className='w-32 h-auto' />
            </div>
            <p className='text-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus quaerat perspiciatis, provident debitis laudantium nihil deleniti voluptas facere illo?</p>
            <div className="flex space-x-4">
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaFacebook className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaTwitter className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaInstagram className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaLinkedin className='text-xl' />
                </a>
            </div>
        </div>

        <div className="space-y-6 mr-14">
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-3'>
                <li><a href="#home" className='hover:underline text-gray-700'>Home</a> </li>
                <li><a href="#about" className='hover:underline text-gray-700'>About</a></li>
                <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
                <li><a href="#contact" className='hover:underline text-gray-700'>Contact Us</a></li>
            </ul>
        </div>
        <div className="space-y-6 mr-14">
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='space-y-3'>
                <li><a href="#" className='hover:underline text-gray-700'>FAQ</a> </li>
                <li><a href="#" className='hover:underline text-gray-700'>Trems of service</a></li>
                <li><a href="#" className='hover:underline text-gray-700'>Privecy Policy</a></li>
                <li><a href="#" className='hover:underline text-gray-700'>Support Center</a></li>
            </ul>
        </div>
        <div className="space-y-6 mr-14">
            <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-3'>
                <li className='flex items-center gap-2'> <FaMapMarkedAlt className='text-primary' /> <p className='text-gray-700'>123 Stret, City, Country</p> </li>
                <li className='flex items-center gap-2'> <FaPhoneAlt className='text-primary' /> <p className='text-gray-700'>+123 545 6 45854</p> </li>
                <li className='flex items-center gap-2'> <FaEnvelope className='text-primary' /> <p className='text-gray-700'>info@mindleap.com</p> </li>
            </ul>
        </div>
      </div>
      <div className="text-center text-gray-500">
        <p>Developed By Amdad Islam</p>
      </div>
    </div>
  )
}

export default Footer
