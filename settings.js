//═════════════════════════════//
//
//             x_ᴇxᴘᴇʀᴛ_x V6.0.2                 
// 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94770611075'] //Owner Number in alive msg
global.premium = ['94770611075'] //Owner Number in info
global.ownernomer = '94770611075' // Owner Number <<<
global.ownername = 'x_ᴇxᴘᴇʀᴛ_x' //Owner Name
global.botname = '🧚‍♂️x_ᴇxᴘᴇʀᴛ_x🧚‍♂️' //Bot Name
global.footer = '©x_ᴇxᴘᴇʀᴛ_x.' //In List Menu
global.ig = 'https://chat.whatsapp.com/Go9cBxSneUpGDbl6gKdF7E'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/Go9cBxSneUpGDbl6gKdF7E'
global.myweb = 'https://t.me/TRXONLYY'
global.packname = '🧚‍♂️x_ᴇxᴘᴇʀᴛ_x🧚‍♂️' //Bot Pacage Name
global.author = 'x_ᴇxᴘᴇʀᴛ_x' //Author Name
global.sessionName = 'session' //Session Name!
global.prefa = ['','!','.','👩‍💻','📱','❤️'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '⭔' //A Charactor
global.mess = {// CUSTOMIZE WITH YOUR LANGUAGE
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Want To Be Admin😭',
    owner: 'This Feature Is Only For Owner!😏',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat🤕!',
    bot: 'This Feature Is Only For Bot🥴',
    wait: '👉👈Please Wait...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
