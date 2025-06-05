const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVFMmF4RVZCcTJYQ2VwY3pYUjhiazQ4MzFoc3JuTVVCL1FHOStISGpIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmhwMlVSY3BWQlRNcFpKcHRoQVlvdWkvd2htdlVMUUxmMmZaZXQ5cnV4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSnFxVzdJcjZPWjBLamFNc0p5WVphUUJOT21NQ0lVSThqUTZGekQ0NTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NWtuTmVQRXpvOEcrSUw2MDBxZUt5WlpTVkh4bmhnV2k0SUcxeWRZT1RrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNOE40ZFdTRFowakVjNnl4K0VxdlJBR0FFNHhLbUNLRU43Ykp0Mkh6Vms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhycU9DRmw5ZS9TYUdURURpS2lYZVJZT2ltMXhXbUNjdmlKNWp5dlpHelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVByOWowL0FiWEtJUjcrY2QxVG5vVTRXdFozYm5zN1JyS3FGd1dlZjQwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGs2bC8zak1kUVpmNWppeGxVVDgzdG9yNG9iYmJ3NjlCNnZ0SVBwcXEzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBKZzFCWVppNXZYbDBxTlQyNG9sRjdxdnNzZGZISDF4c29LT295bm5HYmZYclExRGdIaDJ2VUlNVjFsZXcwNDFJSUVzRkt3a1ZZNW1kd09FQWRNUmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJ1TXpmSnc1WmtQNS8vZkhVcTh6MDQxbjl6THMzMmF4ckcvU3VwOGdHWDNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMxOTcwOTc4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QTdENkQ0QjJDMkMyREZDQkI0MzgwOUQ4NEE2M0ZDNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ5MDk5ODA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMTk3MDk3ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkMzRUZGRDM2MDhCNEZCOTQ0QTgwM0M1MjZGQkU1RTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTA5OTgwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0tLU0JQOVEiLCJtZSI6eyJpZCI6IjkyMzMxOTcwOTc4MToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjMwMjk2NDE0ODY3NjQ3OjFAbGlkIiwibmFtZSI6IvCdkLfwnZul8J2RhfCdm6sg8J2br/Cdm7vwnZuq8J2QvyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25IcjlrQkVJM0toTUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0JHREx3c1d1T3cvQmtYeHhDQVBBNWFHRE9uaE9ra2xqNnU0dWpjaGdBaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR3dQb0k4MFZ2TzRYVVlxaEZ2V1lmNDNZSGlDZHcxRkdVMktXWncrMW5YN0JMeER4RDVWVjlpbG9DcURWQVNNRDdVYmFBZ25XZmZMQy9zekZzUGczRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InlBazFRM2RGUnRrTkpjZzJTalJTOWU4OU1jSVRMNmt2WVhVQjNzQUlYdW1hSnFiOVRWcjl2bEdObGV1OXU1d3grZDY3QS9tUjFsOExnZCs4TGk3eWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzE5NzA5NzgxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmdSZ3k4TEZyanNQd1pGOGNRZ0R3T1doZ3pwNFRwSkpZK3J1TG8zSVlBSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5MDk5ODAyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUE3NSJ9' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '923319709781' : process.env.OWNER_NUMBER,   
OWNER_NAME: process.env.OWNER_NAME === undefined ? 'ᴅᴀʀᴋ ᴇᴠɪʟ' : process.env.OWNER_NAME,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? false : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? false : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '*_ᴅᴀʀᴋ-ᴇᴠɪʟ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ_*': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,         
LOGO: process.env.LOGO || `https://telegra.ph/file/07565436def969a74708e.jpg` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};
