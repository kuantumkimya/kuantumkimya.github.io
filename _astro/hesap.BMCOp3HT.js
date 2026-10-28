import{n as e}from"./rolldown-runtime.4tVxZq34.js";import{i as t}from"./oturum-ipucu.HnJ2V5Ug.js";import{n,o as r,r as i}from"./shop-api.CUvd7O3K.js";import{n as a,r as o}from"./oturum.wRtr9iWj.js";import{p as ee}from"./sepet.2GBlFjqu.js";var te=e({adresEkle:()=>W,adresGuncelle:()=>G,adresSil:()=>K,adreslerGetir:()=>U,aktifMusteri:()=>j,cikis:()=>H,dogrula:()=>P,dogrulamaYenile:()=>F,epostaDegisikligiIste:()=>B,epostaDegisikligiOnayla:()=>V,girisYap:()=>M,hataKodu:()=>m,hazirlikDurumuTuret:()=>k,kayitOl:()=>N,misafirTakip:()=>$,odemeDurumuTuret:()=>O,profilGuncelle:()=>R,sadakatGetir:()=>Q,sadakatIndirimiVar:()=>Z,seviyeIndirimi:()=>X,sifreDegistir:()=>z,sifreGecerliMi:()=>E,sifreYenile:()=>L,sifreYenileIste:()=>I,siparisDurumuEkle:()=>A,siparisGetir:()=>ke,siparisGetirKod:()=>J,siparisTekrarla:()=>Y,siparislerim:()=>q,takipGirdisiGecerliMi:()=>b}),s=`
    __typename
    ... on CurrentUser {
        id
        kimlik: identifier
        kanallar: channels { kod: code }
    }
    ... on ErrorResult { errorCode }
`,c=`
    id
    eposta: emailAddress
    ad: firstName
    soyad: lastName
    telefon: phoneNumber
`,l=`
    id
    tamAd: fullName
    firma: company
    adres: streetLine1
    adres2: streetLine2
    il: city
    ilce: province
    postaKodu: postalCode
    telefon: phoneNumber
    ulke: country { kod: code ad: name }
    varsayilanTeslimat: defaultShippingAddress
    varsayilanFatura: defaultBillingAddress
`,u=`
    id
    kod: code
    durum: state
    verildigiAn: orderPlacedAt
    toplamTutar: totalWithTax
    araToplam: subTotalWithTax
    kargoTutari: shippingWithTax
    paraBirimi: currencyCode
    kalemSayisi: totalQuantity
    satirlar: lines { 
    id
    adet: quantity
    satirTutari: linePriceWithTax
    gorsel: featuredAsset { onizleme: preview }
    cesit: productVariant {
        id
        ad: name
        kod: sku
        katalog: product { slug ad: name }
    }
 }
    odemeler: payments { yontem: method tutar: amount durum: state metadata iadeler: refunds { durum: state tutar: total } }
    gonderiler: fulfillments { id durum: state yontem: method takipNumarasi: trackingCode }
`,d=`
    ${u}
    teslimatAdresi: shippingAddress {
        tamAd: fullName
        firma: company
        adres: streetLine1
        adres2: streetLine2
        il: city
        ilce: province
        postaKodu: postalCode
        ulke: country
        ulkeKodu: countryCode
        telefon: phoneNumber
    }
    kargolar: shippingLines { tutar: priceWithTax yontem: shippingMethod { ad: name } }
    notlar: customFields { musteriNotu: customerNote }
`,f=`
    anahtar: key
    ad: name
    esikTutar: minSpend
    indirimYuzdesi: discountPercent
    etkin: enabled
`,ne=`
    pencereGun: windowDays
    harcama: spend
    seviye: level { ${f} }
    ustSeviye: nextLevel { ${f} kalan: remaining }
    seviyeler: levels { ${f} }
`,re=`
    query AktifMusteri {
        hesap: activeCustomer {
            ${c}
        }
    }
`,ie=`
    mutation HesapKayit($girdi: RegisterCustomerInput!) {
        kaydet: registerCustomerAccount(input: $girdi) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,ae=`
    mutation HesapGiris($kullanici: String!, $sifre: String!) {
        oturumAc: login(username: $kullanici, password: $sifre) {
            ${s}
        }
    }
`,oe=`
    mutation HesapDogrula($jeton: String!, $sifre: String) {
        onayla: verifyCustomerAccount(token: $jeton, password: $sifre) {
            ${s}
        }
    }
