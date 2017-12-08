/**
 * Created by 璐 on 2016/4/12.
 */


function apiUrl(){
    var ebsig = 'http://ebsig.api.mcake.com/service/gateway.php?method=';
    var _API = {
        homeBanner: ebsig+"home.banner",
        /*good*/
        getRecommendGoods:ebsig+"home.goodsRecomm&api_name=mcake&noncestr=fkBkD11UuneZAnUZ&timestamp=1460790998&api_token=f7c620b5ff413f9792ab12d968f5863b738186d0", // 商品列表
        getAd:ebsig+'comm.footerad&api_name=mcake&noncestr=dcAYXoN1SSLFMbGd&timestamp=1460790998&api_token=9046e0f7e45d03a95a5b77e70488ba222836cc4d',
        getGoodById:ebsig+"goods.detail", //商品详情
        getGoodsByTaste: ebsig+"goods.allgoods",    //根据口味获取全部，tagid传all代表全部商品
        getTasteList: ebsig+"goods.flavorlist",
        /*address*/
        getCitys : ebsig +"comm.citylist",
        cartAdd : ebsig+ 'cart.add',
        cartLoad : ebsig + 'cart.load',
        cartEmpty : ebsig + 'cart.empty&api_name=mcake&noncestr=GBTwnQxDOADGB222&timestamp=1461033329&api_token=90f298d1d43c05b5c943a2846044b90f938861a3',
        cartUpdate : ebsig + 'cart.update',
        cartSelect : ebsig + 'cart.select',
        cartDelete: ebsig + 'cart.delete',
        cartUpdatePound : ebsig + 'cart.change',
        getComments: ebsig + "goods.comment",  //获取评价，参数：page、twoPostId
        getCommentLabel: ebsig + "goods.commentItems",
        /*获取token*/
        getToken: ebsig +"comm.token",
        /*登录 参数：cityId、password、username*/
        login: ebsig +"user.login",
        quickLogin: ebsig+"user.quickLogin",
        logout: ebsig +"user.logout",
        register: ebsig +"user.register",
        isLogin: ebsig +"user.loginStatus",
        checkUser: ebsig + 'user.checkUser',
        /*发送手机验证码*/
        sendPhoneCode: ebsig +"user.sendsms",
        /*获取图片验证码*/
        yzm: ebsig + "comm.yzm",
        /*立即购买*/
        nowbuy: ebsig + "cart.nowbuy",
        /*地址列表(个人中心）*/
        addresslist: ebsig + "delivery.addressList",
        /*地址列表(订单确认页)*/
        loadDeliver: ebsig + "checkout.loadDeliver",
        /*新增收货地址*/
        addrAdd: ebsig + "delivery.editAddress",
        /*个人中心设置默认地址*/
        saveDefaultAddr: ebsig + "delivery.setDefaultAddress",
        /*下单时设置默认收货地址*/
        saveDefaultDelivery: ebsig + "checkout.selectDeliver",
        deleteAddr: ebsig + "delivery.delAddress",
        /*保存配送日期和时间*/
        setSendDateTime: ebsig + "checkout.setSendDateTime",
        /*保存新增收货地址*/
        saveAddrByAdd: ebsig +"delivery.addAddress",
        /*通过deliverId查询收货地址*/
        getAddrById: ebsig + "delivery.editAddress",
        /*保存修改收货地址*/
        saveAddrByEdit: ebsig + "delivery.addAddress",
        /*地区列表*/
        areaList: ebsig +"delivery.areaList",
        /*新增自提地址*/
        addrAddPersonal: ebsig + "delivery.addAddressZiTi",
        /*自提地址列表*/
        addrPersonList: ebsig + "delivery.chooseAddList",
        /*配送日期列表*/
        deliveryDateList: ebsig + 'checkout.loadSendDate',
        /*配送时间段列表*/
        deliveryTimeList: ebsig + 'checkout.loadSendTime',
        order: {
            /*订单信息*/
            orderInfo: ebsig + "checkout.load",
            /*** 使用积分 ***/
            usePoints: ebsig + 'checkout.usePoints',
            /*** 取消使用积分 ***/
            cancelUsePoints: ebsig + 'checkout.cancelUsePoints',
            /*** 设置订单备注 ***/
            setRemark: ebsig + 'checkout.setRemark',
            /*** 设置发票 ***/
            setInvoice: ebsig + 'checkout.setInvoice',
            /*** 购买额外配件 ***/
            buyFittings: ebsig + 'checkout.buyFittings',
            /*** 取消购买额外配件 ***/
            cancelFittings: ebsig + 'checkout.cancelBuyFittings',
            /*** 加载支付方式 ***/
            getPayment: ebsig + 'checkout.loadPayType',
            /*** 选择付款方式 ***/
            choosePayment: ebsig + 'checkout.choosePayment',
            /*** 订单提交 ***/
            submit: ebsig + 'bill.submit',
            /*** 选择巧克力牌 ***/
            selectBirthdayCard: ebsig + 'checkout.selectBirthdayCard',
            /*** 设置巧克力牌内容 ***/
            setBirthdayCard: ebsig + 'checkout.setBirthdayCard',
            /*** 选择生日蜡烛 ***/
            selectBirthdayCandle: ebsig + 'checkout.selectBirthdayCandle',
            /*** 使用优惠券 ***/
            useCoupon: ebsig + 'checkout.useCoupon',
            /*** 取消使用优惠券 ***/
            cancelCoupon: ebsig + 'checkout.cancelUseCoupon',
            /*** 使用红包 ***/
            useRedBag: ebsig + 'checkout.useRedBag',
            /*** 取消使用红包 ***/
            cancelRedBag: ebsig + 'checkout.cancelUseCoupon',
            /*** 使用现金卡 ***/
            useCard: ebsig + 'checkout.useCard',
            /*** 取消使用现金卡 ***/
            cancelCard: ebsig + 'checkout.cancelUseCard',
            /*** 获取支付链接 ***/
            getPayLink: ebsig + 'payment.detail',
            /*** 获取订单支付状态 1是已支付 0是未支付 2是部分支付 ***/
            getOrderStatus: ebsig + 'bill.checkOnlinePay',
            /*** 绑定现金卡 ***/
            bindCard: ebsig + 'ucenter.bindCard',
            /*** 绑定优惠券 ***/
            bindCoupon: ebsig + 'ucenter.bindCoupon'
        },
        /*会员中心*/
        member: {
            /*会员信息*/
            info: ebsig + "ucenter.myHome",
            /*找回密码*/
            getPassword: ebsig + "user.getPwd",
            /*現金卡*/
            cashList: ebsig + "ucenter.myCashs",
            /*优惠券*/
            couponList: ebsig + "ucenter.myCoupon&useType=1",
            /*红包*/
            redPackList: ebsig + "ucenter.myCoupon&useType=2",
            /*积分*/
            intgList: ebsig + "ucenter.integration",
            /*修改手机号*/
            editMobile: ebsig +"ucenter.editMobilePhone",
            /*消息列表*/
            messageList: ebsig +'ucenter.getMessage',
            /*删除消息*/
            messageDel: ebsig +'ucenter.delMessage',
            /*消息详情*/
            messageDetail: ebsig +'ucenter.messageDetail',
            /*修改密码*/
            editPwd: ebsig +'ucenter.alertPwd',
            /*个人信息*/
            personal: ebsig +"ucenter.customerDetail",
            /*保存个人信息*/
            personalEdit: ebsig +"ucenter.editCustomer",
            /*保存纪念日*/
            personalAnniver: ebsig +"ucenter.editAnniversary",
            /*会员等级*/
            level: ebsig + "ucenter.getUserRankDetail"
        },
        /*全部订单列表*/
        getAllOrders: ebsig + 'ucenter.getBillList',
        /* 获取订单列表tab数目显示*/
        getOrderNum: ebsig +  'ucenter.getPsDfkNum',
        /*订单详情*/
        getOrderDtl : ebsig + 'ucenter.getBillDetail',
        /*取消订单*/
        cancleOrder : ebsig + 'bill.cancel',
        /*获取需要点评的SKU*/
        cmtOrder : ebsig + 'bill.getBillGoods',
        /*提交点评内容*/
        setOrderCmt : ebsig + 'bill.submitGoodsComment',
        /*获取订单点评内容*/
        getOrderCmt :ebsig + 'bill.searchBillGoodsComment'
    };
console.log(_API.getGoodsByTaste);
    return _API; 

};


