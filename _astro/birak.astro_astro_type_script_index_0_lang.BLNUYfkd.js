import{o as e}from"./shop-api.pO3wzGkX.js";import{t}from"./sayfa-verisi.DEULxSNS.js";var n=`
    query YorumBirak($token: String!) {
        productReviewOptoutInfo(token: $token) {
            maskedEmail
            active
            locked
            title
        }
    }
`,r=`
    mutation YorumBirak($token: String!, $all: Boolean!) {
        setProductReviewOptout(token: $token, all: $all) {
            maskedEmail
            active
            locked
            title
        }
    }
`;if(typeof document<`u`){let e=()=>{let e=document.querySelector(`[data-yorum-birak]`);e&&e.dataset.birakKuruldu!==`1`&&(e.dataset.birakKuruldu=`1`,i(e))};e(),document.addEventListener(`astro:page-load`,e)}function i(i){let a=i.querySelector(`[data-birak-durum]`),o=t(i,`[data-birak-yazilari]`);if(!o){a&&(a.textContent=a.dataset.hata??``);return}let s=o,c=i.querySelector(`[data-birak-govde]`),l=i.querySelector(`[data-birak-adres]`),u=i.querySelector(`[data-birak-dugme]`),d=new URL(location.href),f=d.searchParams.get(`t`)||d.searchParams.get(`k`)||``;if(f&&(d.searchParams.delete(`t`),d.searchParams.delete(`k`),history.replaceState(null,``,d.pathname+(d.search?d.search:``)+d.hash)),!f){a&&(a.textContent=s.gecersiz);return}p();async function p(){try{let t=(await e(n,{token:f})).productReviewOptoutInfo;if(!t){a&&(a.textContent=s.gecersiz);return}l&&(l.textContent=t.maskedEmail),a&&(a.textContent=t.locked?s.kilitli:t.active?s.tamam:``),c&&!t.locked&&!t.active&&(c.hidden=!1)}catch{a&&(a.textContent=s.hata)}}u?.addEventListener(`click`,async()=>{u.disabled=!0;try{let t=await e(r,{token:f,all:!0});a&&(a.textContent=t.setProductReviewOptout.active?s.tamam:s.hata),c&&(c.hidden=!0)}catch{a&&(a.textContent=s.hata)}finally{u.disabled=!1}})}