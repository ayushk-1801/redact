"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavbarDashboard";
import { useState, useEffect } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "REDACT: A revolutionised Redaction Tool",
// 	description: "Generated by create next app",
// 	icons: {
// 		icon: "/favicon.ico",
// 	},
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<div className="relative">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
