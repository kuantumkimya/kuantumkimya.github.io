import{n as e,r as t,s as n}from"./shop-api.DWbfDPRj.js";import{n as r,r as i}from"./oturum.CQcJt1e2.js";import{p as a}from"./sepet.CMfowcUo.js";var o=`
    __typename
    ... on CurrentUser {
        id
        kimlik: identifier
        kanallar: channels { kod: code }
    }
    ... on ErrorResult { errorCode }
`,s=`
    id
    eposta: emailAddress
    ad: firstName
    soyad: lastName
    telefon: phoneNumber
`,c=`
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
`,l=`
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
`,u=`
    ${l}
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
`,d=`
    anahtar: key
    ad: name
    esikTutar: minSpend
    indirimYuzdesi: discountPercent
    etkin: enabled
`,f=`
    pencereGun: windowDays
    harcama: spend
    seviye: level { ${d} }
    ustSeviye: nextLevel { ${d} kalan: remaining }
    seviyeler: levels { ${d} }
`,p=`
    query AktifMusteri {
        hesap: activeCustomer {
            ${s}
        }
    }
`,m=`
    mutation HesapKayit($girdi: RegisterCustomerInput!) {
        kaydet: registerCustomerAccount(input: $girdi) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,h=`
    mutation HesapGiris($kullanici: String!, $sifre: String!) {
        oturumAc: login(username: $kullanici, password: $sifre) {
            ${o}
        }
    }
`,g=`
    mutation HesapDogrula($jeton: String!, $sifre: String) {
        onayla: verifyCustomerAccount(token: $jeton, password: $sifre) {
            ${o}
        }
    }
