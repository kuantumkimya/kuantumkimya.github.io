import{r as e}from"./react.BMKSriit.js";import{o as t}from"./oturum-ipucu.Cyp_gfdD.js";import{n,o as r,r as i}from"./shop-api.BQKtjS4B.js";import{n as a,r as o}from"./oturum.C6BMMomT.js";import{p as ee}from"./sepet.VyYib1EL.js";var te=e({adresEkle:()=>U,adresGuncelle:()=>W,adresSil:()=>G,adreslerGetir:()=>H,aktifMusteri:()=>A,cikis:()=>V,dogrula:()=>N,dogrulamaYenile:()=>P,epostaDegisikligiIste:()=>z,epostaDegisikligiOnayla:()=>B,girisYap:()=>j,hataKodu:()=>p,hazirlikDurumuTuret:()=>O,kayitOl:()=>M,misafirTakip:()=>$,odemeDurumuTuret:()=>D,profilGuncelle:()=>L,sadakatGetir:()=>Q,sadakatIndirimiVar:()=>Z,seviyeIndirimi:()=>X,sifreDegistir:()=>R,sifreGecerliMi:()=>T,sifreYenile:()=>I,sifreYenileIste:()=>F,siparisDurumuEkle:()=>k,siparisGetir:()=>q,siparisGetirKod:()=>J,siparisTekrarla:()=>Y,siparislerim:()=>K,takipGirdisiGecerliMi:()=>y}),s=`
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
`,de=`
    mutation HesapSifreDegistir($eskiSifre: String!, $yeniSifre: String!) {
        degistir: updateCustomerPassword(currentPassword: $eskiSifre, newPassword: $yeniSifre) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,fe=`
    mutation HesapEpostaDegisikligiIste($sifre: String!, $yeniEposta: String!) {
        iste: requestUpdateCustomerEmailAddress(password: $sifre, newEmailAddress: $yeniEposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,pe=`
    mutation HesapEpostaDegisikligiOnayla($jeton: String!) {
        onayla: updateCustomerEmailAddress(token: $jeton) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,me=`
    query HesapAdresler {
        hesap: activeCustomer {
            adresler: addresses { ${l} }
        }
    }
`,he=`
    mutation HesapAdresEkle($girdi: CreateAddressInput!) {
        ekle: createCustomerAddress(input: $girdi) {
            ${l}
        }
    }
`,ge=`
    mutation HesapAdresGuncelle($girdi: UpdateAddressInput!) {
        guncelle: updateCustomerAddress(input: $girdi) {
            ${l}
        }
    }
`,_e=`
    mutation HesapAdresSil($id: ID!) {
        sil: deleteCustomerAddress(id: $id) { __typename }
    }
`,ve=`
    query HesapSiparislerim($secenekler: OrderListOptions) {
        hesap: activeCustomer {
            sonuc: orders(options: $secenekler) {
                toplam: totalItems
                kayitlar: items { ${u} }
            }
        }
    }
`,ye=`
    query HesapSiparis($id: ID!) {
        siparis: order(id: $id) {
            ${d}
        }
    }
`,be=`
    query HesapSiparisKod($kod: String!) {
        siparis: orderByCode(code: $kod) {
            ${d}
        }
    }
`,xe=`
    query HesapSadakat {
        durum: kuantumLoyalty { ${ne} }
        seviyeler: kuantumLoyaltyLevels { ${f} }
    }
`,Se=`
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
`,Ce=`
    mutation HesapCikis {
        oturumKapat: logout { __typename }
    }
`,we={INVALID_CREDENTIALS_ERROR:`HESAP_GIRIS_BILGISI`,NOT_VERIFIED_ERROR:`HESAP_DOGRULANMAMIS`,PASSWORD_VALIDATION_ERROR:`HESAP_ZAYIF_SIFRE`,MISSING_PASSWORD_ERROR:`HESAP_SIFRE_GEREKLI`,VERIFICATION_TOKEN_INVALID_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,VERIFICATION_TOKEN_EXPIRED_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,PASSWORD_RESET_TOKEN_INVALID_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,PASSWORD_RESET_TOKEN_EXPIRED_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,EMAIL_ADDRESS_CONFLICT_ERROR:`HESAP_EPOSTA_KULLANIMDA`,IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,PASSWORD_ALREADY_SET_ERROR:`HESAP_SIFRE_ZATEN_VAR`,NATIVE_AUTH_STRATEGY_ERROR:`HESAP_GIRIS_KULLANILAMIYOR`,FORBIDDEN:`HESAP_OTURUM_YOK`,UNAUTHORIZED:`HESAP_OTURUM_YOK`,TOO_MANY_REQUESTS:`HESAP_COK_DENEME`,KVKK_CONSENT_REQUIRED:`HESAP_KVKK_GEREKLI`,INTERNAL_SERVER_ERROR:`HESAP_BEKLENMEYEN`,AG:`HESAP_AG`};function p(e){return e?we[e]??`HESAP_BEKLENMEYEN`:`HESAP_BEKLENMEYEN`}function m(e,t){if(!e||!e.__typename)return`HESAP_BEKLENMEYEN`;if(!t.includes(e.__typename))return p(e.errorCode)}function h(e){let n=m(e,[`CurrentUser`]);return n?{basarili:!1,kod:n}:!e||!e.id||!e.kimlik?{basarili:!1,kod:`HESAP_BEKLENMEYEN`}:(t(!0),{basarili:!0,veri:{id:e.id,kimlik:e.kimlik,kanallar:e.kanallar??[]}})}function g(e){return i(e)?{basarili:!1,kod:`HESAP_AG`}:e instanceof n?{basarili:!1,kod:p(e.kod)}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}}async function _(e){try{return await e()}catch(e){return g(e)}}function v(e){return{fullName:e.tamAd?.trim(),company:e.firma?.trim(),streetLine1:e.adres?.trim(),streetLine2:e.adres2?.trim(),city:e.il?.trim(),province:e.ilce?.trim(),postalCode:e.postaKodu?.trim(),phoneNumber:e.telefon?.trim(),countryCode:(e.ulkeKodu??`TR`).trim().toUpperCase(),defaultShippingAddress:e.varsayilanTeslimat,defaultBillingAddress:e.varsayilanFatura}}var Te=10,Ee=50;function De(e){let t=e?.adet&&e.adet>0?Math.trunc(e.adet):Te,n=e?.atla&&e.atla>0?Math.trunc(e.atla):0,r={take:Math.min(t,Ee),skip:n,sort:{orderPlacedAt:`DESC`}},i=e?.baslangicTarihi?.trim();return i&&(r.filter={orderPlacedAt:{after:i}}),r}var Oe=`ABCDEFGHJKMNPQRSTUVWXYZ23456789`,ke=5;function y(e,t){let n=e.trim().toUpperCase();if(n.length!==ke)return!1;for(let e of n)if(!Oe.includes(e))return!1;let r=t.trim();if(r.length<6||r.includes(` `))return!1;let i=r.indexOf(`@`);if(i<1)return!1;let a=r.slice(i+1);return a.includes(`.`)&&!a.startsWith(`.`)&&!a.endsWith(`.`)&&!r.includes(`@`,i+1)}var b=8,x=72,S=/[A-ZÇĞİÖŞÜ]/,C=/[a-zçğıöşü]/,w=/[0-9]/;function T(e){return e.length<b||e.length>x?!1:S.test(e)&&C.test(e)&&w.test(e)}function E(e){if(!e.metadata||typeof e.metadata!=`object`)return null;let t=e.metadata.public;return t&&typeof t==`object`?t:null}function D(e){let t=e.odemeler??[],n=t.filter(e=>e.durum===`Settled`),r=n.reduce((e,t)=>e+t.tutar,0),i=n.flatMap(e=>e.iadeler??[]).filter(e=>e.durum===`Settled`).reduce((e,t)=>e+t.tutar,0),a=e.durum!==`Cancelled`&&t.some(e=>e.durum===`Authorized`);return i>0?i>=r&&!a?`REFUNDED`:`PARTIALLY_REFUNDED`:e.durum===`Cancelled`?`CANCELLED`:r>0&&r>=e.toplamTutar?`PAID`:e.durum===`AddingItems`||e.durum===`Draft`?`INCOMPLETE`:e.toplamTutar===0&&e.durum!==`ArrangingPayment`?`PAID`:t.some(e=>e.durum===`Authorized`&&E(e)?.method===`cash-on-delivery`)?`PAY_ON_DELIVERY`:e.durum===`ArrangingPayment`&&t.length===0?`INCOMPLETE`:`AWAITING_PAYMENT`}function O(e){return e.durum===`Cancelled`?`WILL_NOT_DELIVER`:e.durum===`Delivered`?`DELIVERED`:e.durum===`Shipped`||e.durum===`PartiallyShipped`||e.durum===`PartiallyDelivered`?`SHIPPED`:`AWAITING_PROCESSING`}function k(e){return{...e,odemeDurumu:D(e),hazirlikDurumu:O(e)}}async function A(){return _(async()=>{let e=await r(re);return e.hesap?(t(!0),{basarili:!0,veri:e.hesap}):(o(),{basarili:!0,veri:null})})}async function j(e,t){return _(async()=>h((await r(ae,{kullanici:e.trim(),sifre:t})).oturumAc))}async function M(e){return _(async()=>{let t=m((await r(ie,{girdi:{emailAddress:e.eposta.trim(),firstName:e.ad.trim(),lastName:e.soyad.trim(),phoneNumber:e.telefon?.trim(),password:e.sifre,kvkkConsent:e.kvkkOnay}})).kaydet,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{kayitAlindi:!0}}})}async function N(e,t){return _(async()=>h((await r(oe,{jeton:e.trim(),sifre:t})).onayla))}async function P(e){return _(async()=>{let t=m((await r(se,{eposta:e.trim()})).yenidenGonder,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function F(e){return _(async()=>{let t=m((await r(ce,{eposta:e.trim()})).iste,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function I(e,t){return _(async()=>h((await r(le,{jeton:e.trim(),sifre:t})).yenile))}async function L(e){return _(async()=>{let t=await r(ue,{girdi:{firstName:e.ad?.trim(),lastName:e.soyad?.trim(),phoneNumber:e.telefon?.trim()}});return t.kaydet?{basarili:!0,veri:t.kaydet}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function R(e,t){return _(async()=>{let n=m((await r(de,{eskiSifre:e,yeniSifre:t})).degistir,[`Success`]);return n?{basarili:!1,kod:n}:{basarili:!0,veri:{degisti:!0}}})}async function z(e,t){return _(async()=>{let n=m((await r(fe,{sifre:e,yeniEposta:t.trim()})).iste,[`Success`]);return n?{basarili:!1,kod:n}:{basarili:!0,veri:{gonderildi:!0}}})}async function B(e){return _(async()=>{let t=m((await r(pe,{jeton:e.trim()})).onayla,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{onaylandi:!0}}})}async function V(){try{await r(Ce)}catch{}return a(),{basarili:!0,veri:{cikildi:!0}}}async function H(){return _(async()=>{let e=await r(me);return e.hesap?{basarili:!0,veri:e.hesap.adresler??[]}:(o(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function U(e){return _(async()=>{let t=await r(he,{girdi:v(e)});return t.ekle?{basarili:!0,veri:t.ekle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function W(e){return _(async()=>{let t=await r(ge,{girdi:{id:e.id,...v(e)}});return t.guncelle?{basarili:!0,veri:t.guncelle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function G(e){return _(async()=>{let t=m((await r(_e,{id:e.trim()})).sil,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{silindi:!0}}})}async function K(e){return _(async()=>{let t=await r(ve,{secenekler:De(e)});return t.hesap?{basarili:!0,veri:{toplam:t.hesap.sonuc.toplam,siparisler:t.hesap.sonuc.kayitlar.map(k)}}:(o(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function q(e){return _(async()=>{let t=await r(ye,{id:e.trim()});return{basarili:!0,veri:t.siparis?k(t.siparis):null}})}async function J(e){return _(async()=>{let t=await r(be,{kod:e.trim().toUpperCase()});return{basarili:!0,veri:t.siparis?k(t.siparis):null}})}async function Y(e){return _(async()=>{let t=null,n=0,r=null;for(let i of e.satirlar){let e=await ee(i.cesit.id,i.adet);e.sepet&&(t=e.sepet),e.hata?r||=e.hata:n+=1}return{basarili:!0,veri:{eklenen:n,eklenemeyen:e.satirlar.length-n,mesaj:r,sepet:t}}})}function X(e){return e.etkin===!0&&e.indirimYuzdesi>0?e.indirimYuzdesi:null}function Z(e){return e.some(e=>X(e)!==null)}async function Q(){return _(async()=>{let e=await r(xe);return{basarili:!0,veri:{durum:e.durum,seviyeler:e.seviyeler}}})}async function $(e,t){if(!y(e,t))return{basarili:!0,veri:null};try{return{basarili:!0,veri:(await r(Se,{numara:e.trim().toUpperCase(),eposta:t.trim().toLowerCase()})).takip}}catch(e){return e instanceof n&&e.kod===`USER_INPUT_ERROR`?{basarili:!1,kod:`HESAP_COK_DENEME`}:g(e)}}export{q as C,K as E,F as S,Y as T,Z as _,A as a,T as b,P as c,j as d,te as f,Q as g,L as h,H as i,z as l,$ as m,W as n,V as o,M as p,G as r,N as s,U as t,B as u,X as v,J as w,I as x,R as y};