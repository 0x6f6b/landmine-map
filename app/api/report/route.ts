import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createTransport } from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  // Create the user if one doesn't exist with the same email
  const user = await prisma.user.upsert({
    where: { email: body.email },
    update: {
      name: body.name,
    },
    create: {
      email: body.email,
      name: body.name,
    },
  });

  // Add the landmine to the database
  const landmine = await prisma.landmine.create({
    data: {
      lat: body.north,
      lng: body.east,
      killed: 0,
    },
  });

  // Create a report for the landmine
  await prisma.landmineReport.create({
    data: {
      userId: user.uid,
      landmineId: landmine.id,
    },
  });

  // Email the user to let them know their landmine report has been approved
  // ...existing code...

  // Email the user to let them know their landmine report has been approved
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: body.email,
    subject: "Landmine Report Approved",
    text: "Your landmine report has been approved. Your landmine is now on the interactive map!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  revalidatePath("/");

  return new Response(null, { status: 200 });
}
