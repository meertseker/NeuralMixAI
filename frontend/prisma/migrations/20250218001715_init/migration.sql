/*
  Warnings:

  - You are about to drop the `Beat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BeatProperties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BeatProperties" DROP CONSTRAINT "BeatProperties_beatId_fkey";

-- DropTable
DROP TABLE "Beat";

-- DropTable
DROP TABLE "BeatProperties";
