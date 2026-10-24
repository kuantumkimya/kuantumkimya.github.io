import{t as e}from"./rolldown-runtime.DK3Fl9T5.js";import{n as t,t as n}from"./icerik-deger.ClZoWIAS.js";import{n as r,s as i}from"./shop-api.CT4L-HYB.js";var a=e({PanelHatasi:()=>r,SEPET_ALANLARI:()=>o,SONUC:()=>s,SONUC_GECIS:()=>l,adetDegistir:()=>h,aktifSepet:()=>p,islem:()=>f,kuponKaldir:()=>v,kuponUygula:()=>_,satirSil:()=>g,sepetVeKargo:()=>y,sepeteDon:()=>b,sepeteEkle:()=>m}),o=`
    id code state totalQuantity subTotalWithTax shippingWithTax totalWithTax currencyCode couponCodes
    discounts { description amountWithTax }
    lines {
        id quantity unitPriceWithTax linePriceWithTax
        featuredAsset { preview name }
        productVariant { id name sku options { name } product { slug name customFields { giftCard } } }
        customFields { lineOptions giftCardRecipientEmail giftCardRecipientName giftCardSenderName giftCardMessage }
    }
    shippingLines { priceWithTax discountedPriceWithTax shippingMethod { id code name } }
    shippingAddress { fullName company streetLine1 streetLine2 city province postalCode countryCode phoneNumber }
    customer { emailAddress firstName lastName phoneNumber }
    customFields { customerNote referralEmail heardFrom checkoutConsent }
    payments { method amount state metadata }
`,s=`
    __typename
    ... on Order { ${o} }
    ... on ErrorResult { errorCode message }
`,c=`
    ${s}
    ... on InsufficientStockError { quantityAvailable order { ${o} } }
`,l=`
    ${s}
    ... on OrderStateTransitionError { transitionError fromState }
`;function u(e){switch(e.errorCode){case`INSUFFICIENT_STOCK_ERROR`:return e.quantityAvailable?t(n(`dogrudan.sepet.stokYetersiz`),{adet:e.quantityAvailable}):n(`dogrudan.sepet.stokYok`);case`ORDER_LIMIT_ERROR`:return n(`dogrudan.sepet.adetSiniri`);case`NEGATIVE_QUANTITY_ERROR`:return n(`dogrudan.sepet.adetNegatif`);case`COUPON_CODE_INVALID_ERROR`:return n(`dogrudan.sepet.kuponGecersiz`);case`COUPON_CODE_EXPIRED_ERROR`:return n(`dogrudan.sepet.kuponSuresi`);case`COUPON_CODE_LIMIT_ERROR`:return n(`dogrudan.sepet.kuponSiniri`);case`EMAIL_ADDRESS_CONFLICT_ERROR`:return n(`dogrudan.sepet.epostaHesabi`);case`NO_ACTIVE_ORDER_ERROR`:return n(`dogrudan.sepet.sepetBos`);case`PAYMENT_DECLINED_ERROR`:case`PAYMENT_FAILED_ERROR`:return e.paymentErrorMessage||n(`dogrudan.odeme.odemeAlinamadi`);case`INELIGIBLE_PAYMENT_METHOD_ERROR`:return e.eligibilityCheckerMessage||n(`dogrudan.odeme.odemeSekli`);case`INELIGIBLE_SHIPPING_METHOD_ERROR`:return n(`dogrudan.odeme.kargoYontemi`);case`ORDER_STATE_TRANSITION_ERROR`:return e.transitionError&&!/^Cannot transition/i.test(e.transitionError)?e.transitionError:n(`dogrudan.odeme.siparisTamamlanamadi`);case`ORDER_PAYMENT_STATE_ERROR`:return n(`dogrudan.odeme.odemeDurumu`);case`ALREADY_LOGGED_IN_ERROR`:return n(`dogrudan.odeme.girisYapilmis`);case`GUEST_CHECKOUT_ERROR`:return n(`dogrudan.odeme.misafirSiparis`);default:return e.message??n(`dogrudan.genel.islemTamamlanamadi`)}}var d=`mutation { transitionOrderToState(state: "AddingItems") { ${l} } }`;async function f(e,t={},n=!0){let r=await i(e,t),a=Object.values(r)[0];return a?a.__typename===`Order`?{sepet:a}:a.errorCode===`ORDER_MODIFICATION_ERROR`&&n&&!(await f(d,{},!1)).hata?f(e,t,!1):{sepet:a.order??null,hata:u(a),kod:a.errorCode}:{sepet:null}}async function p(){return(await i(`{ activeOrder { ${o} } }`)).activeOrder}function m(e,t,n){return f(`mutation ($id: ID!, $adet: Int!, $alanlar: OrderLineCustomFieldsInput) { addItemToOrder(productVariantId: $id, quantity: $adet, customFields: $alanlar) { ${c} } }`,{id:e,adet:t,alanlar:n})}function h(e,t){return f(`mutation ($id: ID!, $adet: Int!) { adjustOrderLine(orderLineId: $id, quantity: $adet) { ${c} } }`,{id:e,adet:t})}function g(e){return f(`mutation ($id: ID!) { removeOrderLine(orderLineId: $id) { ${s} } }`,{id:e})}function _(e){return f(`mutation ($kod: String!) { applyCouponCode(couponCode: $kod) { ${s} } }`,{kod:e.trim()})}function v(e){return i(`mutation ($kod: String!) { removeCouponCode(couponCode: $kod) { ${o} } }`,{kod:e})}async function y(){let e=await i(`{ activeOrder { ${o} } }`);if(!e.activeOrder||e.activeOrder.lines.length===0)return{sepet:e.activeOrder,kargolar:[]};try{let t=await i(`{ eligibleShippingMethods { code priceWithTax metadata } }`);return{sepet:e.activeOrder,kargolar:t.eligibleShippingMethods}}catch{return{sepet:e.activeOrder,kargolar:[]}}}function b(){return f(d,{},!1)}export{p as a,_ as c,a as d,b as f,h as i,g as l,s as n,f as o,m as p,l as r,v as s,o as t,y as u};