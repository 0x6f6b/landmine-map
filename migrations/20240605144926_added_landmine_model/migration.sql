-- CreateTable
CREATE TABLE "Landmine" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "landUse" TEXT,
    "killed" INTEGER NOT NULL,

    CONSTRAINT "Landmine_pkey" PRIMARY KEY ("id")
);
