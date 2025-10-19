class   myfunctions {

readandsaveuser(users,msg,maxnumusersmemorized,newuserindex,chatId){

for (let index = 0; index <users.length; index++) {
    var user = users[index];
    console.log(2,user)
if (user.id===chatId){
    console.log(user)
  var user=user;
 }
}

if(!user){
let user={
    first_name:msg.chat.first_name,
    last_name:msg.chat.last_name,
    id:msg.chat.id,
date:msg.date
,situation:'mainmenue'
,req_history:''
};    
if(users.length>=maxnumusersmemorized){
    newuserindex=newuserindex-maxnumusersmemorized;
users[newuserindex]=user;

}else{
users.push(user)
newuserindex=newuserindex+1;
}
}
}

 
 
userrequesthandler(bot,callbackQuery,chatId){
    const message = callbackQuery.message;
    const data = callbackQuery.data;
        

    switch(data) {
        case 'button2':

           bot.answerCallbackQuery(callbackQuery.id, { text: 'اطلاعات تماس' });
            bot.sendMessage(chatId, 'شماره تماس: ۰۹۱۲۱۲۳۴۵۶۷');
            break;
            
        case 'button1':
            bot.answerCallbackQuery(callbackQuery.id, { text: 'اطلاعات ربات' });
            bot.sendMessage(chatId, 'این یک ربات نمونه است.');
            break;
            
        // case 'settings':
        //     bot.answerCallbackQuery(callbackQuery.id, { text: 'تنظیمات' });
            
        //     // ارسال کیبورد جدید برای تنظیمات
        //     const settingsKeyboard = {
        //         reply_markup: {
        //             inline_keyboard: [
        //                 [
        //                     { text: '🔔 نوتیفیکیشن', callback_data: 'notifications' },
        //                     { text: '🔐 حریم خصوصی', callback_data: 'privacy' }
        //                 ],
        //                 [
        //                     { text: '🔙 بازگشت', callback_data: 'back' }
        //                 ]
        //             ]
        //         }
        //     };
            
        //     bot.sendMessage(chatId, 'تنظیمات:', settingsKeyboard);
        //     break;
            
        // case 'back':
        //     bot.answerCallbackQuery(callbackQuery.id);
        //     bot.deleteMessage(chatId, message.message_id);
        //     // ارسال منوی اصلی مجدد
        //     break;
    }
}
}
 
module.exports=new myfunctions;