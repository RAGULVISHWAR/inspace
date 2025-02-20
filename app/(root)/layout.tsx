import Footer from "../../components/footer/page";
import Header from "../../components/header/page";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 justify-center items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}