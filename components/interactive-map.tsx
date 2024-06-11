import Map from "@/components/map";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function InteractiveMap() {
  const landmineReports = await prisma.landmineReport.findMany();
  console.log(landmineReports);
  const landmines = await prisma.landmine.findMany();

  const reportedLandmines = landmines.filter((landmine) =>
    landmineReports.some((report) => report.landmineId === landmine.id)
  );

  // add reportedBy field to reportedLandmines
  const userLandmines = await Promise.all(
    reportedLandmines.map(async (landmine) => {
      const user = landmineReports.find(
        (report) => report.landmineId === landmine.id
      )?.userId;

      const userObj = await prisma.user.findUnique({
        where: {
          uid: user,
        },
      });

      return {
        ...landmine,
        reportedBy: userObj || {
          uid: "",
          email: "",
          name: "",
        },
      };
    })
  );

  const seedLandmines = landmines.filter(
    (landmine) => !reportedLandmines.includes(landmine)
  );

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-20 bg-gray-100 dark:bg-gray-800" id="map">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore the Map
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Zoom, pan, and click on the map to view detailed information
                about each incident report.
              </p>
            </div>
            <div className="w-full max-w-5xl flex justify-center">
              {/* <HeatmapChart className="aspect-[16/9] rounded-xl" /> */}
              <Map
                userLandmines={userLandmines}
                seedLandmines={seedLandmines}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
