import{r as e}from"./tutar.BYQphF5z.js";import{t}from"./gorsel.BvP_fUxv.js";import{o as n}from"./shop-api.C8-mau0D.js";import{a as r,i,n as a,r as o,t as s}from"./katalog.BV_3JcP9.js";var c=50,l=`
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
`;async function u(c){let u=[...new Set(c)].slice(0,50);if(u.length===0)return new Map;let d=await n(l,{sluglar:u,adet:u.length}),f=i(d.products.items,d.kuantumSalePrices);return new Map(f.map(n=>[n.slug,{slug:n.slug,ad:n.name,gorsel:o(t(n.featuredAsset),128)??null,hediye:n.customFields.giftCard,cesitler:n.variants.map(t=>({id:t.id,ad:e(t.options)||t.name,fiyat:a(t),eski:s(t),satilir:r(t)}))}]))}export{c as GUNCEL_URUN_SINIRI,u as guncelUrunler};