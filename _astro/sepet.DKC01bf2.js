import{t as e}from"./rolldown-runtime.DK3Fl9T5.js";import{n as t,t as n}from"./icerik-deger.DRxg9rdl.js";import{n as r}from"./sepet-kanali.CTRyIfg8.js";import{n as i,s as a}from"./shop-api.BcNQKTgw.js";var o=e({PanelHatasi:()=>i,SEPET_ALANLARI:()=>s,SONUC:()=>c,SONUC_GECIS:()=>d,adetDegistir:()=>v,aktifSepet:()=>g,islem:()=>m,kuponKaldir:()=>x,kuponUygula:()=>b,satirSil:()=>y,sepetVeKargo:()=>S,sepeteDon:()=>C,sepeteEkle:()=>_}),s=`
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
`,c=`
    __typename
    ... on Order { ${s} }
    ... on ErrorResult { errorCode message }
`,l=`
    ${c}
    ... on OrderInterceptorError { interceptorError }
`,u=`
    ${l}
    ... on InsufficientStockError { quantityAvailable order { ${s} } }
`,d=`
    ${c}
    ... on OrderStateTransitionError { transitionError fromState }
`;function f(e){switch(e.errorCode){case`ORDER_INTERCEPTOR_ERROR`:return e.interceptorError?.trim()||n(`dogrudan.genel.islemTamamlanamadi`);case`INSUFFICIENT_STOCK_ERROR`:return e.quantityAvailable?t(n(`dogrudan.sepet.stokYetersiz`),{adet:e.quantityAvailable}):n(`dogrudan.sepet.stokYok`);case`ORDER_LIMIT_ERROR`:return n(`dogrudan.sepet.adetSiniri`);case`NEGATIVE_QUANTITY_ERROR`:return n(`dogrudan.sepet.adetNegatif`);case`COUPON_CODE_INVALID_ERROR`:return n(`dogrudan.sepet.kuponGecersiz`);case`COUPON_CODE_EXPIRED_ERROR`:return n(`dogrudan.sepet.kuponSuresi`);case`COUPON_CODE_LIMIT_ERROR`:return n(`dogrudan.sepet.kuponSiniri`);case`EMAIL_ADDRESS_CONFLICT_ERROR`:return n(`dogrudan.sepet.epostaHesabi`);case`NO_ACTIVE_ORDER_ERROR`:return n(`dogrudan.sepet.sepetBos`);case`PAYMENT_DECLINED_ERROR`:case`PAYMENT_FAILED_ERROR`:return e.paymentErrorMessage||n(`dogrudan.odeme.odemeAlinamadi`);case`INELIGIBLE_PAYMENT_METHOD_ERROR`:return e.eligibilityCheckerMessage||n(`dogrudan.odeme.odemeSekli`);case`INELIGIBLE_SHIPPING_METHOD_ERROR`:return n(`dogrudan.odeme.kargoYontemi`);case`ORDER_STATE_TRANSITION_ERROR`:return e.transitionError&&!/^Cannot transition/i.test(e.transitionError)?e.transitionError:n(`dogrudan.odeme.siparisTamamlanamadi`);case`ORDER_PAYMENT_STATE_ERROR`:return n(`dogrudan.odeme.odemeDurumu`);case`ALREADY_LOGGED_IN_ERROR`:return n(`dogrudan.odeme.girisYapilmis`);case`GUEST_CHECKOUT_ERROR`:return n(`dogrudan.odeme.misafirSiparis`);default:return n(`dogrudan.genel.islemTamamlanamadi`)}}var p=`mutation { transitionOrderToState(state: "AddingItems") { ${d} } }`;async function m(e,t={},n=!0){let r=await a(e,t),i=Object.values(r)[0];if(!i)return{sepet:null};if(i.__typename===`Order`)return h(i),{sepet:i};if(i.errorCode===`ORDER_MODIFICATION_ERROR`&&n&&!(await m(p,{},!1)).hata)return m(e,t,!1);let o=i.order??null;return o&&h(o),{sepet:o,hata:f(i),kod:i.errorCode}}function h(e){r(e.state===`AddingItems`||e.state===`ArrangingPayment`?e.totalQuantity:0)}async function g(){return(await a(`{ activeOrder { ${s} } }`)).activeOrder}function _(e,t,n){return m(`mutation ($id: ID!, $adet: Int!, $alanlar: OrderLineCustomFieldsInput) { addItemToOrder(productVariantId: $id, quantity: $adet, customFields: $alanlar) { ${u} } }`,{id:e,adet:t,alanlar:n})}function v(e,t){return m(`mutation ($id: ID!, $adet: Int!) { adjustOrderLine(orderLineId: $id, quantity: $adet) { ${u} } }`,{id:e,adet:t})}function y(e){return m(`mutation ($id: ID!) { removeOrderLine(orderLineId: $id) { ${l} } }`,{id:e})}function b(e){return m(`mutation ($kod: String!) { applyCouponCode(couponCode: $kod) { ${c} } }`,{kod:e.trim()})}async function x(e){let t=await a(`mutation ($kod: String!) { removeCouponCode(couponCode: $kod) { ${s} } }`,{kod:e});return t.removeCouponCode&&h(t.removeCouponCode),t}async function S(){let e=await a(`{ activeOrder { ${s} } }`);if(!e.activeOrder||e.activeOrder.lines.length===0)return{sepet:e.activeOrder,kargolar:[]};try{let t=await a(`{ eligibleShippingMethods { code priceWithTax metadata } }`);return{sepet:e.activeOrder,kargolar:t.eligibleShippingMethods}}catch{return{sepet:e.activeOrder,kargolar:[]}}}function C(){return m(p,{},!1)}export{g as a,b as c,o as d,C as f,v as i,y as l,c as n,m as o,_ as p,d as r,x as s,s as t,S as u};