import"./para.BaacDyZa.js";import{t as e}from"./gorsel.BvP_fUxv.js";import"./kart.CK7ao-zd.js";import{a as t}from"./shop-api.DWCh5yaE.js";function n(e,t){let n=new Map(t.map(e=>[String(e.productVariantId),e]));return e.map(e=>({...e,variants:e.variants.map(e=>{let t=n.get(String(e.id)),r=t&&t.priceWithTax===e.priceWithTax&&t.salePriceWithTax>=0&&t.salePriceWithTax<e.priceWithTax;return{...e,indirim:r?{salePriceWithTax:t.salePriceWithTax,promotionName:t.promotionName}:null}})}))}function r(e){return e.indirim?.salePriceWithTax??e.priceWithTax}function i(e){if(e.indirim)return e.priceWithTax;let t=e.customFields.compareAtPrice;return t&&t>e.priceWithTax?t:null}function a(e){return e.stockLevel!==`OUT_OF_STOCK`}function o(e,t,n=t,r=65){if(e)return`${e.preview}?w=${t}&h=${n}&mode=crop&format=webp&q=${r}`}var s=50,c=`
    query GuncelUrunler($sluglar: [String!]!, $adet: Int!) {
        products(options: { take: $adet, filter: { slug: { in: $sluglar } } }) {
            items {
                slug name
                featuredAsset { preview name }
                customFields { giftCard }
                variants { id name priceWithTax stockLevel options { name } customFields { compareAtPrice } }
            }
        }
        kuantumSalePrices { productVariantId priceWithTax salePriceWithTax promotionName }
    }
`;async function l(s){let l=[...new Set(s)].slice(0,50);if(l.length===0)return new Map;let u=await t(c,{sluglar:l,adet:l.length}),d=n(u.products.items,u.kuantumSalePrices);return new Map(d.map(t=>[t.slug,{slug:t.slug,ad:t.name,gorsel:o(e(t.featuredAsset),128)??null,hediye:t.customFields.giftCard,cesitler:t.variants.map(e=>({id:e.id,ad:e.options.map(e=>e.name).join(`, `)||e.name,fiyat:r(e),eski:i(e),satilir:a(e)}))}]))}export{s as GUNCEL_URUN_SINIRI,l as guncelUrunler};