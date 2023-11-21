import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const info = await request.json();

    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1O1BrsSCoK68ROrb8V1ply2T" }],
      line_items: info.map((item) => {
        // const img = item.image.asset._ref;
        // const newImage = img
        //   .replace(
        //     "image-",
        //     "https://cdn.sanity.io/images/vfxfwnaw/production/"
        //   )
        //   .replace("-webp", ".webp");
        return {
          price_data: {
            currency: "bdt",
            product_data: {
              name: item.title,
              // images need to have a url . LIke relative path like /cart.png will not work. It needs to be hosted
              // images: [item.image.public_url],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.totalQuantity,
        };
      }),
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/canceled`,
    };
    // Create Checkout Sessions from body params.

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json({ session, status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "There is error in the route",
      status: 500,
      error,
    });
  }
}
