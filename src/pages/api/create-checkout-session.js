const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)


export default async (req,res)=>{
    const {items,email}=req.body;

    const transformedItems=items.map(item=>({
        description:item.description,
        quantity:1,
        price_data:{
            currency:'inr',
            unit_amount:item.price*10000,
            product_data:{
                name:item.title,
                images:[item.image],
                metadata:{
                    primeMembership:item.hasPrime
                }
            },
        }
    }));

    const session =  await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items: transformedItems,
        mode:'payment',
        shipping_address_collection:{
            allowed_countries:['GB','US','CA','IN']
        },  
        shipping_rates:['shr_1JUcHLSJ1h5qJkX2ZXIoIL8L'],
        
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.map(item=>item.image))
        }
    });

    res.status(200).json({
        id:session.id
    })    
}