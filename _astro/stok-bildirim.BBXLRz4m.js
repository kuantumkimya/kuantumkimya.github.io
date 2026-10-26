import{t as e}from"./rolldown-runtime.DK3Fl9T5.js";import{i as t,n,o as r,r as i}from"./shop-api.CZ2H9PS6.js";var a=e({HESAP_EPOSTASI_BELGESI:()=>s,STOK_BILDIRIM_BELGESI:()=>o,hesapEpostasi:()=>f,stokBildirimiYaz:()=>d,stokEpostaGecerliMi:()=>l,stokEpostaTemizle:()=>u}),o=`
    mutation StokBildirimi($girdi: SubscribeStockNotificationInput!) {
        bildirim: subscribeStockNotification(input: $girdi) {
            success
        }
    }
`,s=`
    query StokHesapEpostasi {
        hesap: activeCustomer {
            eposta: emailAddress
        }
    }
`,c=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function l(e){let t=(e??``).trim().toLowerCase();return t.length>0&&t.length<=255&&c.test(t)}function u(e){return(e??``).trim().toLowerCase()}async function d(e,t){let a=(e??``).trim();if(!a)return{basarili:!1,kod:`STOK_BEKLENMEYEN`};let o=u(t);if(!l(o))return{basarili:!1,kod:`STOK_EPOSTA`};try{return(await r(`
    mutation StokBildirimi($girdi: SubscribeStockNotificationInput!) {
        bildirim: subscribeStockNotification(input: $girdi) {
            success
        }
    }
`,{girdi:{productVariantId:a,email:o}})).bildirim?.success?{basarili:!0,veri:{kaydedildi:!0}}:{basarili:!1,kod:`STOK_BEKLENMEYEN`}}catch(e){return i(e)?{basarili:!1,kod:`STOK_AG`}:(e instanceof n,{basarili:!1,kod:`STOK_BEKLENMEYEN`})}}async function f(){if(!t())return null;try{let e=u((await r(`
    query StokHesapEpostasi {
        hesap: activeCustomer {
            eposta: emailAddress
        }
    }
`)).hesap?.eposta??``);return l(e)?e:null}catch{return null}}export{a,u as i,d as n,l as r,f as t};