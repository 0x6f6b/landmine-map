import Map from "@/components/map";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function InteractiveMap() {
  const landmines = await prisma.landmine.findMany();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="map"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore the Landmine Map
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Zoom, pan, and click on the map to view detailed information
                about landmine hotspots and the data behind our risk
                assessments.
              </p>
            </div>
            <div className="w-full max-w-5xl flex justify-center">
              {/* <HeatmapChart className="aspect-[16/9] rounded-xl" /> */}
              <Map landmines={landmines} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
