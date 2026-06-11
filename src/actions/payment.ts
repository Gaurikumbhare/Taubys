"use server";

import Razorpay from "razorpay";
import crypto from "crypto";
import { CartItem } from "@/types";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export async function createRazorpayOrder(amount: number) {
  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return { success: true, order };
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return { success: false, error: "Failed to create payment order" };
  }
}

export async function verifyRazorpayPayment(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  signature: string,
  orderData: {
    items: CartItem[];
    total: number;
    address: string;
    pincode: string;
    deliveryDate: string;
    deliverySlot: string;
  }
) {
  try {
    const secret = process.env.RAZORPAY_KEY_SECRET || "";

    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(`${razorpayOrderId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");

    if (digest !== signature) {
      return { success: false, error: "Invalid payment signature" };
    }

    // TODO: Save order to AWS RDS via Prisma (coming soon)
    console.log("Order data to save:", orderData);

    return { success: true, orderId: razorpayOrderId };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return { success: false, error: "Failed to verify payment" };
  }
}