`,se=`
    mutation HesapDogrulamaYenile($eposta: String!) {
        yenidenGonder: refreshCustomerVerification(emailAddress: $eposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,ce=`
    mutation HesapSifreYenileIste($eposta: String!) {
        iste: requestPasswordReset(emailAddress: $eposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,le=`
    mutation HesapSifreYenile($jeton: String!, $sifre: String!) {
        yenile: resetPassword(token: $jeton, password: $sifre) {
            ${s}
        }
    }
`,ue=`
    mutation HesapProfilGuncelle($girdi: UpdateCustomerInput!) {
        kaydet: updateCustomer(input: $girdi) {
            ${c}
        }
    }
`,p=`
    mutation HesapSifreDegistir($eskiSifre: String!, $yeniSifre: String!) {
        degistir: updateCustomerPassword(currentPassword: $eskiSifre, newPassword: $yeniSifre) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,de=`
    mutation HesapEpostaDegisikligiIste($sifre: String!, $yeniEposta: String!) {
        iste: requestUpdateCustomerEmailAddress(password: $sifre, newEmailAddress: $yeniEposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,fe=`
    mutation HesapEpostaDegisikligiOnayla($jeton: String!) {
        onayla: updateCustomerEmailAddress(token: $jeton) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,pe=`
    query HesapAdresler {
        hesap: activeCustomer {
            adresler: addresses { ${l} }
        }
    }
`,me=`
    mutation HesapAdresEkle($girdi: CreateAddressInput!) {
        ekle: createCustomerAddress(input: $girdi) {
            ${l}
        }
    }
`,he=`
    mutation HesapAdresGuncelle($girdi: UpdateAddressInput!) {
        guncelle: updateCustomerAddress(input: $girdi) {
            ${l}
        }
    }
`,ge=`
    mutation HesapAdresSil($id: ID!) {
        sil: deleteCustomerAddress(id: $id) { __typename }
    }
`,_e=`
    query HesapSiparislerim($secenekler: OrderListOptions) {
        hesap: activeCustomer {
            sonuc: orders(options: $secenekler) {
                toplam: totalItems
                kayitlar: items { ${u} }
            }
        }
    }
`,ve=`
    query HesapSiparis($id: ID!) {
        siparis: order(id: $id) {
            ${d}
        }
    }
`,ye=`
    query HesapSiparisKod($kod: String!) {
        siparis: orderByCode(code: $kod) {
            ${d}
        }
    }
`,be=`
    query HesapSadakat {
        durum: kuantumLoyalty { ${ne} }
        seviyeler: kuantumLoyaltyLevels { ${f} }
    }
`,xe=`
    query HesapMisafirTakip($numara: String!, $eposta: String!) {
        takip: kuantumOrderTracking(code: $numara, email: $eposta) {
            kod: code
            durum: state
            odemeDurumu: paymentStatus
            hazirlikDurumu: fulfillmentStatus
            verildigiAn: placedAt
            toplamTutar: totalWithTax
            paraBirimi: currencyCode
            kargoTutari: shippingWithTax
            kargoYontemi: shippingMethodName
            takipNumarasi: trackingCode
            kargoSirketi: carrier
            satirlar: lines { ad: name adet: quantity gorsel: preview }
        }
    }
`,Se=`
    mutation HesapCikis {
        oturumKapat: logout { __typename }
    }
`,Ce={INVALID_CREDENTIALS_ERROR:`HESAP_GIRIS_BILGISI`,NOT_VERIFIED_ERROR:`HESAP_DOGRULANMAMIS`,PASSWORD_VALIDATION_ERROR:`HESAP_ZAYIF_SIFRE`,MISSING_PASSWORD_ERROR:`HESAP_SIFRE_GEREKLI`,VERIFICATION_TOKEN_INVALID_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,VERIFICATION_TOKEN_EXPIRED_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,PASSWORD_RESET_TOKEN_INVALID_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,PASSWORD_RESET_TOKEN_EXPIRED_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,EMAIL_ADDRESS_CONFLICT_ERROR:`HESAP_EPOSTA_KULLANIMDA`,IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,PASSWORD_ALREADY_SET_ERROR:`HESAP_SIFRE_ZATEN_VAR`,NATIVE_AUTH_STRATEGY_ERROR:`HESAP_GIRIS_KULLANILAMIYOR`,FORBIDDEN:`HESAP_OTURUM_YOK`,UNAUTHORIZED:`HESAP_OTURUM_YOK`,TOO_MANY_REQUESTS:`HESAP_COK_DENEME`,KVKK_CONSENT_REQUIRED:`HESAP_KVKK_GEREKLI`,INTERNAL_SERVER_ERROR:`HESAP_BEKLENMEYEN`,AG:`HESAP_AG`};function m(e){return e?Ce[e]??`HESAP_BEKLENMEYEN`:`HESAP_BEKLENMEYEN`}function h(e,t){if(!e||!e.__typename)return`HESAP_BEKLENMEYEN`;if(!t.includes(e.__typename))return m(e.errorCode)}function g(e){let n=h(e,[`CurrentUser`]);return n?{basarili:!1,kod:n}:!e||!e.id||!e.kimlik?{basarili:!1,kod:`HESAP_BEKLENMEYEN`}:(t(!0),{basarili:!0,veri:{id:e.id,kimlik:e.kimlik,kanallar:e.kanallar??[]}})}function _(e){return i(e)?{basarili:!1,kod:`HESAP_AG`}:e instanceof n?{basarili:!1,kod:m(e.kod)}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}}async function v(e){try{return await e()}catch(e){return _(e)}}function y(e){return{fullName:e.tamAd?.trim(),company:e.firma?.trim(),streetLine1:e.adres?.trim(),streetLine2:e.adres2?.trim(),city:e.il?.trim(),province:e.ilce?.trim(),postalCode:e.postaKodu?.trim(),phoneNumber:e.telefon?.trim(),countryCode:(e.ulkeKodu??`TR`).trim().toUpperCase(),defaultShippingAddress:e.varsayilanTeslimat,defaultBillingAddress:e.varsayilanFatura}}var we=10,Te=50;function Ee(e){let t=e?.adet&&e.adet>0?Math.trunc(e.adet):we,n=e?.atla&&e.atla>0?Math.trunc(e.atla):0,r={take:Math.min(t,Te),skip:n,sort:{orderPlacedAt:`DESC`}},i=e?.baslangicTarihi?.trim();return i&&(r.filter={orderPlacedAt:{after:i}}),r}var De=`ABCDEFGHJKMNPQRSTUVWXYZ23456789`,Oe=5;function b(e,t){let n=e.trim().toUpperCase();if(n.length!==Oe)return!1;for(let e of n)if(!De.includes(e))return!1;let r=t.trim();if(r.length<6||r.includes(` `))return!1;let i=r.indexOf(`@`);if(i<1)return!1;let a=r.slice(i+1);return a.includes(`.`)&&!a.startsWith(`.`)&&!a.endsWith(`.`)&&!r.includes(`@`,i+1)}var x=8,S=72,C=/[A-ZÇĞİÖŞÜ]/,w=/[a-zçğıöşü]/,T=/[0-9]/;function E(e){return e.length<x||e.length>S?!1:C.test(e)&&w.test(e)&&T.test(e)}function D(e){if(!e.metadata||typeof e.metadata!=`object`)return null;let t=e.metadata.public;return t&&typeof t==`object`?t:null}function O(e){let t=e.odemeler??[],n=t.filter(e=>e.durum===`Settled`),r=n.reduce((e,t)=>e+t.tutar,0),i=n.flatMap(e=>e.iadeler??[]).filter(e=>e.durum===`Settled`).reduce((e,t)=>e+t.tutar,0),a=e.durum!==`Cancelled`&&t.some(e=>e.durum===`Authorized`);return i>0?i>=r&&!a?`REFUNDED`:`PARTIALLY_REFUNDED`:e.durum===`Cancelled`?`CANCELLED`:r>0&&r>=e.toplamTutar?`PAID`:e.durum===`AddingItems`||e.durum===`Draft`?`INCOMPLETE`:e.toplamTutar===0&&e.durum!==`ArrangingPayment`?`PAID`:t.some(e=>e.durum===`Authorized`&&D(e)?.method===`cash-on-delivery`)?`PAY_ON_DELIVERY`:e.durum===`ArrangingPayment`&&t.length===0?`INCOMPLETE`:`AWAITING_PAYMENT`}function k(e){return e.durum===`Cancelled`?`WILL_NOT_DELIVER`:e.durum===`Delivered`?`DELIVERED`:e.durum===`Shipped`||e.durum===`PartiallyShipped`||e.durum===`PartiallyDelivered`?`SHIPPED`:`AWAITING_PROCESSING`}function A(e){return{...e,odemeDurumu:O(e),hazirlikDurumu:k(e)}}async function j(){return v(async()=>{let e=await r(re);return e.hesap?(t(!0),{basarili:!0,veri:e.hesap}):(o(),{basarili:!0,veri:null})})}async function M(e,t){return v(async()=>g((await r(ae,{kullanici:e.trim(),sifre:t})).oturumAc))}async function N(e){return v(async()=>{let t=h((await r(ie,{girdi:{emailAddress:e.eposta.trim(),firstName:e.ad.trim(),lastName:e.soyad.trim(),phoneNumber:e.telefon?.trim(),password:e.sifre,kvkkConsent:e.kvkkOnay}})).kaydet,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{kayitAlindi:!0}}})}async function P(e,t){return v(async()=>g((await r(oe,{jeton:e.trim(),sifre:t})).onayla))}async function F(e){return v(async()=>{let t=h((await r(se,{eposta:e.trim()})).yenidenGonder,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function I(e){return v(async()=>{let t=h((await r(ce,{eposta:e.trim()})).iste,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function L(e,t){return v(async()=>g((await r(le,{jeton:e.trim(),sifre:t})).yenile))}async function R(e){return v(async()=>{let t=await r(ue,{girdi:{firstName:e.ad?.trim(),lastName:e.soyad?.trim(),phoneNumber:e.telefon?.trim()}});return t.kaydet?{basarili:!0,veri:t.kaydet}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function z(e,t){return v(async()=>{let n=h((await r(p,{eskiSifre:e,yeniSifre:t})).degistir,[`Success`]);return n?{basarili:!1,kod:n}:{basarili:!0,veri:{degisti:!0}}})}async function B(e,t){return v(async()=>{let n=h((await r(de,{sifre:e,yeniEposta:t.trim()})).iste,[`Success`]);return n?{basarili:!1,kod:n}:{basarili:!0,veri:{gonderildi:!0}}})}async function V(e){return v(async()=>{let t=h((await r(fe,{jeton:e.trim()})).onayla,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{onaylandi:!0}}})}async function H(){try{await r(Se)}catch{}return a(),{basarili:!0,veri:{cikildi:!0}}}async function U(){return v(async()=>{let e=await r(pe);return e.hesap?{basarili:!0,veri:e.hesap.adresler??[]}:(o(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function W(e){return v(async()=>{let t=await r(me,{girdi:y(e)});return t.ekle?{basarili:!0,veri:t.ekle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function G(e){return v(async()=>{let t=await r(he,{girdi:{id:e.id,...y(e)}});return t.guncelle?{basarili:!0,veri:t.guncelle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function K(e){return v(async()=>{let t=h((await r(ge,{id:e.trim()})).sil,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{silindi:!0}}})}async function q(e){return v(async()=>{let t=await r(_e,{secenekler:Ee(e)});return t.hesap?{basarili:!0,veri:{toplam:t.hesap.sonuc.toplam,siparisler:t.hesap.sonuc.kayitlar.map(A)}}:(o(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function ke(e){return v(async()=>{let t=await r(ve,{id:e.trim()});return{basarili:!0,veri:t.siparis?A(t.siparis):null}})}async function J(e){return v(async()=>{let t=await r(ye,{kod:e.trim().toUpperCase()});return{basarili:!0,veri:t.siparis?A(t.siparis):null}})}async function Y(e){return v(async()=>{let t=null,n=0,r=null;for(let i of e.satirlar){let e=await ee(i.cesit.id,i.adet);e.sepet&&(t=e.sepet),e.hata?r||=e.hata:n+=1}return{basarili:!0,veri:{eklenen:n,eklenemeyen:e.satirlar.length-n,mesaj:r,sepet:t}}})}function X(e){return e.etkin===!0&&e.indirimYuzdesi>0?e.indirimYuzdesi:null}function Z(e){return e.some(e=>X(e)!==null)}async function Q(){return v(async()=>{let e=await r(be);return{basarili:!0,veri:{durum:e.durum,seviyeler:e.seviyeler}}})}async function $(e,t){if(!b(e,t))return{basarili:!0,veri:null};try{return{basarili:!0,veri:(await r(xe,{numara:e.trim().toUpperCase(),eposta:t.trim().toLowerCase()})).takip}}catch(e){return e instanceof n&&e.kod===`USER_INPUT_ERROR`?{basarili:!1,kod:`HESAP_COK_DENEME`}:_(e)}}export{J as C,I as S,q as T,Z as _,j as a,E as b,F as c,M as d,te as f,Q as g,R as h,U as i,B as l,$ as m,G as n,H as o,N as p,K as r,P as s,W as t,V as u,X as v,Y as w,L as x,z as y};