"use client";

import React from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 px-4 md:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex justify-center min-h-[200px]"
      >
        <Card className="bg-transparent border-0 shadow-none w-full">
          <CardContent className="p-0 flex flex-col md:flex-row justify-between gap-6 md:gap-12 w-full px-10">
            {/* Logo and Description */}
            <motion.div
              className="flex flex-col items-center justify-center md:items-start text-center md:text-left flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  width={100}
                  height={100}
                  src="/icons/logo.svg"
                  alt="EPTEC Logo"
                  className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="text-xs md:text-sm text-white/70 max-w-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              className="flex flex-col items-center flex-1 justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-base md:text-lg font-semibold text-primary mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-white/70">
                <motion.li
                  whileHover={{ x: 5, color: "var(--color-primary)" }}
                  className="cursor-pointer transition-all duration-300"
                >
                  Social media
                </motion.li>
                <motion.li
                  whileHover={{ x: 5, color: "var(--color-primary)" }}
                  className="cursor-pointer transition-all duration-300"
                >
                  UI/UX Design
                </motion.li>
                <motion.li
                  whileHover={{ x: 5, color: "var(--color-primary)" }}
                  className="cursor-pointer transition-all duration-300"
                >
                  Social media
                </motion.li>
                <motion.li
                  whileHover={{ x: 5, color: "var(--color-primary)" }}
                  className="cursor-pointer transition-all duration-300"
                >
                  UI/UX Design
                </motion.li>
                <motion.li
                  whileHover={{ x: 5, color: "var(--color-primary)" }}
                  className="cursor-pointer transition-all duration-300"
                >
                  UI/UX Design
                </motion.li>
              </ul>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              className="flex flex-col items-center  flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-base md:text-lg font-semibold text-primary mb-4">
                Follow us
              </h3>
              <div className="flex space-x-3 md:space-x-4">
                <motion.a
                  href="#"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="transition-all duration-300"
                >
                  <Facebook className="text-white hover:text-primary w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="transition-all duration-300"
                >
                  <Youtube className="text-white hover:text-primary w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="transition-all duration-300"
                >
                  <Linkedin className="text-white hover:text-primary w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </footer>
  );
};

export default Footer;
