import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import React from "react";

export default function ShopLayout ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="pt-24"></div>
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    )
}