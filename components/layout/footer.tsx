import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-bold text-lg">InterviewKit</span>
          <p className="text-sm text-muted-foreground max-w-[300px]">
            Mastering the art of technical interviews, one topic at a time.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InterviewKit. Built by Touhidur Zaman.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link
              href="https://github.com/touhidcodes/interviewkit"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
