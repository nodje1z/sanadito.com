import Plunk from "@plunk/node";
import { NextResponse } from "next/server";

const plunk = new Plunk(process.env.PLUNK_API_KEY!);

function isValidEmail(email: string) {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studioName, location, email, message } = body;

    // Validate required fields
    if (!studioName || !location || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      studioName: studioName.slice(0, 100).trim(),
      location: location.slice(0, 100).trim(),
      email: email.toLowerCase().trim(),
      message: message.slice(0, 1000).trim(),
    };

    // Send email to your personal email
    await plunk.emails.send({
      to: "devbytc@gmail.com",
      from: "distrib@sanadito.com",
      subject: "[SANADITO] Nueva Solicitud de Distribuidor",
      body: `
        <h2>Nueva Solicitud de Distribuidor</h2>
        <p><strong>Estudio:</strong> ${sanitizedData.studioName}</p>
        <p><strong>Ubicación:</strong> ${sanitizedData.location}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Mensaje:</strong> ${sanitizedData.message}</p>
      `,
    });

    // Send confirmation email to distributor
    await plunk.emails.send({
      to: sanitizedData.email,
      from: "distrib@sanadito.com",
      subject: "Hemos recibido tu solicitud - SɅNɅDITO®",
      body: `
        <h2>Gracias por tu interés en distribuir SɅNɅDITO®</h2>
        <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
        <p>Mientras tanto, puedes conocer más sobre nuestro producto en <a href="https://sanadito.com">sanadito.com</a></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: "Error al procesar tu solicitud. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
} 