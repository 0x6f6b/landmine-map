import Link from "next/link";
import { InteractiveMap } from "./interactive-map";
import Image from "next/image";
import { Map } from "lucide-react";
import { Button } from "./ui/button";
import Header from "./header";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Mapping Cambodia&apos;s Landmine Crisis
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore an interactive map of likely landmine locations in
                  Cambodia, powered by public datasets and user reports.
                </p>
                <div className="space-x-4 my-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#map"
                  >
                    Explore the Map
                  </Link>
                  <Button variant="outline" asChild>
                    <Link href="/report">Report Landmine</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 mb-12">
                <Image
                  alt="Landmine"
                  className="rounded-lg"
                  width={600}
                  height={300}
                  src="/landmine.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Data Sources
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Leveraging Public Datasets
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We use a combination of publicly available data sources and
                  direct user reports to identify and map landmine hotspots in
                  Cambodia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Incident Reports</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We&apos;ve aggregated historical landmine incident reports
                  from government sources to identify minefields.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Transparent Data</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  All information used to plot mine data is publicly available
                  and is listed in our methodology page
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">User Input</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Not all landmine locations are known to the authorities. Users
                  are able to report mines directly on the website to help us
                  improve our data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <InteractiveMap />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Group 38. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function LandmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}
