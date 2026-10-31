import{o as e}from"./shop-api.pO3wzGkX.js";var t=`
    query YorumBirak($token: String!) {
        productReviewOptoutInfo(token: $token) {
            maskedEmail
            active
            locked
            title
        }
    }
`,n=`
    mutation YorumBirak($token: String!, $all: Boolean!) {
        setProductReviewOptout(token: $token, all: $all) {
            maskedEmail
            active
            locked
            title
        }
    }
`,r=document.querySelector(`[data-yorum-birak]`);r&&i(r);function i(r){let i=JSON.parse(r.querySelector(`[data-birak-yazilari]`)?.textContent??`{}`),a=r.querySelector(`[data-birak-durum]`),o=r.querySelector(`[data-birak-govde]`),s=r.querySelector(`[data-birak-adres]`),c=r.querySelector(`[data-birak-dugme]`),l=new URL(location.href),u=l.searchParams.get(`t`)||l.searchParams.get(`k`)||``;if(u&&(l.searchParams.delete(`t`),l.searchParams.delete(`k`),history.replaceState(null,``,l.pathname+(l.search?l.search:``)+l.hash)),!u){a&&(a.textContent=i.gecersiz);return}d();async function d(){try{let n=(await e(t,{token:u})).productReviewOptoutInfo;if(!n){a&&(a.textContent=i.gecersiz);return}s&&(s.textContent=n.maskedEmail),a&&(a.textContent=n.locked?i.kilitli:n.active?i.tamam:``),o&&!n.locked&&!n.active&&(o.hidden=!1)}catch{a&&(a.textContent=i.hata)}}c?.addEventListener(`click`,async()=>{c.disabled=!0;try{let t=await e(n,{token:u,all:!0});a&&(a.textContent=t.setProductReviewOptout.active?i.tamam:i.hata),o&&(o.hidden=!0)}catch{a&&(a.textContent=i.hata)}finally{c.disabled=!1}})}