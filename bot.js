const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const User=require('./models/user');
mongoose.connect("mongodb://localhost:27017/paytakht2",{})

 
       mainchatid=707870508;
       const memoryid=-1002920032566;
       const [inlineKeyboard,noadminkeyboard] = require('./keyboard');
       const myfunctions=require('./funcs')
        const maxnumusersmemorized=2;
let users=[{id:0}]
let newuserindex=0; 
 
// ایجاد ربات
const bot = new TelegramBot('8238464476:AAGZTGoeAZZ207zsxQyn1S62EyfZkJikph4', {
    polling: {
        interval: 300,
        autoStart: true,
        
    },

});






// هندلرهای ربات
bot.on('message', (msg) => {



    const chatId = msg.chat.id;
   // console.log(msg)

//پیام از کاربر غیر ادمین باشد
 if(chatId!==mainchatid){

//checkuser(msg,User).then();

myfunctions.readandsaveuser(users,msg,maxnumusersmemorized,newuserindex,chatId)

console.log(users)

bot.sendMessage(chatId,'به پاییتخت خوش آمدید',{reply_markup:{'keyboard':noadminkeyboard}})
 if (msg.text==='گزارش') {
    console.log('sefaresh')

 }
 if (msg.text==='ثبت سفارش جدید') {
    bot.sendMessage(chatId,"فایل سفارش مورد نظرتان را بفرستید",{reply_markup:{'keyboard':['s']}})

 }
 if (msg.text==='تماس با پاییتخت') {
    console.log('تماس با پاییتخت')
 }

 if (msg.text==='درباره سازنده ربات') {
    bot.sendMessage(chatId,`برای ساخت ربات ها و وبسایت ها از طریق ایمیل با من در تماس باشید 
        aliseper2002@gmail.com
        `)
 }

bot.sendMessage(mainchatid, msg.text +`
    __________
    from user:
    id:${msg.chat.id}
    fname:${msg.chat.first_name}
    lname:${msg.chat.last_name}`, inlineKeyboard);

//admin messages bot
    }else{

    bot.sendMessage(chatId, 'Received your message through proxy!');

    }
});

bot.on('callback_query',(callbackQuery)=>{ myfunctions.userrequesthandler(bot,callbackQuery,mainchatid)});







async function checkuser(msg,User) {
   try{
   const user= await User.findOne({id:msg.chat.id})
    if(!user){
     const user=new User({
         first_name:msg.chat.first_name,
    last_name:msg.chat.last_name,
    id:msg.chat.id,
date:msg.date
,situation:'mainmenue'
,req_history:''
     })


   await  user.save()
    }
return user
}catch(e){
console.log('database failure:',e)
}

}