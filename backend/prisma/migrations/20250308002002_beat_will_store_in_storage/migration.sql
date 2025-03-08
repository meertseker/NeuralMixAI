/*
  Warnings:

  - You are about to drop the column `beatId` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the `Beat` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `beat` to the `BeatProperties` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BeatProperties" DROP CONSTRAINT "BeatProperties_beatId_fkey";

-- DropIndex
DROP INDEX "BeatProperties_beatId_key";

-- AlterTable
ALTER TABLE "BeatProperties" DROP COLUMN "beatId",
ADD COLUMN     "beat" TEXT NOT NULL;

-- DropTable
DROP TABLE "Beat";
