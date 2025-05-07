export const metadata = {
    title: "Habit Plotter",
    description: "🌱 Small steps, big patterns — track and grow.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
