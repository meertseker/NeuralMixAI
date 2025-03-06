/*
  Warnings:

  - You are about to drop the column `audio` on the `Beat` table. All the data in the column will be lost.
  - Added the required column `beatAudio` to the `Beat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `micAudio` to the `Beat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beat" DROP COLUMN "audio",
ADD COLUMN     "beatAudio" BYTEA NOT NULL,
ADD COLUMN     "micAudio" BYTEA NOT NULL;
