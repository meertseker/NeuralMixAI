// dbClient.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// User Operations
async function createUser(username, email, password) {
  return await prisma.user.create({
    data: { username, email, password }
  })
}

async function getUserById(userId) {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: { beats: true, vocalChains: true }
  })
}

// Beat Operations
async function createBeat(userId, description, beatAudio, micAudio) {
    return await prisma.beat.create({
      data: {
        user: { connect: { id: userId } },
        description,
        beatAudio,
        micAudio
      },
      select: {
        id: true,
        description: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true
          }
        }
      }
    })
  }

async function addBeatProperties(beatId, properties) {
  return await prisma.beatProperties.create({
    data: {
      beat: { connect: { id: beatId } },
      ...properties
    }
  })
}

// Vocal Chain Operations
async function createVocalChain(userId, chainName) {
  return await prisma.vocalChain.create({
    data: {
      user: { connect: { id: userId } },
      vocalChainName: chainName
    }
  })
}

// Preset Operations
async function addPresetToChain(vocalChainId, presetName) {
  return await prisma.preset.create({
    data: {
      vocalChain: { connect: { id: vocalChainId } },
      presetName
    }
  })
}

// Plugin Operations
async function addPluginToPreset(presetId, pluginName) {
  return await prisma.plugin.create({
    data: {
      preset: { connect: { id: presetId } },
      pluginName
    }
  })
}

// Plugin Settings Operations
async function addPluginSetting(pluginId, settingName, settingValue) {
  return await prisma.pluginSetting.create({
    data: {
      plugin: { connect: { id: pluginId } },
      pluginSettingName: settingName,
      pluginSettingValue: settingValue
    }
  })
}

// Get Operations
async function getFullVocalChain(vocalChainId) {
  return await prisma.vocalChain.findUnique({
    where: { id: vocalChainId },
    include: {
      presets: {
        include: {
          plugins: {
            include: {
              settings: true
            }
          }
        }
      }
    }
  })
}

async function getBeatWithProperties(beatId) {
  return await prisma.beat.findUnique({
    where: { id: beatId },
    include: { properties: true }
  })
}

module.exports = {
  createUser,
  getUserById,
  createBeat,
  addBeatProperties,
  createVocalChain,
  addPresetToChain,
  addPluginToPreset,
  addPluginSetting,
  getFullVocalChain,
  getBeatWithProperties
}