import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "Appscrip | Best shopping App Services In USA & India",
	description:
		"Welcome to our online shopping destination, where convenience meets style! Discover a vast array of products ranging from fashion and electronics to home decor and more, all at your fingertips.Browse through our curated collections and find the perfect outfit for any occasion, whether it's a casual day out or a special event. Explore the latest trends in clothing, shoes, and accessories for men, women, and kids, and elevate your wardrobe with quality pieces from top brands. Looking to upgrade your tech game? Dive into our electronics section and explore a wide selection of smartphones, laptops, tablets, and other gadgets to stay connected and entertained. Transform your living space with our home decor and furnishings, featuring everything from chic furniture to decorative accents that add personality to any room.With easy navigation, secure payment options, and fast shipping, shopping with us is a breeze. Plus, our dedicated customer support team is always here to assist you every step of the way.Experience the joy of online shopping with us today and make every purchase a delightful experience!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico"/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