`,ee=`
    mutation HesapDogrulamaYenile($eposta: String!) {
        yenidenGonder: refreshCustomerVerification(emailAddress: $eposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,te=`
    mutation HesapSifreYenileIste($eposta: String!) {
        iste: requestPasswordReset(emailAddress: $eposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,ne=`
    mutation HesapSifreYenile($jeton: String!, $sifre: String!) {
        yenile: resetPassword(token: $jeton, password: $sifre) {
            ${o}
        }
    }
`,_=`
    mutation HesapProfilGuncelle($girdi: UpdateCustomerInput!) {
        kaydet: updateCustomer(input: $girdi) {
            ${s}
        }
    }
`,v=`
    mutation HesapSifreDegistir($eskiSifre: String!, $yeniSifre: String!) {
        degistir: updateCustomerPassword(currentPassword: $eskiSifre, newPassword: $yeniSifre) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,y=`
    mutation HesapEpostaDegisikligiIste($sifre: String!, $yeniEposta: String!) {
        iste: requestUpdateCustomerEmailAddress(password: $sifre, newEmailAddress: $yeniEposta) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,b=`
    mutation HesapEpostaDegisikligiOnayla($jeton: String!) {
        onayla: updateCustomerEmailAddress(token: $jeton) {
            __typename
            ... on ErrorResult { errorCode }
        }
    }
`,x=`
    query HesapAdresler {
        hesap: activeCustomer {
            adresler: addresses { ${c} }
        }
    }
`,S=`
    mutation HesapAdresEkle($girdi: CreateAddressInput!) {
        ekle: createCustomerAddress(input: $girdi) {
            ${c}
        }
    }
`,C=`
    mutation HesapAdresGuncelle($girdi: UpdateAddressInput!) {
        guncelle: updateCustomerAddress(input: $girdi) {
            ${c}
        }
    }
`,w=`
    mutation HesapAdresSil($id: ID!) {
        sil: deleteCustomerAddress(id: $id) { __typename }
    }
`,T=`
    query HesapSiparislerim($secenekler: OrderListOptions) {
        hesap: activeCustomer {
            sonuc: orders(options: $secenekler) {
                toplam: totalItems
                kayitlar: items { ${l} }
            }
        }
    }
`,E=`
    query HesapSiparisKod($kod: String!) {
        siparis: orderByCode(code: $kod) {
            ${u}
        }
    }
`,D=`
    query HesapSadakat {
        durum: kuantumLoyalty { ${f} }
        seviyeler: kuantumLoyaltyLevels { ${d} }
    }
`,O=`
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
`,k=`
    mutation HesapCikis {
        oturumKapat: logout { __typename }
    }
`,A={INVALID_CREDENTIALS_ERROR:`HESAP_GIRIS_BILGISI`,NOT_VERIFIED_ERROR:`HESAP_DOGRULANMAMIS`,PASSWORD_VALIDATION_ERROR:`HESAP_ZAYIF_SIFRE`,MISSING_PASSWORD_ERROR:`HESAP_SIFRE_GEREKLI`,VERIFICATION_TOKEN_INVALID_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,VERIFICATION_TOKEN_EXPIRED_ERROR:`HESAP_DOGRULAMA_GECERSIZ`,PASSWORD_RESET_TOKEN_INVALID_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,PASSWORD_RESET_TOKEN_EXPIRED_ERROR:`HESAP_SIFRE_BAGLANTISI_GECERSIZ`,EMAIL_ADDRESS_CONFLICT_ERROR:`HESAP_EPOSTA_KULLANIMDA`,IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR:`HESAP_EPOSTA_BAGLANTISI_GECERSIZ`,PASSWORD_ALREADY_SET_ERROR:`HESAP_SIFRE_ZATEN_VAR`,NATIVE_AUTH_STRATEGY_ERROR:`HESAP_GIRIS_KULLANILAMIYOR`,FORBIDDEN:`HESAP_OTURUM_YOK`,UNAUTHORIZED:`HESAP_OTURUM_YOK`,TOO_MANY_REQUESTS:`HESAP_COK_DENEME`,INTERNAL_SERVER_ERROR:`HESAP_BEKLENMEYEN`,AG:`HESAP_AG`};function j(e){return e?A[e]??`HESAP_BEKLENMEYEN`:`HESAP_BEKLENMEYEN`}function M(e,t){if(!e||!e.__typename)return`HESAP_BEKLENMEYEN`;if(!t.includes(e.__typename))return j(e.errorCode)}function N(e){let t=M(e,[`CurrentUser`]);return t?{basarili:!1,kod:t}:!e||!e.id||!e.kimlik?{basarili:!1,kod:`HESAP_BEKLENMEYEN`}:{basarili:!0,veri:{id:e.id,kimlik:e.kimlik,kanallar:e.kanallar??[]}}}function P(n){return t(n)?{basarili:!1,kod:`HESAP_AG`}:n instanceof e?{basarili:!1,kod:j(n.kod)}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}}async function F(e){try{return await e()}catch(e){return P(e)}}function I(e){return{fullName:e.tamAd?.trim(),company:e.firma?.trim(),streetLine1:e.adres?.trim(),streetLine2:e.adres2?.trim(),city:e.il?.trim(),province:e.ilce?.trim(),postalCode:e.postaKodu?.trim(),phoneNumber:e.telefon?.trim(),countryCode:(e.ulkeKodu??`TR`).trim().toUpperCase(),defaultShippingAddress:e.varsayilanTeslimat,defaultBillingAddress:e.varsayilanFatura}}var L=10,R=50;function z(e){let t=e?.adet&&e.adet>0?Math.trunc(e.adet):L,n=e?.atla&&e.atla>0?Math.trunc(e.atla):0,r={take:Math.min(t,R),skip:n,sort:{orderPlacedAt:`DESC`}},i=e?.baslangicTarihi?.trim();return i&&(r.filter={orderPlacedAt:{after:i}}),r}var B=`ABCDEFGHJKMNPQRSTUVWXYZ23456789`,V=5;function H(e,t){let n=e.trim().toUpperCase();if(n.length!==V)return!1;for(let e of n)if(!B.includes(e))return!1;let r=t.trim();if(r.length<6||r.includes(` `))return!1;let i=r.indexOf(`@`);if(i<1)return!1;let a=r.slice(i+1);return a.includes(`.`)&&!a.startsWith(`.`)&&!a.endsWith(`.`)&&!r.includes(`@`,i+1)}var U=8,W=72,re=/[A-ZÇĞİÖŞÜ]/,G=/[a-zçğıöşü]/,K=/[0-9]/;function q(e){return e.length<U||e.length>W?!1:re.test(e)&&G.test(e)&&K.test(e)}function J(e){if(!e.metadata||typeof e.metadata!=`object`)return null;let t=e.metadata.public;return t&&typeof t==`object`?t:null}function Y(e){let t=e.odemeler??[],n=t.filter(e=>e.durum===`Settled`),r=n.reduce((e,t)=>e+t.tutar,0),i=n.flatMap(e=>e.iadeler??[]).filter(e=>e.durum===`Settled`).reduce((e,t)=>e+t.tutar,0),a=e.durum!==`Cancelled`&&t.some(e=>e.durum===`Authorized`);return i>0?i>=r&&!a?`REFUNDED`:`PARTIALLY_REFUNDED`:e.durum===`Cancelled`?`CANCELLED`:r>0&&r>=e.toplamTutar?`PAID`:e.durum===`AddingItems`||e.durum===`Draft`?`INCOMPLETE`:e.toplamTutar===0&&e.durum!==`ArrangingPayment`?`PAID`:t.some(e=>e.durum===`Authorized`&&J(e)?.method===`cash-on-delivery`)?`PAY_ON_DELIVERY`:e.durum===`ArrangingPayment`&&t.length===0?`INCOMPLETE`:`AWAITING_PAYMENT`}function X(e){return e.durum===`Cancelled`?`WILL_NOT_DELIVER`:e.durum===`Delivered`?`DELIVERED`:e.durum===`Shipped`||e.durum===`PartiallyShipped`||e.durum===`PartiallyDelivered`?`SHIPPED`:`AWAITING_PROCESSING`}function Z(e){return{...e,odemeDurumu:Y(e),hazirlikDurumu:X(e)}}async function ie(){return F(async()=>{let e=await n(p);return e.hesap?{basarili:!0,veri:e.hesap}:(i(),{basarili:!0,veri:null})})}async function ae(e,t){return F(async()=>N((await n(h,{kullanici:e.trim(),sifre:t})).oturumAc))}async function oe(e){return F(async()=>{let t=M((await n(m,{girdi:{emailAddress:e.eposta.trim(),firstName:e.ad.trim(),lastName:e.soyad.trim(),phoneNumber:e.telefon?.trim(),password:e.sifre}})).kaydet,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{kayitAlindi:!0}}})}async function se(e,t){return F(async()=>N((await n(g,{jeton:e.trim(),sifre:t})).onayla))}async function ce(e){return F(async()=>{let t=M((await n(ee,{eposta:e.trim()})).yenidenGonder,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function le(e){return F(async()=>{let t=M((await n(te,{eposta:e.trim()})).iste,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{gonderildi:!0}}})}async function ue(e,t){return F(async()=>N((await n(ne,{jeton:e.trim(),sifre:t})).yenile))}async function de(e){return F(async()=>{let t=await n(_,{girdi:{firstName:e.ad?.trim(),lastName:e.soyad?.trim(),phoneNumber:e.telefon?.trim()}});return t.kaydet?{basarili:!0,veri:t.kaydet}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function fe(e,t){return F(async()=>{let r=M((await n(v,{eskiSifre:e,yeniSifre:t})).degistir,[`Success`]);return r?{basarili:!1,kod:r}:{basarili:!0,veri:{degisti:!0}}})}async function pe(e,t){return F(async()=>{let r=M((await n(y,{sifre:e,yeniEposta:t.trim()})).iste,[`Success`]);return r?{basarili:!1,kod:r}:{basarili:!0,veri:{gonderildi:!0}}})}async function me(e){return F(async()=>{let t=M((await n(b,{jeton:e.trim()})).onayla,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{onaylandi:!0}}})}async function Q(){try{await n(k)}catch{}return r(),{basarili:!0,veri:{cikildi:!0}}}async function he(){return F(async()=>{let e=await n(x);return e.hesap?{basarili:!0,veri:e.hesap.adresler??[]}:(i(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function ge(e){return F(async()=>{let t=await n(S,{girdi:I(e)});return t.ekle?{basarili:!0,veri:t.ekle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function _e(e){return F(async()=>{let t=await n(C,{girdi:{id:e.id,...I(e)}});return t.guncelle?{basarili:!0,veri:t.guncelle}:{basarili:!1,kod:`HESAP_BEKLENMEYEN`}})}async function ve(e){return F(async()=>{let t=M((await n(w,{id:e.trim()})).sil,[`Success`]);return t?{basarili:!1,kod:t}:{basarili:!0,veri:{silindi:!0}}})}async function ye(e){return F(async()=>{let t=await n(T,{secenekler:z(e)});return t.hesap?{basarili:!0,veri:{toplam:t.hesap.sonuc.toplam,siparisler:t.hesap.sonuc.kayitlar.map(Z)}}:(i(),{basarili:!1,kod:`HESAP_OTURUM_YOK`})})}async function be(e){return F(async()=>{let t=await n(E,{kod:e.trim().toUpperCase()});return{basarili:!0,veri:t.siparis?Z(t.siparis):null}})}async function xe(e){return F(async()=>{let t=null,n=0,r=null;for(let i of e.satirlar){let e=await a(i.cesit.id,i.adet);e.sepet&&(t=e.sepet),e.hata?r||=e.hata:n+=1}return{basarili:!0,veri:{eklenen:n,eklenemeyen:e.satirlar.length-n,mesaj:r,sepet:t}}})}function $(e){return e.etkin===!0&&e.indirimYuzdesi>0?e.indirimYuzdesi:null}function Se(e){return e.some(e=>$(e)!==null)}async function Ce(){return F(async()=>{let e=await n(D);return{basarili:!0,veri:{durum:e.durum,seviyeler:e.seviyeler}}})}async function we(t,r){if(!H(t,r))return{basarili:!0,veri:null};try{return{basarili:!0,veri:(await n(O,{numara:t.trim().toUpperCase(),eposta:r.trim().toLowerCase()})).takip}}catch(t){return t instanceof e&&t.kod===`USER_INPUT_ERROR`?{basarili:!1,kod:`HESAP_COK_DENEME`}:P(t)}}export{xe as C,be as S,$ as _,ie as a,ue as b,ce as c,ae as d,oe as f,Se as g,Ce as h,he as i,pe as l,de as m,_e as n,Q as o,we as p,ve as r,se as s,ge as t,me as u,fe as v,ye as w,le as x,q as y};