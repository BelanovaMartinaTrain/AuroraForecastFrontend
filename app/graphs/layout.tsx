export default function GraphLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <>{children}</>
        </>
    );
}
