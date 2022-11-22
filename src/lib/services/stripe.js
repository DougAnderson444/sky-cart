import Stripe from 'stripe-cloudflare'
import { STRIPE_SECRET_KEY } from '$env/static/private'

export const stripe = new Stripe(STRIPE_SECRET_KEY)
