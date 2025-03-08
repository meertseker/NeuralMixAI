-- CreateTable
CREATE TABLE "UserInput" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "beatUrl" TEXT NOT NULL,
    "AudioUrl" TEXT NOT NULL,

    CONSTRAINT "UserInput_pkey" PRIMARY KEY ("id")
);
