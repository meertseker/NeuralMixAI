/*
  Warnings:

  - You are about to drop the column `attackDecay` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `beatPositions` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `bpm` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `chordProgression` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `energyLevel` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `harmonicToNoiseRatio` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `keyScaleDetection` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `mfcc` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `peakAmplitude` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `rms` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `spectralCentroid` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `swingGrooveDetection` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the column `valence` on the `BeatProperties` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Beat" DROP CONSTRAINT "Beat_userId_fkey";

-- DropForeignKey
ALTER TABLE "VocalChain" DROP CONSTRAINT "VocalChain_userId_fkey";

-- AlterTable
ALTER TABLE "Beat" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "BeatProperties" DROP COLUMN "attackDecay",
DROP COLUMN "beatPositions",
DROP COLUMN "bpm",
DROP COLUMN "chordProgression",
DROP COLUMN "energyLevel",
DROP COLUMN "harmonicToNoiseRatio",
DROP COLUMN "keyScaleDetection",
DROP COLUMN "mfcc",
DROP COLUMN "peakAmplitude",
DROP COLUMN "rms",
DROP COLUMN "spectralCentroid",
DROP COLUMN "swingGrooveDetection",
DROP COLUMN "valence";

-- AlterTable
ALTER TABLE "VocalChain" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "User";
