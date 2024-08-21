import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'

const defaultMenu = {
  before: `
> 𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦 𝗥𝗔𝗬𝗔𝗡𝗘 𝗜'𝗠 𝗔 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗔𝗥𝗧𝗜𝗙𝗜𝗖𝗜𝗔𝗟 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘 𝗜 𝗖𝗔𝗡 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗦𝗘𝗥𝗩𝗜𝗖𝗘𝗦. 𝗜 𝗪𝗔𝗦 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 @𝗥𝗭𝟏_𝗟𝗛_𝟎𝟓_Follow me on my channe_https://whatsapp.com/channel/0029VacrIfU3LdQdklKFR419

> ▧ Salam : %name
> ▧ Uptime : %muptime

%readmore`.trimStart(),
  header: '❏┄┅━┅┄〈 〘 %category 〙\n│',
    body: '┊▧ %cmd %islimit %isPremium',
  footer: '│\n┗━═┅═━━┅┄๑\n',
  after: '',
}
let handler = async (m, { conn, usedPrefix, command, __dirname, isOwner, isMods, isPrems, args }) => {
    let tags
    let teks = ${args[0]}.toLowerCase()
    let arrayMenu = ['all', 'drawing', 'ai', 'downloader','image-edit','sticker', 'search', 'tools','infobot', 'owner']
    if (!arrayMenu.includes(teks)) teks = '404'
    if (teks == 'all') tags = {
        'drawing': 'drawing',
        'ai': 'ai',
        'downloader': 'downloader',
        'image-edit':'image-edit',
        'sticker': 'sticker',
        'search': 'search',
        'tools': 'tools',
        'owner': 'owner', 
        'infobot': 'infobot',
    }
    if (teks == 'drawing') tags = {
        'drawing': 'drawing'
    }
    if (teks == 'ai') tags = {
        'ai': 'ai'
    }
    if (teks == 'downloader') tags = {
        'downloader': 'downloader'
    }
    if (teks == 'image-edit') tags = {
        'image-edit': 'image-edit'
    }
    if (teks == 'sticker') tags = {
        'sticker': 'Sticker'
    }
    if (teks == 'search') tags = {
        'search': 'Searching'
    }
    if (teks == 'tools') tags = {
        'tools': 'Tools'
    }
    if (teks == 'owner') tags = {
        'owner': 'Owner'
    }
    if (teks == 'info') tags = {
        'infobot': 'infobot'
    }
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let package = JSON.parse(await promises.readFile(join(dirname, '../package.json')).catch( => ({}))) || {}
    let { exp, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let tag = @${m.sender.split('@')[0]}
    let user = global.db.data.users[m.sender]
    let limit = isPrems ? 'Unlimited' : user.limit
    let name = user.registered ? user.name : conn.getName(m.sender)
    let status = isMods ? 'Developer' : isOwner ? 'Owner' : isPrems ? 'Premium User' : user.level > 1000 ? 'Elite User' : 'Free User'
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let listCmd =  `
> 𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦 𝗥𝗔𝗬𝗔𝗡𝗘 𝗜'𝗠 𝗔 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗔𝗥𝗧𝗜𝗙𝗜𝗖𝗜𝗔𝗟 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘. 𝗜 𝗖𝗔𝗡 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗦𝗘𝗥𝗩𝗜𝗖𝗘𝗦. 𝗜 𝗪𝗔𝗦 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 @𝗥𝗭𝟏_𝗟𝗛_𝟎𝟓


> ▧ Uptime : ${muptime}
`.trimStart()

    let rows = []
    for (let i = 0; i < arrayMenu.length; i++) {
        let result = {
            "header": "",
            "title": "" + capitalize(arrayMenu[i]),
             "id": usedPrefix + "menu " + arrayMenu[i]
        }
        rows.push(result)
    }
    let buttonMsg = {
        "title": "إضغط هنا ",
        "sections": [{
            "title": "List Menu",
            "highlight_label": "Popular",
            "rows": rows
        }]
    }

    let buttons = [{
        "name": "single_select",
        "buttonParamsJson": JSON.stringify(buttonMsg)
    }]
   // let hwaifu = JSON.parse(fs.readFileSync('./json/hwaifu.json', 'utf-8'))

    if (teks == '404') {
        return conn.sendButtonImg(m.chat, 'https://telegra.ph/file/7811a853705aafc68fedc.jpg', "", listCmd.trim(), " ", buttons, m, { 
            contextInfo: {
                mentionedJid: [m.sender],
            }
        })
    }
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
        help: Array.isArray(plugin.tags) ? plugin.help: [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags: [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
    }
    })
    let groups = {}
    for (let tag in tags) {
        groups[tag] = []
        for (let plugin of help)
            if (plugin.tags && plugin.tags.includes(tag))
            if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu: {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '': Powered by https://wa.me/${global.conn.user.jid.split@[0]}) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
            return header.replace(/%category/g, tags[tag]) + '\n' + [
                ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                    return menu.help.map(help => {
                        return body.replace(/%cmd/g, menu.prefix ? help: '%p' + help)
                        .replace(/%islimit/g, menu.limit ? '🅛' : '')
                        .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                        .trim()
                    }).join('\n')
                }),
                footer
            ].join('\n')
        }),
        after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu: typeof conn.menu == 'object' ? _text: ''
    let replace = {
      '%': '%',
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, tag, status, wib, 
      readmore: readMore
    }
    text = text.replace(new RegExp(%(${Object.keys(replace).sort((a, b) => b.length - a.length).join|}), 'g'), (_, name) => '' + replace[name])

    await conn
		.sendMessage(
			m.chat,
			{
				text: text,
				mentions: [m.sender],
				contextInfo: {
					forwardingScore: 9999999,
					isForwarded: false,
					mentionedJid: [m.sender],
					externalAdReply: {
						showAdAttribution: false,
						renderLargerThumbnail: true,
						title: `إضغط هنا لمتابعة صانع البوت في حسابه `,
						containsAutoReply: true,
						mediaType: 1,
						thumbnailUrl: https://telegra.ph/file/7811a853705aafc68fedc.jpg,
						mediaUrl: ``,
						sourceUrl: "https://www.instagram.com/rz1_lh_05?igsh=YTQwZjQ0NmI0OA==",
					},
				},
			},
			{ quoted: m },
		)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
    const time = moment.tz('Asia/Jakarta').format('HH')
    wishloc = ('Hi')
    if (time >= 0) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 4) {
        wishloc = ('Selamat Pagi')
    }
    if (time >= 11) {
        wishloc = ('Selamat Siang')
    }
    if (time >= 15) {
        wishloc = ('Selamat Sore')
    }
    if (time >= 18) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 23) {
        wishloc = ('Selamat Malam')
    }
    return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--': Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--': Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--': Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}
