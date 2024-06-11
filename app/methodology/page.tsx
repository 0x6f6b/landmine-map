import Header from "@/components/header";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Methodology and Datasets
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We carefully select the most important and up to date
                  information available to provide the most accurate and
                  reliable data to the people who need it most.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <Link
                          href="https://data.opendevelopmentcambodia.net/dataset/mineerw-casualties-2005--2013"
                          className="hover:underline underline-offset-4 inline-flex items-center"
                          prefetch={false}
                        >
                          Mine/ERW casualties (2005- 2013)
                          <LinkIcon />
                        </Link>
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        This dataset provides landmine and explosive remnants of
                        war (ERW) casualties location data in Cambodia from 2005
                        to 2013.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <Link
                          href="https://data.opendevelopmentcambodia.net/dataset/mine-and-explosive-remnant-of-war-erw-accident-casualties-2016-2017"
                          className="hover:underline underline-offset-4 inline-flex items-center"
                          prefetch={false}
                        >
                          Mine/ERW casualties (2016-2017)
                          <LinkIcon />
                        </Link>
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        This dataset provides landmine and explosive remnants of
                        war (ERW) casualties location data in Cambodia from 2016
                        to 2017.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <Link
                          href="https://data.opendevelopmentcambodia.net/dataset/erw"
                          className="hover:underline underline-offset-4 inline-flex items-center"
                          prefetch={false}
                        >
                          Baseline survey on mine/ERW (2009-2014)
                          <LinkIcon />
                        </Link>
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        This baseline survey data shows information about
                        contamination locations of explosive remnants of war
                        (ERW) and mines from 2009 to 2014.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/cambodia.jpeg"
                width="550"
                height="310"
                alt="Data sources"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Group 38. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
