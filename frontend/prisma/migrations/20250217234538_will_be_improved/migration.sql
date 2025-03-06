-- CreateTable
CREATE TABLE "Preset" (
    "id" SERIAL NOT NULL,
    "vocalChainId" INTEGER NOT NULL,
    "presetName" TEXT NOT NULL,

    CONSTRAINT "Preset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plugin" (
    "id" SERIAL NOT NULL,
    "presetId" INTEGER NOT NULL,
    "pluginName" TEXT NOT NULL,

    CONSTRAINT "Plugin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PluginSetting" (
    "id" SERIAL NOT NULL,
    "pluginSettingName" TEXT NOT NULL,
    "pluginSettingValue" TEXT NOT NULL,
    "pluginId" INTEGER NOT NULL,

    CONSTRAINT "PluginSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beat" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "beatData" TEXT NOT NULL,

    CONSTRAINT "Beat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeatProperties" (
    "id" SERIAL NOT NULL,
    "beatId" INTEGER NOT NULL,
    "bpm" DOUBLE PRECISION NOT NULL,
    "beatPositions" TEXT NOT NULL,
    "swingGrooveDetection" DOUBLE PRECISION NOT NULL,
    "spectralCentroid" DOUBLE PRECISION NOT NULL,
    "mfcc" DOUBLE PRECISION NOT NULL,
    "harmonicToNoiseRatio" DOUBLE PRECISION NOT NULL,
    "rms" DOUBLE PRECISION NOT NULL,
    "peakAmplitude" DOUBLE PRECISION NOT NULL,
    "attackDecay" DOUBLE PRECISION NOT NULL,
    "keyScaleDetection" DOUBLE PRECISION NOT NULL,
    "chordProgression" TEXT NOT NULL,
    "energyLevel" DOUBLE PRECISION NOT NULL,
    "valence" DOUBLE PRECISION NOT NULL,
    "genrePrediction" TEXT NOT NULL,

    CONSTRAINT "BeatProperties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BeatProperties_beatId_key" ON "BeatProperties"("beatId");

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_vocalChainId_fkey" FOREIGN KEY ("vocalChainId") REFERENCES "VocalChain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plugin" ADD CONSTRAINT "Plugin_presetId_fkey" FOREIGN KEY ("presetId") REFERENCES "Preset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PluginSetting" ADD CONSTRAINT "PluginSetting_pluginId_fkey" FOREIGN KEY ("pluginId") REFERENCES "Plugin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeatProperties" ADD CONSTRAINT "BeatProperties_beatId_fkey" FOREIGN KEY ("beatId") REFERENCES "Beat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
