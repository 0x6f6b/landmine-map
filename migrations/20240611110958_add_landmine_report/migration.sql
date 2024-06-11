-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "LandmineReport" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "landmineId" TEXT NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,

    CONSTRAINT "LandmineReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LandmineReport" ADD CONSTRAINT "LandmineReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandmineReport" ADD CONSTRAINT "LandmineReport_landmineId_fkey" FOREIGN KEY ("landmineId") REFERENCES "Landmine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
