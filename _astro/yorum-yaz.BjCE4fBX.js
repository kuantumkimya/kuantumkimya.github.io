import{i as e,n as t,o as n,r}from"./shop-api.pO3wzGkX.js";var i={puanEnAz:1,puanEnCok:5,metinEnAz:10,metinEnCok:2e3,ozetEnCok:120,oranEnAz:.1,oranEnCok:50,demlemeEnAz:0,demlemeEnCok:365,bazVgEnAz:0,bazVgEnCok:100},a={photoMaxBytes:5242880,photoBodyLimit:102400},o=`
    query YorumAyarlari($id: ID!) {
        urun: product(id: $id) {
            reviewSettings {
                photoLimit
                photoMaxBytes
                photoBodyLimit
            }
        }
    }
`,s=`
    mutation YorumGonder($girdi: SubmitProductReviewInput!) {
        yorum: submitProductReview(input: $girdi) {
            id
            durum: state
            puan: rating
        }
    }
`,c=`
    query YorumYazilabilir($id: ID!) {
        urun: product(id: $id) {
            canReview
        }
    }
`;function l(e){let t=Number(e.puan);if(!Number.isInteger(t)||t<i.puanEnAz||t>i.puanEnCok)return`YORUM_PUAN`;let n=(e.metin??``).trim();if(n.length<i.metinEnAz||n.length>i.metinEnCok)return`YORUM_METIN`;if((e.ozet??``).trim().length>i.ozetEnCok)return`YORUM_OZET`;if(e.oran!=null){let t=Number(e.oran);if(!Number.isFinite(t)||t<=0||t>i.oranEnCok)return`YORUM_KULLANIM`}if(e.demlemeGun!=null){let t=Number(e.demlemeGun);if(!Number.isInteger(t)||t<i.demlemeEnAz||t>i.demlemeEnCok)return`YORUM_KULLANIM`}if(e.cihaz!=null&&String(e.cihaz).trim()!==``){let t=String(e.cihaz).trim().toUpperCase();if(t!==`MTL`&&t!==`DL`)return`YORUM_KULLANIM`}if(e.bazVg!=null){let t=Number(e.bazVg);if(!Number.isInteger(t)||t<i.bazVgEnAz||t>i.bazVgEnCok)return`YORUM_KULLANIM`}if(e.misafir){let t=(e.misafirAd??``).trim(),n=(e.misafirEposta??``).trim();if(t.length<2||t.length>80||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||!(e.siparisNo??``).trim())return`YORUM_MISAFIR`}return null}function u(e){let t={productId:e.urunId.trim(),rating:Number(e.puan),body:(e.metin??``).trim()},n=(e.ozet??``).trim();return n&&(t.summary=n),e.oran!=null&&Number.isFinite(Number(e.oran))&&(t.usageRatio=Number(e.oran)),e.demlemeGun!=null&&String(e.demlemeGun).trim()!==``&&(t.usageSteepDays=Number(e.demlemeGun)),e.cihaz!=null&&String(e.cihaz).trim()!==``&&(t.usageDevice=String(e.cihaz).trim().toUpperCase()),e.bazVg!=null&&String(e.bazVg).trim()!==``&&(t.usageBaseVg=Number(e.bazVg)),e.misafir&&(t.guestName=(e.misafirAd??``).trim(),t.guestEmail=(e.misafirEposta??``).trim(),t.orderNumber=(e.siparisNo??``).trim()),e.clientReviewId&&(t.clientReviewId=e.clientReviewId),e.photos?.length&&(t.photos=e.photos),t}async function d(i){let a=l(i);if(a)return{basarili:!1,kod:a};if(!e()&&!i.misafir)return{basarili:!1,kod:`YORUM_GIRIS`};try{let e=await n(s,{girdi:u(i)});return e.yorum?{basarili:!0,veri:{gonderildi:!0,yorum:e.yorum}}:{basarili:!1,kod:`YORUM_BEKLENMEYEN`}}catch(e){if(r(e))return{basarili:!1,kod:`YORUM_AG`};if(e instanceof t){if(e.kod===`FORBIDDEN`)return{basarili:!1,kod:i.misafir?`YORUM_MISAFIR`:`YORUM_GIRIS`};if(e.kod===`USER_INPUT_ERROR`){let e=await f(i.urunId);return e.basarili&&!e.veri?{basarili:!1,kod:`YORUM_TESLIM`}:{basarili:!1,kod:`YORUM_BEKLENMEYEN`}}}return{basarili:!1,kod:`YORUM_BEKLENMEYEN`}}}async function f(e){let t=(e??``).trim();if(!t)return{basarili:!1,kod:`YORUM_BEKLENMEYEN`};try{return{basarili:!0,veri:!!(await n(c,{id:t})).urun?.canReview}}catch(e){return r(e)?{basarili:!1,kod:`YORUM_AG`}:{basarili:!1,kod:`YORUM_BEKLENMEYEN`}}}var p=`
    query YorumDaveti($token: String!) {
        productReviewInvite(token: $token) {
            orderNumber
            customerFirstName
            shippedAt
            submissionsOpen
            guestReviewsEnabled
            photosEnabled
            photoLimit
            alreadyReviewed
            products {
                productId
                name
                slug
                image
                reviewId
                reviewed
            }
        }
    }
`,m=`
    mutation YorumGonder($girdi: SubmitProductReviewInput!) {
        submitProductReview(input: $girdi) {
            id
            state
        }
    }
`;if(typeof document<`u`){let e=document.querySelector(`[data-yorum-sayfa]`);e&&h(e)}function h(e){let t=JSON.parse(e.querySelector(`[data-yorum-yazilari]`)?.textContent??`{}`),r=e.querySelector(`[data-yorum-durum]`),i=e.querySelector(`[data-yorum-baslik]`),a=e.querySelector(`[data-yorum-siparis]`),o=e.querySelector(`[data-yorum-kargo]`),s=e.querySelector(`[data-yorum-urunler]`),c=new URL(location.href),l=c.searchParams.get(`d`)||c.searchParams.get(`t`)||``;l&&(c.searchParams.delete(`d`),c.searchParams.delete(`t`),history.replaceState(null,``,c.pathname+(c.search?c.search:``)+c.hash));let u=e=>{r&&(r.textContent=e)};if(!l){u(t.gecersiz);return}d();async function d(){try{let e=(await n(p,{token:l})).productReviewInvite;if(!e){u(t.gecersiz);return}if(a&&(a.textContent=`${t.siparis} #${e.orderNumber}`),o&&(o.textContent=`${t.kargo} ${e.shippedAt?g(e.shippedAt):`-`}`),i&&(i.hidden=!1),!e.submissionsOpen){u(t.kapali);return}u(``);let r=e.photosEnabled&&e.products.length>0?D(e.products[0].productId):Promise.resolve(E());s&&s.replaceChildren(...e.products.map(n=>v(n,e,t,l,r)))}catch{u(t.hata)}}}function g(e){let t=new Date(e);return Number.isNaN(t.getTime())?`-`:new Intl.DateTimeFormat(`tr-TR`,{day:`numeric`,month:`long`,year:`numeric`}).format(t)}function _(e,t){let n=String(e??``),r=String(t);return n.includes(`{sayi}`)?n.replace(/\{sayi\}/g,r):n.replace(/\b\d+\b(?=\s*fotoğraf)/i,r)}function v(e,t,r,i,a){let o=document.createElement(`article`);o.className=`yorum-urun-karti`;let s=document.createElement(`h3`);if(s.textContent=e.name,o.append(s),e.reviewed){let e=document.createElement(`p`);return e.textContent=r.degerlendirildi,o.append(e),o}let c=document.createElement(`div`);c.className=`yorum-yildizlar`,c.setAttribute(`role`,`radiogroup`),c.setAttribute(`aria-label`,r.puan);for(let t of r.yildizlar){let n=document.createElement(`input`);n.type=`radio`,n.name=`puan-${e.productId}`,n.id=`puan-${e.productId}-${t.puan}`,n.value=String(t.puan),n.checked=t.puan===5;let r=document.createElement(`label`);r.htmlFor=n.id,r.textContent=`★`,r.title=t.ad,c.append(n,r)}o.append(c);let l=y(`text`,r.ozet,`ozet-${e.productId}`),u=y(`textarea`,r.metin,`metin-${e.productId}`);o.append(l.kap,u.kap);let d=null;if(t.photosEnabled){let n=y(`file`,r.foto,`foto-${e.productId}`);d=n.girdi,d.accept=`image/jpeg,image/png,image/webp`,d.multiple=!0;let i=document.createElement(`p`);i.textContent=_(r.fotoNot,t.photoLimit),n.kap.append(i),o.append(n.kap)}let f=document.createElement(`p`);f.setAttribute(`role`,`status`);let p=document.createElement(`button`);return p.type=`button`,p.className=`dugme ana`,p.textContent=r.gonder,p.addEventListener(`click`,async()=>{let h=c.querySelector(`input:checked`),g=u.girdi.value.trim();if(!h||g.length<10)f.textContent=r.hata;else{p.disabled=!0,f.textContent=r.yukleniyor;try{let c=[];if(d?.files?.length){let e=await a,n=await A(Array.from(d.files),e,t.photoLimit);if(n.hata){f.textContent=r.hata;return}for(let e of n.dataUrlListesi)c.push({dataUrl:e})}await n(m,{girdi:{productId:e.productId,inviteToken:i,rating:Number(h.value),body:g,summary:l.girdi.value.trim()||null,clientReviewId:b(),photos:c.length?c:null}}),o.replaceChildren(s);let u=document.createElement(`p`);if(u.textContent=r.basarili,o.append(u),document.querySelectorAll(`.yorum-urun-karti [role="status"]`).length===0){let e=document.querySelector(`[data-yorum-durum]`);e&&(e.textContent=r.basarili)}}catch{f.textContent=r.hata}finally{p.disabled=!1}}}),o.append(f,p),o}function y(e,t,n){let r=document.createElement(`div`);r.className=`yorum-alan`;let i=document.createElement(`label`);i.htmlFor=n,i.textContent=t;let a=document.createElement(e===`textarea`?`textarea`:`input`);return e===`file`?a.type=`file`:e!==`textarea`&&(a.type=`text`),a.id=n,e===`textarea`?(a.rows=5,a.maxLength=2e3,a.minLength=10):e===`text`&&(a.maxLength=120),r.append(i,a),{kap:r,girdi:a}}function b(){return crypto.randomUUID?crypto.randomUUID():`y-${Date.now()}-${Math.random().toString(16).slice(2)}`}var x=1600,S=.82,C=4096,w=16;function T(e,t){let n=Number(e);return Number.isFinite(n)&&n>0?Math.floor(n):t}function E(e){return{photoMaxBytes:T(e?.photoMaxBytes,a.photoMaxBytes),photoBodyLimit:T(e?.photoBodyLimit,a.photoBodyLimit)}}async function D(e){if(!e)return E();try{return E((await n(o,{id:e})).urun?.reviewSettings)}catch{return E()}}function O(e){return`data:${e.type||`application/octet-stream`};base64,`.length+Math.ceil(e.size/3)*4}function k(e,t){return e.some(e=>e.size>t.photoMaxBytes)?!0:e.reduce((e,t)=>e+O(t)+w,0)+C>t.photoBodyLimit}async function A(e,t,n=1/0){let r=Number.isFinite(n)?Math.max(0,Math.floor(n)):e.length,i=e.slice(0,r);if(i.some(e=>e.size>t.photoMaxBytes))return{dataUrlListesi:[],toplamBoy:0,hata:`foto-boyut`};let a=[],o=0;for(let e of i){let n=await N(e);if(o+=n.length+w,o+C>t.photoBodyLimit)return{dataUrlListesi:[],toplamBoy:o,hata:`govde-boyut`};a.push(n)}return{dataUrlListesi:a,toplamBoy:o,hata:null}}async function j(e){if(typeof createImageBitmap==`function`)try{let t=await createImageBitmap(e,{imageOrientation:`from-image`});return{kaynak:t,genislik:t.width,yukseklik:t.height,bitti:()=>t.close()}}catch{}let t=URL.createObjectURL(e);try{let e=new Image;return await new Promise((n,r)=>{e.onload=()=>n(void 0),e.onerror=()=>r(Error(`görsel çözülemedi`)),e.src=t}),{kaynak:e,genislik:e.naturalWidth,yukseklik:e.naturalHeight,bitti:()=>URL.revokeObjectURL(t)}}catch{return URL.revokeObjectURL(t),null}}async function M(e){let t=await j(e);if(!t)return null;try{let e=Math.min(1,x/Math.max(t.genislik,t.yukseklik)),n=Math.max(1,Math.round(t.genislik*e)),r=Math.max(1,Math.round(t.yukseklik*e)),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)return null;a.drawImage(t.kaynak,0,0,n,r);let o=i.toDataURL(`image/webp`,S);if(o.startsWith(`data:image/webp`))return o;a.fillStyle=`#ffffff`,a.fillRect(0,0,n,r),a.drawImage(t.kaynak,0,0,n,r);let s=i.toDataURL(`image/jpeg`,S);return s.startsWith(`data:image/`)?s:null}finally{t.bitti()}}async function N(e){let t=await M(e).catch(()=>null);return t&&t.length<O(e)?t:P(e)}function P(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result??``)),r.onerror=()=>n(r.error),r.readAsDataURL(e)})}export{d as a,l as i,E as n,f as o,D as r,k as t};