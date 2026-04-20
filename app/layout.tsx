import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/providers/theme-toggle";

export const metadata: Metadata = {
  title: "InterviewKit - Ace Your Tech Interviews",
  description:
    "Comprehensive preparation guide for JavaScript, TypeScript, Node.js, Python, System Design, and Problem Solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                  <Link className="flex items-center space-x-2" href="/">
                    <span className="font-bold text-xl tracking-tight">
                      InterviewKit
                    </span>
                  </Link>
                  <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link
                      href="/docs/javascript"
                      className="transition-colors hover:text-foreground"
                    >
                      Docs
                    </Link>
                    <Link
                      href="/docs/typescript"
                      className="transition-colors hover:text-foreground"
                    >
                      TypeScript
                    </Link>
                    <Link
                      href="/docs/system-design"
                      className="transition-colors hover:text-foreground"
                    >
                      System Design
                    </Link>
                    <Link
                      href="/docs/problem-solving"
                      className="transition-colors hover:text-foreground"
                    >
                      Algorithms
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <ThemeToggle />
                  <Link
                    href="https://github.com/touhidcodes/interviewkit"
                    target="_blank"
                    className="hidden sm:inline-flex rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all hover:bg-foreground/90"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/40 py-8 md:py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <span className="font-bold text-lg">InterviewKit</span>
                  <p className="text-sm text-muted-foreground max-w-[300px]">
                    Mastering the art of technical interviews, one topic at a
                    time.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} InterviewKit. Built by Touhidur
                  Zaman.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
