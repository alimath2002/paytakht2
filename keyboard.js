     const inlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'تعیین قیمت',
                    callback_data: 'button1'
                },
                {
                    text: 'پیام به کاربر', 
                    callback_data: 'button2'
                }
            ],
            [
                {
                    text: 'سفارش آماده است',
                    url: 'https://example.com'
                }
            ]
        ]
    }
};
noadminkeyboard=[['ثبت سفارش جدید','گزارش'],['تماس با پاییتخت'],['درباره سازنده ربات']]

module.exports=[inlineKeyboard,noadminkeyboard];