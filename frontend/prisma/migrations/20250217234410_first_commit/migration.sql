-- CreateTable
CREATE TABLE "VocalChain" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "vocalChainName" TEXT NOT NULL,

    CONSTRAINT "VocalChain_pkey" PRIMARY KEY ("id")
);
