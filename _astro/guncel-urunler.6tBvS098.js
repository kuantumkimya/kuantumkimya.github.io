import{t as e}from"./gorsel.BvP_fUxv.js";import{o as t}from"./shop-api.D7dqwhk9.js";import{a as n,i as r,n as i,r as a,t as o}from"./katalog.BYAmIFvf.js";import{r as s}from"./tutar.BYQphF5z.js";var c=50,l=`
    query GuncelUrunler($sluglar: [String!]!, $adet: Int!) {
        products(options: { take: $adet, filter: { slug: { in: $sluglar } } }) {
            items {
                slug name
                featuredAsset { preview name }
                customFields { giftCard }
                variants { id name priceWithTax stockLevel options { name groupId } customFields { compareAtPrice } }
            }
        }
        kuantumSalePrices { productVariantId priceWithTax salePriceWithTax promotionName }
    }
`;async function u(c){let u=[...new Set(c)].slice(0,50);if(u.length===0)return new Map;let d=await t(l,{sluglar:u,adet:u.length}),f=r(d.products.items,d.kuantumSalePrices);return new Map(f.map(t=>[t.slug,{slug:t.slug,ad:t.name,gorsel:a(e(t.featuredAsset),128)??null,hediye:t.customFields.giftCard,cesitler:t.variants.map(e=>({id:e.id,ad:s(e.options)||e.name,fiyat:i(e),eski:o(e),satilir:n(e)}))}]))}export{c as GUNCEL_URUN_SINIRI,u as guncelUrunler};